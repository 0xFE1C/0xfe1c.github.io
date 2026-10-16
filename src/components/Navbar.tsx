import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Download, Menu, X, Globe, Radio } from 'lucide-react';
import confetti from 'canvas-confetti';
import { type Language } from '../types.ts';
import { translations } from '../utils/translations.ts';
import { spaceAudio } from '../utils/audio.ts';
import { generateResumePDF } from '../utils/pdfGenerator.ts';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
}

const languageOptions: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(() => spaceAudio.getIsMuted());
  const [isDownloading, setIsDownloading] = useState(false);

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const muted = spaceAudio.toggleMute();
    setIsMuted(muted);
  };

  const handleDownloadPDF = () => {
    spaceAudio.playLaser();
    setIsDownloading(true);

    try {
      generateResumePDF();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.15 },
        colors: ['#06b6d4', '#8b5cf6', '#f59e0b', '#ec4899'],
      });
    } catch {
      // PDF generator error fallback
    } finally {
      setTimeout(() => setIsDownloading(false), 1200);
    }
  };

  const navLinks = [
    { href: '#orbit', label: t.nav.orbit },
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#skills', label: t.nav.skills },
    { href: '#certifications', label: t.nav.certifications },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'cosmic-glass py-2.5 border-b border-purple-500/20' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LOGO & ORBIT GLYPH */}
            <a
              href="#orbit"
              onClick={() => spaceAudio.playBlip(780)}
              className="group flex items-center space-x-3 cursor-pointer"
            >
              <div className="relative w-9 h-9 rounded-full bg-slate-950 border border-cyan-400/50 flex items-center justify-center overflow-hidden group-hover:border-purple-400 transition-colors shadow-lg shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-full border border-cyan-300/40 animate-spin-slow" />
                <div className="w-3.5 h-3.5 rounded-full bg-black border border-purple-400 shadow-inner" />
                <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-amber-300">
                  0xFE1C
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors">
                  FELIX · ORBIT
                </span>
              </div>
            </a>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center space-x-1 p-1 rounded-full bg-slate-950/70 border border-slate-800/80 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => spaceAudio.playBlip(600)}
                    className={`relative px-3.5 py-1.5 text-xs font-mono rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-950/50 border border-cyan-500/40 shadow-sm shadow-cyan-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* ACTIONS: AUDIO, LANGUAGE, DOWNLOAD PDF */}
            <div className="hidden sm:flex items-center space-x-2.5">
              {/* AUDIO SYNTH TOGGLE */}
              <button
                onClick={handleAudioToggle}
                title={isMuted ? t.hud.soundOff : t.hud.soundOn}
                className={`p-2 rounded-xl text-xs font-mono border transition-all duration-200 flex items-center space-x-1.5 ${
                  !isMuted
                    ? 'bg-cyan-950/60 border-cyan-400/60 text-cyan-300 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {!isMuted ? <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
                {!isMuted && <span className="text-[10px] text-cyan-300 hidden md:inline font-mono">LIVE SOUND</span>}
              </button>

              {/* LANGUAGE SELECTOR */}
              <div className="relative">
                <button
                  onClick={() => {
                    spaceAudio.playBlip(540);
                    setLangMenuOpen(!langMenuOpen);
                  }}
                  className="px-2.5 py-1.5 rounded-xl text-xs font-mono bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 text-slate-300 hover:text-white transition-all flex items-center space-x-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-purple-400" />
                  <span className="uppercase">{currentLang}</span>
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-xl cosmic-glass border border-purple-500/30 shadow-2xl py-1 z-50 animate-fadeIn">
                    {languageOptions.map((opt) => (
                      <button
                        key={opt.code}
                        onClick={() => {
                          spaceAudio.playBlip(680);
                          onLanguageChange(opt.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full px-3 py-1.5 text-xs text-left flex items-center justify-between transition-colors ${
                          currentLang === opt.code
                            ? 'bg-purple-900/40 text-cyan-300 font-bold'
                            : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center space-x-2">
                          <span>{opt.flag}</span>
                          <span>{opt.label}</span>
                        </span>
                        {currentLang === opt.code && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* DOWNLOAD PORTFOLIO PDF */}
              <button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 border border-cyan-400/40 shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/40 transition-all flex items-center space-x-2 group cursor-pointer"
              >
                <Download className={`w-3.5 h-3.5 ${isDownloading ? 'animate-bounce text-cyan-200' : 'group-hover:translate-y-0.5 transition-transform'}`} />
                <span>{isDownloading ? t.pdf.generating : t.nav.downloadResume}</span>
              </button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={handleAudioToggle}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              >
                {!isMuted ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE SLIDE-DOWN DRAWER */}
        {mobileMenuOpen && (
          <div className="sm:hidden cosmic-glass border-b border-purple-500/20 px-4 pt-3 pb-6 mt-2 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    spaceAudio.playBlip(620);
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 text-xs font-mono rounded-lg bg-slate-900/70 border border-slate-800 text-slate-200 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Language Selection Grid on Mobile */}
            <div className="pt-2 border-t border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-400 block mb-1.5 uppercase">Select Language</span>
              <div className="grid grid-cols-4 gap-1.5">
                {languageOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      spaceAudio.playBlip(650);
                      onLanguageChange(opt.code);
                    }}
                    className={`py-1 text-[11px] rounded border font-mono ${
                      currentLang === opt.code
                        ? 'bg-purple-900/60 border-cyan-400 text-cyan-300'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400'
                    }`}
                  >
                    {opt.flag} {opt.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile PDF Download */}
            <button
              onClick={() => {
                handleDownloadPDF();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl text-xs font-mono font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>{t.nav.downloadResume} (PDF 1 Hal)</span>
            </button>
          </div>
        )}
      </header>

      {/* TOP HUD TELEMETRY TICKER */}
      <div className="fixed top-16 left-0 right-0 z-40 pointer-events-none hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 bg-slate-950/40 backdrop-blur-sm border-x border-b border-purple-500/10 rounded-b-lg px-3 py-0.5">
            <div className="flex items-center space-x-3">
              <span className="flex items-center space-x-1.5 text-cyan-400">
                <Radio className="w-3 h-3 animate-pulse" />
                <span>{t.hud.status}: {t.hud.systemNominal}</span>
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">COORDS: 6°12&apos;S 106°49&apos;E (JAKARTA)</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-purple-400/80">ORBIT: UBSI IT S1 · FELIX</span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-400/80">GITHUB: @0xFE1C</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

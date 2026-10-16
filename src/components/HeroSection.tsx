import React from 'react';
import { ArrowRight, Download, Terminal, Sparkles, Orbit, Compass, Cpu, Palette } from 'lucide-react';
import confetti from 'canvas-confetti';
import { type Language } from '../types.ts';
import { translations } from '../utils/translations.ts';
import { spaceAudio } from '../utils/audio.ts';
import { generateResumePDF } from '../utils/pdfGenerator.ts';

interface HeroSectionProps {
  currentLang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const handleDownloadPDF = () => {
    spaceAudio.playLaser();
    try {
      generateResumePDF();
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.35 },
        colors: ['#22d3ee', '#a855f7', '#f59e0b', '#38bdf8'],
      });
    } catch {
      // PDF generation fallback
    }
  };

  return (
    <section id="orbit" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient radial glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: HERO TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* INITIALIZATION BADGES */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono shadow-sm shadow-purple-500/20">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>{t.hero.greeting}</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-700/60 text-slate-300 text-xs font-mono">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.hero.locationBadge}</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-amber-500/30 text-amber-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.hero.freelanceBadge}</span>
              </div>
            </div>

            {/* MAIN HEADLINE */}
            <div className="space-y-2">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {t.hero.tagline.split('in the Cosmic Void')[0]}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-300 glow-cyan">
                  {currentLang === 'id' ? 'di Ruang Hampa Kosmik' : 'in the Cosmic Void'}
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                onClick={() => spaceAudio.playBlip(720)}
                className="px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 border border-cyan-400/40 transition-all flex items-center space-x-2 group cursor-pointer"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleDownloadPDF}
                className="px-5 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-purple-500/40 hover:border-cyan-400 shadow-md shadow-purple-900/20 transition-all flex items-center space-x-2 cursor-pointer group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:animate-bounce" />
                <span>{t.hero.downloadCv}</span>
              </button>

              <a
                href="#contact"
                onClick={() => spaceAudio.playBlip(620)}
                className="px-4 py-3 rounded-xl font-mono text-xs sm:text-sm text-slate-400 hover:text-cyan-300 transition-colors flex items-center space-x-1.5"
              >
                <Terminal className="w-4 h-4 text-slate-500" />
                <span>{t.hero.ctaContact}</span>
              </a>
            </div>

            {/* TELEMETRY METRICS ROW */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3 rounded-xl cosmic-glass border border-purple-500/20">
                <div className="font-heading font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  3+
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">{t.hero.telemetry.experience}</div>
              </div>
              <div className="p-3 rounded-xl cosmic-glass border border-purple-500/20">
                <div className="font-heading font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  4
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">{t.hero.telemetry.disciplines}</div>
              </div>
              <div className="p-3 rounded-xl cosmic-glass border border-purple-500/20">
                <div className="font-heading font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  LIVE
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">{t.hero.telemetry.codePushed}</div>
              </div>
              <div className="p-3 rounded-xl cosmic-glass border border-purple-500/20">
                <div className="font-heading font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  ∞
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">{t.hero.telemetry.creativity}</div>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE HOLOGRAPHIC ORBIT CORE */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
              {/* Concentric rotating orbital rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin-slow" />
              <div
                className="absolute inset-4 rounded-full border border-dashed border-cyan-400/30 animate-spin-slow"
                style={{ animationDirection: 'reverse', animationDuration: '32s' }}
              />
              <div className="absolute inset-10 rounded-full border border-amber-400/20" />

              {/* Orbiting Satellite Dots */}
              <div
                className="absolute top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 flex items-center justify-center animate-spin-slow"
                style={{ transformOrigin: 'center 140px' }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50 flex items-center justify-center animate-spin-slow"
                style={{ transformOrigin: 'center -130px', animationDirection: 'reverse' }}
              >
                <div className="w-1 h-1 rounded-full bg-white" />
              </div>

              {/* Central Glowing Identity Crystal */}
              <div className="relative z-10 w-48 h-48 rounded-2xl cosmic-glass border border-cyan-400/40 shadow-2xl shadow-purple-500/30 flex flex-col items-center justify-center p-6 text-center backdrop-blur-2xl group hover:border-cyan-300 transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-purple-900 to-cyan-900 border border-cyan-400/50 flex items-center justify-center shadow-lg shadow-cyan-500/30 mb-3 group-hover:scale-110 transition-transform">
                  <Orbit className="w-7 h-7 text-cyan-300 animate-spin-slow" />
                </div>
                <div className="font-heading font-extrabold text-xl text-white tracking-wider">
                  0xFE1C
                </div>
                <div className="text-xs font-mono text-cyan-300 font-semibold tracking-wide mt-0.5">
                  FELIX
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-2 px-2.5 py-0.5 rounded-full bg-slate-900/80 border border-slate-700">
                  JULY 2005 · JAKARTA
                </div>
              </div>

              {/* Satellite discipline chips floating around */}
              <div className="absolute -top-3 -right-2 px-3 py-1.5 rounded-lg cosmic-glass border border-cyan-400/30 text-[11px] font-mono text-cyan-300 flex items-center space-x-1.5 shadow-lg shadow-cyan-500/20 animate-float">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Fullstack</span>
              </div>

              <div
                className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-lg cosmic-glass border border-purple-400/30 text-[11px] font-mono text-purple-300 flex items-center space-x-1.5 shadow-lg shadow-purple-500/20 animate-float"
                style={{ animationDelay: '2s' }}
              >
                <Palette className="w-3.5 h-3.5 text-purple-400" />
                <span>3D / 2D Art</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

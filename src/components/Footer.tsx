import React from 'react';
import { ArrowUp, Mail, Orbit } from 'lucide-react';
import { type Language } from '../types.ts';
import { spaceAudio } from '../utils/audio.ts';
import { GithubIcon } from './GithubIcon.tsx';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    spaceAudio.playBlip(800);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 z-10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* BRAND & STATUS */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-slate-900 border border-cyan-400/40 flex items-center justify-center">
            <Orbit className="w-4 h-4 text-cyan-400 animate-spin-slow" />
          </div>
          <div>
            <div className="font-heading font-bold text-sm text-white">
              0xFE1C · FELIX
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              JAKARTA, ID · S1 TEKNOLOGI INFORMASI UBSI
            </div>
          </div>
        </div>

        {/* ORBIT TELEMETRY PILL */}
        <div className="text-center font-mono text-[11px] text-slate-400">
          <span className="text-cyan-400 font-semibold">COSMIC ORBIT v3.0</span> · DEEP SPACE ARCHITECTURE
          <div className="text-[10px] text-slate-500 mt-0.5">
            Designed & Engineered with React, Tailwind CSS & HTML5 Canvas
          </div>
        </div>

        {/* SOCIAL LINKS & BACK TO TOP */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/0xFE1C"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="mailto:0xFE1C@proton.me"
            title="Email Felix"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            title="Back to Top Orbit"
            className="p-2 rounded-xl bg-gradient-to-r from-purple-900 to-cyan-900 border border-cyan-400/40 text-cyan-300 hover:text-white shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

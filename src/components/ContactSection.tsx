import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Terminal, Shield, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { type Language } from '../types.ts';
import { translations } from '../utils/translations.ts';
import { spaceAudio } from '../utils/audio.ts';
import { GithubIcon } from './GithubIcon.tsx';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [transmissionSent, setTransmissionSent] = useState(false);

  const t = translations[currentLang];
  const emailAddress = '0xFE1C@proton.me';

  const handleCopyEmail = () => {
    spaceAudio.playLaser();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#8b5cf6', '#f59e0b'],
    });

    setTimeout(() => setCopied(false), 2500);
  };

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    spaceAudio.playLaser();
    setTransmissionSent(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.75 },
      colors: ['#38bdf8', '#c084fc', '#f59e0b', '#34d399'],
    });

    const subject = encodeURIComponent(`Project Inquiry from ${senderName || 'Anonymous Explorer'}`);
    const body = encodeURIComponent(
      `Hello Felix (0xFE1C),\n\n${senderMessage || 'I would like to discuss a project or collaboration.'}\n\nBest regards,\n${senderName || 'Explorer'}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-400/40 text-cyan-300 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">{t.contact.title}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.contact.subtitle}
          </h2>
        </div>

        {/* TERMINAL & DIRECT TRANSMISSION CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: ENCRYPTED PROTONMAIL CARD */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl cosmic-glass border border-cyan-500/20 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-300">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>{t.contact.emailLabel}</span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-white">
                0xFE1C@proton.me
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                End-to-end encrypted messaging via Proton. Ideal for freelance contracts, custom app architecture, confidential inquiries, or collaboration.
              </p>
            </div>

            <div className="space-y-3">
              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="w-full py-3 rounded-xl font-mono text-xs font-semibold text-white bg-slate-900 border border-purple-500/40 hover:border-cyan-400 shadow-md hover:shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">{t.contact.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-400" />
                    <span>{t.contact.copyEmail}</span>
                  </>
                )}
              </button>

              {/* Direct Mailto */}
              <a
                href={`mailto:${emailAddress}`}
                onClick={() => spaceAudio.playBlip(700)}
                className="w-full py-3 rounded-xl font-mono text-xs font-semibold text-slate-200 hover:text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-cyan-300" />
                <span>{t.contact.sendEmail}</span>
              </a>
            </div>

            {/* SOCIAL / PLATFORMS PILLS */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Direct Node:</span>
              <a
                href="https://github.com/0xFE1C"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/0xFE1C</span>
              </a>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE QUANTUM TRANSMITTER TERMINAL */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl cosmic-glass border border-purple-500/30 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono font-bold text-white tracking-widest">
                  {t.contact.terminalTitle}
                </span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            <form onSubmit={handleTransmit} className="space-y-4 my-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  &gt; IDENTIFIER (NAME / ORGANIZATION)
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-400 text-xs font-mono text-white placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  &gt; PAYLOAD / MESSAGE DATA
                </label>
                <textarea
                  rows={4}
                  required
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder={t.contact.msgPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-400 text-xs font-mono text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              {transmissionSent && (
                <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-400 text-xs font-mono text-cyan-300 animate-fadeIn flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-cyan-300 animate-spin" />
                  <span>{t.contact.transmissionSent}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer group"
              >
                <Send className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
                <span>{t.contact.sendTransmission}</span>
              </button>
            </form>

            <div className="text-[10px] font-mono text-slate-500 text-center">
              SECURE TLS ROUTING · DIRECT PACKET DISPATCH TO 0xFE1C@PROTON.ME
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

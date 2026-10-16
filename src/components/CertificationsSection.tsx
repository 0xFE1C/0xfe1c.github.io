import React, { useState } from 'react';
import { Award, ShieldCheck, ExternalLink, Calendar, Hash } from 'lucide-react';
import { type CertificationItem, type Language } from '../types.ts';
import { translations } from '../utils/translations.ts';
import { certificationsData } from '../data/portfolioData.ts';
import { CertificateModal } from './CertificateModal.tsx';
import { spaceAudio } from '../utils/audio.ts';

interface CertificationsSectionProps {
  currentLang: Language;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ currentLang }) => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const t = translations[currentLang];

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">{t.certifications.title}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.certifications.subtitle}
          </h2>
        </div>

        {/* CERTIFICATION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => {
                spaceAudio.playBlip(750);
                setSelectedCert(cert);
              }}
              className="p-6 sm:p-7 rounded-2xl cosmic-glass-interactive flex flex-col justify-between space-y-5 cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>{t.certifications.verified}</span>
                  </div>
                  <span className="flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-mono text-slate-300">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-400 mt-0.5">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-[11px] font-mono text-slate-400">
                  <Hash className="w-3.5 h-3.5 text-amber-400" />
                  <span>{cert.credentialId}</span>
                </div>

                <span className="text-xs font-mono text-cyan-400 group-hover:text-cyan-300 flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform">
                  <span>{t.certifications.viewCredential}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
        currentLang={currentLang}
      />
    </section>
  );
};

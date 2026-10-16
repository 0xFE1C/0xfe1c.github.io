import React, { useState } from 'react';
import { Award, ShieldCheck, ExternalLink, Calendar, Hash, Download, FileText } from 'lucide-react';
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
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-2xl mx-auto">
            Official verified certifications, institutional credentials, and leadership appointment letters with downloadable original PDF documents.
          </p>
        </div>

        {/* CERTIFICATION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => {
            const hasPdf = Boolean(cert.pdfUrl);
            const previewImg = cert.previewImages?.[0];

            return (
              <div
                key={cert.id}
                onClick={() => {
                  spaceAudio.playBlip(750);
                  setSelectedCert(cert);
                }}
                className="p-5 sm:p-6 rounded-2xl cosmic-glass-interactive flex flex-col justify-between space-y-4 cursor-pointer group border border-slate-800 hover:border-cyan-400/50 transition-all relative overflow-hidden"
              >
                {/* TOP BADGES */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-1.5 text-xs font-mono text-cyan-400">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>{t.certifications.verified}</span>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      {hasPdf && (
                        <span className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                          <FileText className="w-2.5 h-2.5" />
                          <span>PDF</span>
                        </span>
                      )}
                      <span className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-mono text-slate-300">
                        <Calendar className="w-2.5 h-2.5 text-purple-400" />
                        <span>{cert.date.split(' ')[0]}</span>
                      </span>
                    </div>
                  </div>

                  {/* THUMBNAIL PREVIEW (IF AVAILABLE) */}
                  {previewImg && (
                    <div className="relative w-full h-36 rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/60 group-hover:border-cyan-500/30 transition-all flex items-center justify-center">
                      <img
                        src={previewImg}
                        alt={`${cert.title} thumbnail`}
                        className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-cyan-300 bg-slate-950/80 px-2 py-1 rounded backdrop-blur-sm border border-cyan-500/20">
                        <span>Click to Inspect Full Preview</span>
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-purple-400 mt-0.5 line-clamp-1">
                      {cert.issuer}
                    </p>
                    {cert.recipientName && (
                      <p className="text-[11px] font-mono text-slate-400 mt-1">
                        Holder: <span className="text-slate-200">{cert.recipientName}</span>
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* BOTTOM FOOTER WITH DOWNLOAD & VIEW ACTIONS */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-1 text-[11px] font-mono text-slate-400 truncate max-w-[150px]">
                    <Hash className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="truncate">{cert.credentialId}</span>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    {hasPdf && (
                      <a
                        href={cert.pdfUrl}
                        download={cert.downloadName || `${cert.id}.pdf`}
                        onClick={(e) => {
                          e.stopPropagation();
                          spaceAudio.playLaser();
                        }}
                        className="p-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 hover:text-white transition-colors cursor-pointer"
                        title="Download Certificate PDF"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <span className="text-xs font-mono text-cyan-400 group-hover:text-cyan-300 flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform">
                      <span>{t.certifications.viewCredential}</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
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

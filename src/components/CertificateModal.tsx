import React from 'react';
import { X, Award, CheckCircle, ShieldCheck, Calendar, Hash } from 'lucide-react';
import { type CertificationItem, type Language } from '../types.ts';
import { translations } from '../utils/translations.ts';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
  currentLang: Language;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose, currentLang }) => {
  if (!cert) return null;
  const t = translations[currentLang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl cosmic-glass border border-cyan-400/40 shadow-2xl shadow-purple-500/30 space-y-6">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HOLOGRAPHIC CREDENTIAL HEADER */}
        <div className="flex items-center space-x-3.5">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-900 to-cyan-900 border border-cyan-400/50 text-cyan-300 shadow-lg shadow-cyan-500/30">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-mono text-cyan-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.certifications.verified}</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-white mt-0.5">
              {cert.title}
            </h3>
          </div>
        </div>

        {/* DETAILS TABLE */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3 text-xs font-mono">
          <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
            <span className="text-slate-400">{t.certifications.issuedBy}</span>
            <span className="text-slate-200 font-semibold">{cert.issuer}</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
            <span className="text-slate-400 flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              <span>Issue Year</span>
            </span>
            <span className="text-cyan-300">{cert.date}</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
            <span className="text-slate-400 flex items-center space-x-1">
              <Hash className="w-3.5 h-3.5 text-amber-400" />
              <span>Credential ID</span>
            </span>
            <span className="text-amber-300 font-mono">{cert.credentialId}</span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {cert.description}
        </p>

        {/* VERIFIED SKILLS BADGES */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono text-slate-400 block uppercase">
            Validated Competencies:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {cert.skills.map((s, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono flex items-center space-x-1"
              >
                <CheckCircle className="w-3 h-3 text-cyan-400" />
                <span>{s}</span>
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl font-mono text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-md transition-all"
          >
            Close Transmission
          </button>
        </div>
      </div>
    </div>
  );
};

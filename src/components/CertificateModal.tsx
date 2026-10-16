import React, { useState } from 'react';
import { X, Award, CheckCircle, ShieldCheck, Calendar, Hash, Download, ExternalLink, User, FileText } from 'lucide-react';
import { type CertificationItem, type Language } from '../types.ts';
import { translations } from '../utils/translations.ts';
import { spaceAudio } from '../utils/audio.ts';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
  currentLang: Language;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose, currentLang }) => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  if (!cert) return null;
  const t = translations[currentLang];

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    spaceAudio.playLaser();
  };

  const previewImages = cert.previewImages || [];
  const hasMultiplePages = previewImages.length > 1;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl my-auto p-5 sm:p-7 rounded-2xl cosmic-glass border border-cyan-400/50 shadow-2xl shadow-purple-500/30 space-y-5 max-h-[92vh] overflow-y-auto"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors z-20 cursor-pointer"
          title="Close transmission"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="flex items-start space-x-3.5 pr-10">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-900 via-indigo-900 to-cyan-900 border border-cyan-400/50 text-cyan-300 shadow-lg shadow-cyan-500/30 shrink-0">
            <Award className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center space-x-1 text-xs font-mono text-cyan-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.certifications.verified}</span>
              </span>
              {cert.pdfUrl && (
                <span className="px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                  Official PDF Available
                </span>
              )}
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-white mt-1">
              {cert.title}
            </h3>
            <p className="text-xs font-mono text-purple-300 mt-0.5">
              {cert.issuer}
            </p>
          </div>
        </div>

        {/* DOCUMENT PREVIEW SECTION (IF AVAILABLE) */}
        {previewImages.length > 0 && (
          <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 sm:p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-300">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>DOCUMENT PREVIEW</span>
              </div>

              {/* PAGE SWITCHER TABS FOR MULTI-PAGE DOCS */}
              {hasMultiplePages && (
                <div className="flex items-center space-x-1.5 p-1 rounded-lg bg-slate-900 border border-slate-800">
                  {previewImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        spaceAudio.playBlip(680);
                        setActivePageIndex(idx);
                      }}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                        activePageIndex === idx
                          ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Page {idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* PREVIEW IMAGE WRAPPER */}
            <div className="relative rounded-lg overflow-hidden border border-slate-800/80 bg-black/40 flex items-center justify-center max-h-[380px] sm:max-h-[460px]">
              <img
                src={previewImages[activePageIndex] || previewImages[0]}
                alt={`${cert.title} preview`}
                className="max-h-[380px] sm:max-h-[460px] w-auto object-contain rounded shadow-lg transition-transform hover:scale-[1.01]"
              />
            </div>
          </div>
        )}

        {/* DETAILS TABLE */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2 text-xs font-mono">
          {cert.recipientName && (
            <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
              <span className="text-slate-400 flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span>Recipient Name</span>
              </span>
              <span className="text-white font-semibold">{cert.recipientName}</span>
            </div>
          )}

          <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
            <span className="text-slate-400">{t.certifications.issuedBy}</span>
            <span className="text-slate-200 font-semibold">{cert.issuer}</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
            <span className="text-slate-400 flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              <span>Issue Date / Period</span>
            </span>
            <span className="text-cyan-300">{cert.date}</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
            <span className="text-slate-400 flex items-center space-x-1.5">
              <Hash className="w-3.5 h-3.5 text-amber-400" />
              <span>Credential ID / Number</span>
            </span>
            <span className="text-amber-300 font-mono select-all">{cert.credentialId}</span>
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

        {/* ACTION BUTTONS (DOWNLOAD PDF & OPEN EXTERNAL) */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          {cert.pdfUrl ? (
            <>
              <a
                href={cert.pdfUrl}
                download={cert.downloadName || `${cert.id}.pdf`}
                onClick={handleDownload}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl font-mono text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Certificate (PDF)</span>
              </a>

              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => spaceAudio.playBlip(720)}
                className="w-full sm:w-auto py-3 px-4 rounded-xl font-mono text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/50 flex items-center justify-center space-x-1.5 transition-all"
              >
                <span>Open in Tab</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </>
          ) : (
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl font-mono text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-md transition-all cursor-pointer"
            >
              Close Transmission
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

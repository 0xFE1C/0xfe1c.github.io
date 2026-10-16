import React from 'react';
import { Briefcase, Code2, CheckCircle2, MapPin, Calendar, Layers, Users } from 'lucide-react';
import { type Language } from '../types.ts';
import { translations } from '../utils/translations.ts';
import { getExperienceData } from '../data/portfolioData.ts';
import { spaceAudio } from '../utils/audio.ts';

interface ExperienceSectionProps {
  currentLang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const experiences = getExperienceData(currentLang);

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">{t.experience.title}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.experience.subtitle}
          </h2>
        </div>

        {/* MISSION LOGS TIMELINE CARDS */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onMouseEnter={() => spaceAudio.playBlip(640)}
              className="p-6 sm:p-8 rounded-2xl cosmic-glass-interactive border border-slate-800 hover:border-cyan-400/50 transition-all space-y-6"
            >
              {/* TOP HEADER */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-purple-500/30 text-purple-400 shadow-md shadow-purple-900/30">
                    {exp.id === 'freelance-dev' ? (
                      <Code2 className="w-6 h-6 text-cyan-400" />
                    ) : exp.id === 'hmti-litbang' ? (
                      <Users className="w-6 h-6 text-purple-300" />
                    ) : (
                      <Briefcase className="w-6 h-6 text-amber-400" />
                    )}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-heading font-bold text-xl text-white">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-[11px] font-mono">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-sm font-mono text-purple-300 font-medium mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* DESCRIPTION & ACHIEVEMENTS */}
              <div className="space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2.5">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{t.experience.highlights}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.achievements.map((ach, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start space-x-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 font-mono leading-normal">
                          {ach}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SKILLS PILLS */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-purple-500/20 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 text-[11px] font-mono transition-colors"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

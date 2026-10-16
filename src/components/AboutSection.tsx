import React from 'react';
import { User, GraduationCap, Zap, School, MapPin, Calendar, Code, Sparkles, Box, Brush, Award } from 'lucide-react';
import { type Language } from '../types.ts';
import { translations } from '../utils/translations.ts';
import { educationData } from '../data/portfolioData.ts';
import { spaceAudio } from '../utils/audio.ts';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">{t.about.title}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.about.subtitle}
          </h2>
        </div>

        {/* PROFILE STORY & PERSONAL DATA CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: BIO LOGBOOK */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl cosmic-glass border border-purple-500/20 space-y-5">
            <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <h3 className="font-heading font-bold text-lg text-white">
                STATION LOG ENTRY · AGY-0xFE1C
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.about.bio1}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.about.bio2}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.about.bio3}
            </p>

            {/* CREATIVE PILLARS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col items-center text-center">
                <Code className="w-5 h-5 text-cyan-400 mb-1" />
                <span className="text-xs font-mono font-semibold text-slate-200">Fullstack</span>
                <span className="text-[10px] text-slate-400">Web/App/Desktop</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col items-center text-center">
                <Sparkles className="w-5 h-5 text-purple-400 mb-1" />
                <span className="text-xs font-mono font-semibold text-slate-200">UI/UX</span>
                <span className="text-[10px] text-slate-400">Figma / Systems</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col items-center text-center">
                <Box className="w-5 h-5 text-amber-400 mb-1" />
                <span className="text-xs font-mono font-semibold text-slate-200">3D Artist</span>
                <span className="text-[10px] text-slate-400">Blender Spatial</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col items-center text-center">
                <Brush className="w-5 h-5 text-pink-400 mb-1" />
                <span className="text-xs font-mono font-semibold text-slate-200">2D Artist</span>
                <span className="text-[10px] text-slate-400">Digital / Pixiv</span>
              </div>
            </div>
          </div>

          {/* RIGHT: IDENTITY METRICS & TELEMETRY */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl cosmic-glass border border-cyan-500/20 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                PILOT DOSSIER
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">
                Felix · 0xFE1C
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center space-x-3.5">
                <div className="p-2 rounded-lg bg-purple-900/40 text-purple-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">BIRTH DATE & AGE</div>
                  <div className="text-xs font-mono font-semibold text-slate-200">{t.about.personalData.age}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center space-x-3.5">
                <div className="p-2 rounded-lg bg-cyan-900/40 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">BASE LOCATION</div>
                  <div className="text-xs font-mono font-semibold text-slate-200">{t.about.personalData.location}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center space-x-3.5">
                <div className="p-2 rounded-lg bg-amber-900/40 text-amber-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">CURRENT STATUS</div>
                  <div className="text-xs font-mono font-semibold text-slate-200">{t.about.personalData.status}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center space-x-3.5">
                <div className="p-2 rounded-lg bg-emerald-900/40 text-emerald-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">CIRCUIT TO CODE</div>
                  <div className="text-xs font-mono font-semibold text-slate-200">TITL Electrical &rarr; S1 Information Tech</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-purple-500/30 flex items-center space-x-3.5">
                <div className="p-2 rounded-lg bg-purple-900/40 text-purple-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-purple-300">ORGANIZATION LEADERSHIP</div>
                  <div className="text-xs font-mono font-semibold text-slate-200">Ketua Divisi Litbang · HMTI DPC Pemuda (2025/2026)</div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-cyan-900/30 border border-purple-500/30 text-xs font-mono text-slate-300">
              <span className="text-cyan-400 font-bold">&gt; MISSION STATEMENT: </span>
              Crafting robust, high-performance software and immersive 3D/2D digital realities with mathematical rigor and spatial artistry.
            </div>
          </div>
        </div>

        {/* ACADEMIC TRAJECTORY (EDUCATION TIMELINE) */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              {t.about.educationTitle}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-slate-400">
              {t.about.educationSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((item) => {
              const iconMap: Record<string, React.ReactNode> = {
                GraduationCap: <GraduationCap className="w-6 h-6 text-cyan-400" />,
                Zap: <Zap className="w-6 h-6 text-amber-400" />,
                School: <School className="w-6 h-6 text-purple-400" />,
              };

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => spaceAudio.playBlip(700)}
                  className="p-6 rounded-2xl cosmic-glass-interactive flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 group-hover:border-cyan-400 transition-colors">
                        {iconMap[item.icon]}
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-[10px] font-mono text-cyan-300">
                        {item.period}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs font-mono text-purple-400 tracking-wide font-medium">
                        {item.badge}
                      </div>
                      <h4 className="font-heading font-bold text-lg text-white mt-1 group-hover:text-cyan-300 transition-colors">
                        {item.institution}
                      </h4>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        {item.degree}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-4 border-t border-slate-800">
                    {item.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start space-x-2 text-[11px] text-slate-400 font-mono">
                        <span className="text-cyan-400 mt-0.5">&bull;</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

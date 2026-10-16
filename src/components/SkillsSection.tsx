import React, { useState } from 'react';
import { Cpu, Globe, Smartphone, Palette, Check } from 'lucide-react';
import { type Language } from '../types.ts';
import { translations } from '../utils/translations.ts';
import { skillCategories } from '../data/portfolioData.ts';
import { spaceAudio } from '../utils/audio.ts';

interface SkillsSectionProps {
  currentLang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<number | 'all'>('all');
  const t = translations[currentLang];

  const filterButtons = [
    { id: 'all', label: t.skills.categories.all },
    { id: 0, label: t.skills.categories.web },
    { id: 1, label: t.skills.categories.systems },
    { id: 2, label: t.skills.categories.creative },
    { id: 3, label: t.skills.categories.engineering },
  ];

  const displayedCategories =
    activeCategory === 'all'
      ? skillCategories
      : [skillCategories[activeCategory as number]];

  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-5 h-5 text-cyan-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-purple-400" />,
    Palette: <Palette className="w-5 h-5 text-pink-400" />,
    Cpu: <Cpu className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">{t.skills.title}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.skills.subtitle}
          </h2>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterButtons.map((btn) => (
            <button
              key={String(btn.id)}
              onClick={() => {
                spaceAudio.playBlip(680);
                setActiveCategory(btn.id as number | 'all');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeCategory === btn.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/50'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-purple-500/30'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* SKILLS DISPLAY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl cosmic-glass border border-slate-800/90 space-y-6"
            >
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80">
                  {iconMap[cat.icon]}
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5 group">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Glowing Progress bar */}
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-400 shadow-sm transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <p className="text-[11px] text-slate-400 font-mono leading-tight pl-5">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

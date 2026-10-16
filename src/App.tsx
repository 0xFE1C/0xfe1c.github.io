import { useState, useEffect } from 'react';
import { type Language } from './types.ts';
import { spaceAudio } from './utils/audio.ts';
import { CosmicBackground } from './components/CosmicBackground.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { CertificationsSection } from './components/CertificationsSection.tsx';
import { GithubReposSection } from './components/GithubReposSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('0xfe1c_lang');
    return (saved as Language) || 'en'; // English by default as requested!
  });

  const [activeSection, setActiveSection] = useState<string>('orbit');

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('0xfe1c_lang', lang);
  };

  useEffect(() => {
    spaceAudio.attachAutoStart();

    const sections = ['orbit', 'about', 'experience', 'skills', 'certifications', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020108] text-slate-100 selection:bg-purple-600 selection:text-white">
      {/* INTERACTIVE BLACK HOLE & GALAXY STARFIELD CANVAS */}
      <CosmicBackground />

      {/* TOP NAVIGATION & HUD */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        activeSection={activeSection}
      />

      {/* MAIN COSMIC CONTENT SECTIONS */}
      <main className="relative z-10 space-y-8">
        <HeroSection currentLang={currentLang} />
        <AboutSection currentLang={currentLang} />
        <ExperienceSection currentLang={currentLang} />
        <SkillsSection currentLang={currentLang} />
        <CertificationsSection currentLang={currentLang} />
        <GithubReposSection currentLang={currentLang} />
        <ContactSection currentLang={currentLang} />
      </main>

      {/* FOOTER */}
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App;

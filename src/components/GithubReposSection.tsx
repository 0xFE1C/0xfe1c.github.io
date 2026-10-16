import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Star, GitFork, RefreshCw, Search, ExternalLink, Code2, Clock } from 'lucide-react';
import { type GithubRepo, type Language } from '../types.ts';
import { translations } from '../utils/translations.ts';
import { fallbackRepos } from '../data/portfolioData.ts';
import { spaceAudio } from '../utils/audio.ts';
import { GithubIcon } from './GithubIcon.tsx';

interface GithubReposSectionProps {
  currentLang: Language;
}

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Vue: '#41b883',
  Rust: '#dea584',
  Go: '#00ADD8',
  Shell: '#89e051',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Markdown: '#083fa1',
};

export const GithubReposSection: React.FC<GithubReposSectionProps> = ({ currentLang }) => {
  const [repos, setRepos] = useState<GithubRepo[]>(() => {
    try {
      const cached = localStorage.getItem('0xfe1c_cached_real_repos');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // Fallback
    }
    return fallbackRepos;
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [lastSynced, setLastSynced] = useState<string | null>(null);
  const [isLive, setIsLive] = useState<boolean>(false);

  const t = translations[currentLang];

  const fetchGithubRepos = useCallback(async () => {
    try {
      // Fetch 100% REAL public repositories of user 0xFE1C
      const response = await fetch('https://api.github.com/users/0xFE1C/repos?sort=updated&per_page=100', {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (!response.ok) {
        throw new Error(`GitHub API status: ${response.status}`);
      }

      const data: GithubRepo[] = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setRepos(data);
        setIsLive(true);
        try {
          localStorage.setItem('0xfe1c_cached_real_repos', JSON.stringify(data));
        } catch {
          // Ignore storage quota
        }
      }
    } catch {
      // If error/rate limit, keep cached real repos if available
      try {
        const cached = localStorage.getItem('0xfe1c_cached_real_repos');
        if (cached) {
          setRepos(JSON.parse(cached));
        } else {
          setRepos(fallbackRepos);
        }
      } catch {
        setRepos(fallbackRepos);
      }
      setIsLive(false);
    } finally {
      setLoading(false);
      setLastSynced(new Date().toLocaleTimeString());
    }
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    spaceAudio.playBlip(720);
    fetchGithubRepos();
  };

  useEffect(() => {
    fetchGithubRepos();
  }, [fetchGithubRepos]);

  // Extract unique languages for filter
  const availableLanguages = useMemo(() => {
    const langs = new Set<string>();
    repos.forEach((r) => {
      if (r.language) langs.add(r.language);
    });
    return Array.from(langs);
  }, [repos]);

  // Filter repos by search and language
  const filteredRepos = useMemo(() => {
    return repos.filter((r) => {
      const matchesSearch =
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (r.description && r.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        r.topics?.some((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLang = selectedLanguage === 'all' || r.language === selectedLanguage;

      return matchesSearch && matchesLang;
    });
  }, [repos, searchQuery, selectedLanguage]);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs font-mono shadow-sm shadow-cyan-500/20">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{t.projects.realtimeBadge}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-slate-300">
            {t.projects.subtitle}
          </p>
        </div>

        {/* CONTROLS BAR: SEARCH, LANGUAGE FILTERS & LIVE REFRESH BUTTON */}
        <div className="p-4 sm:p-5 rounded-2xl cosmic-glass border border-slate-800 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* SEARCH INPUT */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.projects.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-400 text-xs font-mono text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>

            {/* SYNC STATUS & REFRESH BUTTON */}
            <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-end">
              <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                <span>
                  {isLive ? 'Live GitHub Sync' : 'Synced'} {lastSynced && `· ${lastSynced}`}
                </span>
              </div>

              <button
                onClick={handleRefresh}
                disabled={loading}
                className="px-3.5 py-2 rounded-xl bg-slate-900 border border-purple-500/40 hover:border-cyan-400 text-xs font-mono text-cyan-300 hover:text-white transition-all flex items-center space-x-2 cursor-pointer shadow-sm shadow-purple-900/30"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
                <span>{loading ? t.projects.fetching : t.projects.refresh}</span>
              </button>
            </div>
          </div>

          {/* LANGUAGE PILLS */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/80">
            <button
              onClick={() => {
                spaceAudio.playBlip(620);
                setSelectedLanguage('all');
              }}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                selectedLanguage === 'all'
                  ? 'bg-cyan-950/70 border border-cyan-400 text-cyan-300'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.projects.filterAll} ({repos.length})
            </button>

            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  spaceAudio.playBlip(640);
                  setSelectedLanguage(lang);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono flex items-center space-x-1.5 transition-colors ${
                  selectedLanguage === lang
                    ? 'bg-purple-950/70 border border-purple-400 text-purple-200'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: languageColors[lang] || '#8b5cf6' }}
                />
                <span>{lang}</span>
              </button>
            ))}
          </div>
        </div>

        {/* REPOSITORIES GRID - 100% REAL GITHUB REPOS & CLICKABLE CARDS */}
        {filteredRepos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => spaceAudio.playBlip(690)}
                className="p-6 rounded-2xl cosmic-glass-interactive flex flex-col justify-between space-y-4 group cursor-pointer text-left block no-underline"
              >
                <div className="space-y-3">
                  {/* REPO TITLE & GITHUB ICON */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center space-x-2 text-white font-heading font-bold text-base group-hover:text-cyan-300 transition-colors">
                      <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="truncate max-w-[210px]" title={repo.name}>
                        {repo.name}
                      </span>
                    </div>

                    <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-400 transition-colors shrink-0">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* REAL REPO DESCRIPTION */}
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed min-h-[3.75rem]">
                    {repo.description || 'Public repository on github.com/0xFE1C'}
                  </p>

                  {/* REAL REPO TOPICS / TAGS */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 4).map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-purple-500/20 text-[10px] font-mono text-purple-300"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* BOTTOM TELEMETRY BAR: REAL STARS, FORKS, LANGUAGE & LINK */}
                <div className="pt-3 border-t border-slate-800/90 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center space-x-3">
                    {/* Primary Language */}
                    {repo.language && (
                      <span className="flex items-center space-x-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: languageColors[repo.language] || '#38bdf8' }}
                        />
                        <span className="text-slate-300">{repo.language}</span>
                      </span>
                    )}

                    {/* Real Stars Count */}
                    <span className="flex items-center space-x-1 text-slate-300 group-hover:text-amber-300 transition-colors">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>

                    {/* Real Forks Count */}
                    <span className="flex items-center space-x-1 text-slate-300">
                      <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>

                  {/* Direct Link indicator */}
                  <span className="flex items-center space-x-1 text-cyan-400 group-hover:text-cyan-300 text-[11px] font-semibold">
                    <span>{repo.homepage ? t.projects.liveDemo : t.projects.viewCode}</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl cosmic-glass border border-slate-800 text-slate-400 font-mono text-sm">
            {t.projects.noReposFound}
          </div>
        )}
      </div>
    </section>
  );
};

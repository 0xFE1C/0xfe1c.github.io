export type Language = 'en' | 'id' | 'ja' | 'zh' | 'es' | 'de' | 'fr' | 'ko';

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  pushed_at: string;
  created_at: string;
  size: number;
  fork: boolean;
  visibility?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  icon: string;
  badge: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  icon: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl?: string;
  pdfUrl?: string;
  previewImages?: string[];
  recipientName?: string;
  downloadName?: string;
  skills: string[];
  category: 'dev' | 'electrical' | '3d' | 'cloud' | 'organization';
  description: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    icon?: string;
    description: string;
  }[];
}

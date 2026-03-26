export interface HeroMetric {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  site: string;
  resumeFile: string;
  focusAreas: string[];
  heroMetrics: HeroMetric[];
  achievements: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  metrics: string[];
  bullets: string[];
  tech: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  short: string;
  thumb: string;
  hero?: string;
  tech: string[];
  metrics: string[];
  links?: ProjectLink[];
  problem?: string;
  users?: string;
  constraints?: string[];
  approach?: string[];
  architectureFlow?: string[];
  challenges?: string[];
  resultsTitle?: string;
  results?: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  meta: string;
}

export interface Certification {
  title: string;
  detail: string;
}

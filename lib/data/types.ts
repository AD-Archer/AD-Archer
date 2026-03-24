export type Tag = {
  id: string;
  name: string;
  color: string;
};

export type Technology = {
  name: string;
  color: string;
};

export type Project = {
  id: string;
  title: string;
  description: string; // Short description for SEO, sharing, and hero section
  longDescription?: string; // Detailed description for project details section
  image: string;
  tags: string[];
  technologies?: Technology[];
  featured: boolean;
  featuredPriority?: number; // 1 = highest priority, 2 = second, etc. Lower numbers = higher priority
  link?: string;
  github?: string;
  slug?: string;
  retiredSlugs?: string[];
  features?: string[];
  // Optional extended case study fields (all optional, render only if present)
  gallery?: GalleryImage[];
  caseStudy?: CaseStudy;
  changelog?: ChangelogEntry[];
  milestones?: Milestone[];
  team?: TeamMember[];
  architecture?: ArchitectureSection;
  video?: VideoWalkthrough;
  codeSnippets?: CodeSnippet[];
};

// Extended optional content types
export type GalleryImage = {
  src: string;
  alt?: string;
  caption?: string;
};

export type CaseStudy = {
  problem?: string[];
  solution?: string[];
  architecture?: string[];
  results?: string[];
};

export type ChangelogEntry = {
  date: string; // ISO or readable date
  title: string;
  description?: string;
  version?: string;
};

export type Milestone = {
  date: string;
  title: string;
  description?: string;
  status?: 'planned' | 'in-progress' | 'done';
};

export type TeamMember = {
  name: string;
  role?: string;
  avatar?: string;
  link?: string; // personal site, LinkedIn, etc. (used for name)
  roleLink?: string; // GitHub or any link (used for role)
};

export type ArchitectureSection = {
  summary?: string;
  images?: GalleryImage[]; // diagrams/screens with captions
  notes?: string[];
};

export type VideoWalkthrough = {
  url: string; // YouTube, Loom, Vimeo
  title?: string;
  provider?: 'youtube' | 'vimeo' | 'loom' | 'file' | 'other';
};

export type CodeSnippet = {
  title?: string;
  language?: string; // e.g., ts, js, bash, sql
  code?: string | string[];
  markdown?: string;
};

export type Skill = {
  name: string;
  icon: string;
  power: number;
  category?: 'frontend' | 'backend' | 'databases' | 'tools' | 'hosting';
};

export type SkillCategory = {
  frontend: Skill[];
  backend: Skill[];
  databases: Skill[];
  tools: Skill[];
  hosting: Skill[];
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  credentialId?: string;
  skills?: string[];
  highlight?: string;
};

export type Job = {
  title: string;
  company: string;
  duration: string;
  location: string;
  achievements: string[];
  techStack: string[];
};

export type Education = {
  institution: string;
  degree: string;
  field: string;
  years: string;
};

export type Publication = {
  category: string;
  id: string;
  title: string;
  description: string;
  date: string;
  publisher: string;
  link: string;
  image?: string;
  tags?: string[];
};

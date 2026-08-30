export interface Experience {
  title: string;
  about: string;
  company: string;
  location: string;
  period: string;
  products?: string[];
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  codewars: string;
  frontendmentor: string;
}

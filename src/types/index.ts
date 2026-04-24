export interface Project {
  id: number;
  num: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  url?: string;
  repo?: string;
}

export interface Skill {
  name: string;
  level: number; // 0–100
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export interface NavLink {
  label: string;
  href: string;
}

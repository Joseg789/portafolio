import type { Project, SkillCategory, SocialLink, NavLink } from "../types";

// ── Navigation ────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Joseg789", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jose-sanchez-8a11b0314/",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:joseg191.js@gmail.com", icon: "mail" },
];

export const HERO_DATA = {
  tag: "Portafolio 2026",
  nameMain: "Soy",
  nameAccent: "Jose Sanchez",
  role: "Desarrollador web FullStack",
  ctaPrimary: { label: "Ver proyectos", href: "#projects" },
  ctaSecondary: { label: "Contactar", href: "#contact" },
};

export const ABOUT_DATA = {
  bio: "Me encanta  poder construir interfaces modernas y experiencias de usuario que dejan huella. Me especializo en React, TypeScript y Backend con Node, express, y me encuentro estudiando NextJs y NestJs",
  stats: [
    { value: "4+", label: "Proyectos" },
    { value: "5+", label: "Años programando." },
    { value: "8", label: "Tecnologías" },
    { value: "100%", label: "Dedicación" },
  ],
};

// Skills
export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90, featured: true },
      { name: "TypeScript", level: 70, featured: true },
      { name: "CSS / Tailwind", level: 70 },
      { name: "NextJs", level: 10 },
      { name: "Figma", level: 15 },
    ],
  },
  {
    category: "Backend & tools",
    items: [
      { name: "Node.js", level: 70 },
      { name: "Git", level: 80 },
      { name: "Three.js", level: 20 },
      { name: "NestJs", level: 20 },
      { name: "Django", level: 20 },
    ],
  },
];

//  Projects
export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    num: "01",
    title: "Proyecto 1",
    description:
      "App web con animaciones de partículas y UI interactiva. Arquitectura React + TypeScript.",
    tags: ["React", "TypeScript", "Vite"],
    featured: true,
    url: "#",
    repo: "#",
  },
  {
    id: 2,
    num: "02",
    title: "Proyecto 2",
    description:
      "Dashboard de datos en tiempo real con gráficas y filtros avanzados.",
    tags: ["Node.js", "D3", "API"],
    featured: false,
    url: "#",
    repo: "#",
  },
  {
    id: 3,
    num: "03",
    title: "Proyecto 3",
    description:
      "Landing page con efectos scroll-triggered y diseño editorial.",
    tags: ["GSAP", "CSS", "HTML"],
    featured: false,
    url: "#",
    repo: "#",
  },
  {
    id: 4,
    num: "04",
    title: "Proyecto 4",
    description: "Ecommerce completo con Dashboard ",
    tags: ["Express", "Node", "React"],
    featured: false,
    url: "#",
    repo: "#",
  },
];

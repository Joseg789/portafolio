import { useState } from "react";
import { NAV_LINKS, SOCIAL_LINKS } from "../../data/portfolioData";
import { useActiveSection } from "../../hooks/useActiveSection";
import GitHubIcon from "../icons/GitHubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";
import "./Navbar.css";

const ICON_MAP = {
  github: GitHubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
} as const;

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* ── Logo ── */}
      <a href="#hero" className="navbar__logo" aria-label="Ir al inicio">
        Jose <span className="navbar__logo-accent">Sanchez</span>
      </a>

      {/* ── Desktop nav links ── */}
      <nav className="navbar__links" aria-label="Navegación principal">
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.replace("#", "");
          return (
            <a
              key={href}
              href={href}
              className={`navbar__link ${activeSection === id ? "navbar__link--active" : ""}`}
            >
              {label}
            </a>
          );
        })}
      </nav>

      {/* ── Social icons ── */}
      <div className="navbar__socials" aria-label="Redes sociales">
        {SOCIAL_LINKS.map(({ label, href, icon }) => {
          const Icon = ICON_MAP[icon];
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__social-link"
              aria-label={label}
            >
              <Icon />
            </a>
          );
        })}
      </div>

      {/* ── Mobile hamburger ── */}
      <button
        className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="navbar__drawer" role="dialog" aria-label="Menú móvil">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="navbar__drawer-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

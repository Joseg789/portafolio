import { HERO_DATA } from "../../data/portfolioData";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Presentación">
      {/* ── Tag line ── */}
      <p className="hero__tag">{HERO_DATA.tag}</p>

      {/* ── Heading ── */}
      <h1 className="hero__heading">
        <span className="hero__heading-main">{HERO_DATA.nameMain}</span>
        <br />
        <span className="hero__heading-accent">
          {HERO_DATA.nameAccent}
          <span className="hero__cursor" aria-hidden="true">
            _
          </span>
        </span>
      </h1>

      {/* ── Role subtitle ── */}
      <p className="hero__role">{HERO_DATA.role}</p>

      {/* ── CTA buttons ── */}
      <div className="hero__ctas">
        <a
          href={HERO_DATA.ctaPrimary.href}
          className="hero__btn hero__btn--primary"
        >
          {HERO_DATA.ctaPrimary.label}
        </a>
        <a
          href={HERO_DATA.ctaSecondary.href}
          className="hero__btn hero__btn--outline"
        >
          {HERO_DATA.ctaSecondary.label}
        </a>
      </div>

      {/* ── Scroll hint ── */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll para explorar</span>
      </div>
    </section>
  );
}

import { ABOUT_DATA } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import "./About.css";

export default function About() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`about section ${inView ? "about--visible" : ""}`}
      aria-label="Sobre mí"
    >
      <div className="about__inner">
        {/* ── Text column ── */}
        <div className="about__text-col">
          <p className="section__label">// Sobre mí</p>
          <p className="about__bio">{ABOUT_DATA.bio}</p>
        </div>

        {/* ── Stats grid ── */}
        <div className="about__stats" aria-label="Estadísticas">
          {ABOUT_DATA.stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="about__stat"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <span className="about__stat-value">{value}</span>
              <span className="about__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

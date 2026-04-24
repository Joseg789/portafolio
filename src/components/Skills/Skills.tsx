import { SKILLS_DATA } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import type { Skill } from "../../types";
import "./Skills.css";

//Sub-component
interface SkillRowProps {
  skill: Skill;
  animate: boolean;
  delay: number;
}

function SkillRow({ skill, animate, delay }: SkillRowProps) {
  return (
    <div
      className={`skill-row ${skill.featured ? "skill-row--featured" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="skill-row__header">
        <span className="skill-row__name">{skill.name}</span>
        <span className="skill-row__level">{skill.level}%</span>
      </div>
      <div
        className="skill-row__track"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="skill-row__fill"
          style={{ width: animate ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

// Main component
export default function Skills() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className={`skills section ${inView ? "skills--visible" : ""}`}
      aria-label="Skills y tecnologías"
    >
      <p className="section__label">// Skills</p>

      <div className="skills__grid">
        {SKILLS_DATA.map(({ category, items }) => (
          <div key={category} className="skills__category">
            <h3 className="skills__category-title">{category}</h3>

            <div className="skills__list">
              {items.map((skill, i) => (
                <SkillRow
                  key={skill.name}
                  skill={skill}
                  animate={inView}
                  delay={0.1 + i * 0.08}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

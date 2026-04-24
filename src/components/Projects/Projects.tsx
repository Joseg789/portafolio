import { PROJECTS_DATA } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import type { Project } from "../../types";
import "./Projects.css";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
      aria-label={`Proyecto: ${project.title}`}
    >
      {/* Number + optional featured badge */}
      <div className="project-card__meta">
        <span className="project-card__num">{project.num}</span>
        {project.featured && (
          <span className="project-card__badge">Destacado</span>
        )}
      </div>

      {/* Title & description */}
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      {/* Tags */}
      <ul className="project-card__tags" aria-label="Tecnologías usadas">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className={`project-card__tag ${project.featured ? "project-card__tag--accent" : ""}`}
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* Links */}
      <div className="project-card__links">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
            aria-label={`Ver demo de ${project.title}`}
          >
            Demo →
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link project-card__link--muted"
            aria-label={`Ver repositorio de ${project.title}`}
          >
            Repo →
          </a>
        )}
      </div>
    </article>
  );
}

// component
export default function Projects() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className={`projects section ${inView ? "projects--visible" : ""}`}
      aria-label="Proyectos"
    >
      <p className="section__label">// Proyectos</p>

      <div className="projects__grid">
        {PROJECTS_DATA.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

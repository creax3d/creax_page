import type { CSSProperties } from "react";
import type { Project } from "../data/site";

export function ProjectArt({ project }: { project: Project }) {
  const style = {
    background: project.bg,
    "--project-accent": project.accent,
    "--project-glow": project.glow,
  } as CSSProperties;

  const host = project.url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

  return (
    <div className="project-art" style={style}>
      <span className="project-cat">{project.category}</span>
      {project.adminImages && <span className="project-live">Sistema + panel</span>}

      <div className="project-browser">
        <div className="project-browser-bar">
          <i />
          <i />
          <i />
          <span>{host}</span>
        </div>
        <img
          className="project-shot"
          src={project.images.desktop}
          alt={`Vista de escritorio de ${project.name}`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="project-phone" aria-hidden="true">
        <img src={project.images.mobile} alt="" loading="lazy" decoding="async" />
      </div>
    </div>
  );
}

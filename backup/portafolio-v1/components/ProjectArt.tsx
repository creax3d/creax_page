import type { CSSProperties } from "react";
import type { Project } from "../data/site";

export function ProjectArt({ project }: { project: Project }) {
  const style = {
    background: project.bg,
    "--project-accent": project.accent,
    "--project-glow": project.glow,
  } as CSSProperties;

  return (
    <div className="project-art" style={style}>
      <span className="absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/60 backdrop-blur">
        {project.category}
      </span>

      {project.art === "dashboard" && (
        <div className="mock mock-window">
          <div className="mock-bar">
            <i />
            <i />
            <i />
          </div>
          <div className="mock-body">
            <div className="mock-side">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="mock-main">
              <div className="mock-row">
                <div className="mock-tile" />
                <div className="mock-tile" />
                <div className="mock-tile" />
              </div>
              <div className="mock-chart">
                <i style={{ height: "35%" }} />
                <i style={{ height: "60%" }} />
                <i style={{ height: "45%" }} />
                <i style={{ height: "85%" }} />
                <i style={{ height: "55%" }} />
                <i style={{ height: "70%" }} />
                <i style={{ height: "95%" }} />
              </div>
              <div className="mock-row">
                <div className="mock-tile" style={{ minHeight: 22 }} />
                <div className="mock-tile" style={{ minHeight: 22 }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {project.art === "shop" && (
        <div className="mock mock-shop">
          {[0, 1, 2, 3].map((i) => (
            <div className="prod" key={i}>
              <div className="ph" style={{ opacity: 0.75 - i * 0.1 }} />
              <i />
              <i className="short" />
            </div>
          ))}
        </div>
      )}

      {project.art === "phone" && (
        <div className="mock mock-phone">
          <div className="ph-hero" />
          <i />
          <i />
          <i className="short" />
          <div className="ph-btn" />
        </div>
      )}
    </div>
  );
}

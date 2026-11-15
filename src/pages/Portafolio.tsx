import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ContactCTA } from "../components/ContactCTA";
import { Icon } from "../components/Icon";
import { ProjectArt } from "../components/ProjectArt";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/UI";
import { projects, type Project } from "../data/site";

const filters: ("Todos" | Project["category"])[] = ["Todos", "Sistemas", "Tiendas", "Landings"];

const categoryLabel: Record<Project["category"], string> = {
  Sistemas: "Sistema a la medida",
  Tiendas: "Tienda online",
  Landings: "Landing page",
};

export function Portafolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const [active, setActive] = useState<Project | null>(null);
  const visible = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        title={
          <>
            Trabajo real, <em>funcionando hoy.</em>
          </>
        }
        copy="Sitios, tiendas y sistemas que ya están en línea y resolviendo problemas de negocios reales. Entra a cada proyecto, míralo desde tu celular y conoce cómo está construido por dentro."
      >
        <div className="flex flex-wrap gap-2">
          <span className="tag" style={{ borderColor: "rgba(86,254,254,0.35)", color: "#56fefe" }}>
            <span className="pulse" />
            Proyectos entregados
          </span>
          <span className="tag">{projects.length} casos reales</span>
          <span className="tag">Diseño responsive</span>
        </div>
      </PageHero>

      <section className="pb-8">
        <div className="shell">
          <div className="flex flex-wrap items-center gap-2 border-y border-white/[0.07] py-5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-xs transition ${
                  filter === f
                    ? "border-[#56fefe] bg-[#56fefe] font-semibold text-black shadow-[0_0_24px_rgba(86,254,254,0.35)]"
                    : "border-white/10 text-white/55 hover:border-white/25 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto text-xs text-white/30">
              {visible.length} {visible.length === 1 ? "proyecto" : "proyectos"}
            </span>
          </div>
        </div>
      </section>

      <section className="section !pt-8">
        <div className="shell">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, i) => (
              <Reveal key={project.slug} delay={i * 60}>
                <article className="card card-lift project-card h-full">
                  <button
                    type="button"
                    className="project-art-button"
                    onClick={() => setActive(project)}
                    aria-label={`Ver el caso de ${project.name}`}
                  >
                    <ProjectArt project={project} />
                  </button>

                  <div className="project-meta project-meta-stack">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="mono text-white/25">{project.year}</span>
                        <span className="project-type">{project.type}</span>
                      </div>
                      <h3>{project.name}</h3>
                      <p className="project-summary">{project.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((t) => (
                          <span className="tag !py-0.5 !text-[10px]" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-actions">
                      <a
                        className="btn btn-sm action-btn"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ver sitio
                        <Icon name="arrowUpRight" size={15} />
                      </a>
                      <button
                        type="button"
                        className="btn btn-sm btn-ghost"
                        onClick={() => setActive(project)}
                      >
                        Ver caso
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="card mt-16 grid items-center gap-8 p-8 md:grid-cols-[1fr_auto] md:p-10">
              <div>
                <span className="eyebrow">Tu proyecto aquí</span>
                <h2 className="h2 mt-4 max-w-[22ch] text-[clamp(1.6rem,3vw,2.4rem)]">
                  El próximo caso de estudio podría ser <em>el tuyo.</em>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50">
                  Construimos sistemas, tiendas y sitios pensados para cómo funciona tu negocio de
                  verdad. Si tienes una idea o un proceso que quieres ordenar, hablemos.
                </p>
              </div>
              <Link to="/contacto" className="btn btn-solid">
                Empezar un proyecto
                <Icon name="arrowUpRight" size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}

      <ContactCTA />
    </>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return createPortal(
    <div className="project-modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Caso de estudio: ${project.name}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="project-modal-close" onClick={onClose} aria-label="Cerrar">
          <Icon name="close" size={18} />
        </button>

        <div className="project-modal-head">
          <div className="flex flex-wrap items-center gap-2">
            <span className="tag project-cat-tag" style={{ borderColor: `${project.accent}66`, color: project.accent }}>
              {categoryLabel[project.category]}
            </span>
            <span className="mono text-white/30">{project.year}</span>
            <span className="mono text-white/30">· {project.client}</span>
          </div>
          <h2 className="h2 mt-4 text-[clamp(1.8rem,4vw,3rem)]">{project.name}</h2>
          <p className="mt-3 text-sm text-white/45">{project.type}</p>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base">
            {project.description}
          </p>

          <ul className="project-features">
            {project.features.map((f) => (
              <li key={f}>
                <Icon name="check" size={14} />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <a className="btn btn-sm action-btn" href={project.url} target="_blank" rel="noreferrer">
              Visitar sitio
              <Icon name="arrowUpRight" size={15} />
            </a>
            <div className="ml-auto flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span className="tag !py-0.5 !text-[10px]" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-modal-body">
          <div className="project-modal-label">
            <span className="eyebrow">El sitio</span>
            <span className="mono text-white/25">Desktop · Tablet · Mobile</span>
          </div>

          <figure className="shot-desktop">
            <div className="shot-browser-bar">
              <i />
              <i />
              <i />
            </div>
            <img src={project.images.desktop} alt={`${project.name} en escritorio`} loading="lazy" />
          </figure>

          <div className="project-shot-pair">
            <figure className="shot-tablet">
              <img src={project.images.tablet} alt={`${project.name} en tablet`} loading="lazy" />
            </figure>
            <figure className="shot-mobile">
              <img src={project.images.mobile} alt={`${project.name} en móvil`} loading="lazy" />
            </figure>
          </div>

          {project.adminImages && (
            <>
              <div className="project-modal-label mt-4">
                <span className="eyebrow">Por dentro</span>
                <span className="mono text-white/25">Panel privado · Desktop · Mobile</span>
              </div>
              <p className="-mt-1 max-w-3xl text-sm leading-relaxed text-white/60">
                {project.panelDescription ??
                  "No solo es la web: el negocio gestiona pedidos, citas o pagos desde un panel propio, protegido con acceso privado."}
              </p>

              {project.panelFeatures && (
                <ul className="project-features panel-features">
                  {project.panelFeatures.map((f) => (
                    <li key={f}>
                      <Icon name="check" size={14} />
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              {project.adminGallery && (
                <div className="panel-gallery">
                  {project.adminGallery.map((item) => (
                    <figure key={item.image}>
                      <img src={item.image} alt={`${project.name}: ${item.label}`} loading="lazy" />
                      <figcaption>{item.label}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              <p className="mono mt-2 text-white/25">Vista general del panel</p>

              <figure className="shot-desktop">
                <div className="shot-browser-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <img
                  src={project.adminImages.desktop}
                  alt={`Panel de ${project.name} en escritorio`}
                  loading="lazy"
                />
              </figure>

              <div className="project-shot-pair">
                <figure className="shot-tablet">
                  <img
                    src={project.adminImages.tablet}
                    alt={`Panel de ${project.name} en tablet`}
                    loading="lazy"
                  />
                </figure>
                <figure className="shot-mobile">
                  <img
                    src={project.adminImages.mobile}
                    alt={`Panel de ${project.name} en móvil`}
                    loading="lazy"
                  />
                </figure>
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

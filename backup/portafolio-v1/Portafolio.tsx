import { useState } from "react";
import { Link } from "react-router-dom";
import { ContactCTA } from "../components/ContactCTA";
import { Icon } from "../components/Icon";
import { ProjectArt } from "../components/ProjectArt";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/UI";
import { projects, type Project } from "../data/site";

const filters: ("Todos" | Project["category"])[] = ["Todos", "Web", "Software", "Apps", "Diseño"];

export function Portafolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const visible = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        title={
          <>
            Trabajo que <em>habla por sí solo.</em>
          </>
        }
        copy="Estamos documentando los primeros casos de estudio de clientes. Mientras tanto, aquí está una muestra de cómo pensamos el producto, la interfaz y el detalle."
      >
        <div className="flex flex-wrap gap-2">
          <span className="tag" style={{ borderColor: "rgba(86,254,254,0.35)", color: "#56fefe" }}>
            <span className="pulse" />
            Casos reales en preparación
          </span>
          <span className="tag">Conceptos propios</span>
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
                  <ProjectArt project={project} />
                  <div className="project-meta">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="mono text-white/25">{project.year}</span>
                      </div>
                      <h3>{project.name}</h3>
                      <p>{project.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((t) => (
                          <span className="tag !py-0.5 !text-[10px]" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 text-center text-xs text-white/30">
              Todos los proyectos mostrados son conceptos internos de Creax3D para demostrar nuestro
              criterio de diseño. No representan trabajos entregados a clientes.
            </p>
          </Reveal>

          <Reveal>
            <div className="card mt-16 grid items-center gap-8 p-8 md:grid-cols-[1fr_auto] md:p-10">
              <div>
                <span className="eyebrow">Tu proyecto aquí</span>
                <h2 className="h2 mt-4 max-w-[22ch] text-[clamp(1.6rem,3vw,2.4rem)]">
                  El próximo caso de estudio podría ser <em>el tuyo.</em>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50">
                  Buscamos proyectos donde podamos aportar de verdad: marcas que quieren verse bien y
                  funcionar mejor. Si eso eres tú, hablemos.
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

      <ContactCTA />
    </>
  );
}

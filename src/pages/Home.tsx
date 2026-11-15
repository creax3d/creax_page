import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import type { Accent } from "../data/accents";
import { ContactCTA } from "../components/ContactCTA";
import { HeroScene } from "../components/HeroScene";
import { Icon } from "../components/Icon";
import { ProjectArt } from "../components/ProjectArt";
import { Reveal } from "../components/Reveal";
import { Marquee, SectionHead } from "../components/UI";
import { process, projects, services, site } from "../data/site";

function Hero() {
  const spotRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = spotRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="hero" onMouseMove={onMove}>
      <div className="spotlight" ref={spotRef} />
      <div className="grid-lines" />
      <div className="glow-orb left-[-12%] top-[12%] h-[520px] w-[520px] opacity-60" />
      <div className="glow-orb bottom-[-25%] right-[-8%] h-[560px] w-[560px] opacity-40" />

      <div className="shell relative z-10">
        <div className="hero-grid">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(86,254,254,0.28)] bg-[rgba(86,254,254,0.05)] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#56fefe]">
                <span className="pulse" />
                {site.availability}
              </span>
            </Reveal>

            <h1 className="mt-7">
              <Reveal delay={60}>
                <span className="block">Ideas que se ven.</span>
              </Reveal>
              <Reveal delay={140}>
                <span className="block">
                  <em className="neon">Y que funcionan.</em>
                </span>
              </Reveal>
            </h1>

            <Reveal delay={220}>
              <p className="lead mt-7 max-w-xl">
                Diseñamos y desarrollamos páginas web, software a la medida, apps y tiendas online que
                resuelven problemas reales. Convertimos marcas e ideas en experiencias digitales que la
                gente recuerda.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contacto" className="btn btn-solid">
                  Cuéntanos tu proyecto
                  <Icon name="arrowUpRight" size={17} />
                </Link>
                <Link to="/portafolio" className="btn btn-ghost">
                  Ver portafolio
                </Link>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="hero-stats">
                <div className="hero-stat">
                  <strong>Diseño + código</strong>
                  <span>Un solo equipo</span>
                </div>
                <div className="hero-stat">
                  <strong>100% a medida</strong>
                  <span>Sin plantillas</span>
                </div>
                <div className="hero-stat">
                  <strong>Remoto</strong>
                  <span>Desde Venezuela</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <HeroScene />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      className="section theme-green services-band"
      id="servicios"
      data-accent="green"
    >
      <div className="shell">
        <Reveal>
          <SectionHead
            eyebrow="Servicios"
            title={
              <>
                Todo lo que tu marca necesita, <em>en un solo lugar.</em>
              </>
            }
            copy="Diseño y desarrollo en el mismo equipo. Sin intermediarios, sin traducciones perdidas entre agencias y programadores."
            action={
              <Link to="/servicios" className="btn btn-ghost btn-sm">
                Ver todos los servicios
                <Icon name="arrowRight" size={15} />
              </Link>
            }
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60}>
              <Link to={`/servicios#${service.id}`} className="card card-lift service-card block h-full">
                <span className="service-num">0{i + 1}</span>
                <div className="service-icon">
                  <Icon name={service.icon} size={21} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <div className="service-tags">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section relative overflow-hidden" id="nosotros">
      <div className="glow-orb left-[55%] top-[10%] h-[420px] w-[420px] opacity-40" />
      <div className="shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <span className="eyebrow">Nosotros</span>
          <h2 className="h2 mt-5 max-w-[16ch]">
            Una pareja. Dos disciplinas. <em>Cero traspasos.</em>
          </h2>
          <div className="mt-7 max-w-xl space-y-4 text-[15px] leading-relaxed text-white/55">
            <p>
              Creamos Creax3D para hacer las cosas de otra forma: sentarnos en la misma mesa, entender el
              problema y resolverlo entre diseño y código. Tú hablas con las mismas dos personas que
              construyen tu proyecto.
            </p>
            <p>
              Nos gusta el detalle, los sitios que cargan rápido y las interfaces que se entienden sin
              manual. Y sobre todo, trabajar en cosas que valga la pena mostrar.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <div className="founder">
              <span className="avatar">Y</span>
              <div>
                <p className="text-sm font-semibold">Yohanderson Marquez</p>
                <p className="text-xs text-white/45">Desarrollo & arquitectura</p>
              </div>
            </div>
            <div className="founder">
              <span className="avatar">M</span>
              <div>
                <p className="text-sm font-semibold">María José Rojas</p>
                <p className="text-xs text-white/45">Diseño & producto</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="about-glass relative overflow-hidden rounded-[22px] p-5 sm:p-6 lg:ml-auto lg:max-w-[490px]">
            <img
              src="/brand/oso-servicios.webp"
              alt="Mascota de Creax3D programando en su laptop"
              className="relative z-10 mx-auto w-full max-w-[460px]"
              loading="lazy"
            />
            <div className="relative z-10 mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
              <p className="mono text-white/40">Del primer pixel al deploy</p>
              <span className="tag" style={{ borderColor: "rgba(86,254,254,0.3)", color: "#56fefe" }}>
                <Icon name="star" size={11} filled />
                Manos propias
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section relative border-y border-white/[0.06] bg-white/[0.012]">
      <div className="shell">
        <Reveal>
          <SectionHead
            eyebrow="Cómo trabajamos"
            title={
              <>
                Un proceso claro, <em>sin sorpresas.</em>
              </>
            }
            copy="Sabes qué está pasando en cada etapa. Sin cajas negras ni entregas que aparecen por sorpresa al final."
          />
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="step">
                <span className="step-num">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioPreview() {
  return (
    <section className="section" id="portafolio">
      <div className="shell">
        <Reveal>
          <SectionHead
            eyebrow="Portafolio"
            title={
              <>
                Lo que ya estamos <em>construyendo.</em>
              </>
            }
            copy="Sistemas, tiendas y landings de clientes reales que ya están en línea. Entra a cada caso y míralo funcionando."
            action={
              <Link to="/portafolio" className="btn btn-ghost btn-sm">
                Explorar portafolio
                <Icon name="arrowRight" size={15} />
              </Link>
            }
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <Reveal key={project.slug} delay={i * 70}>
              <Link to="/portafolio" className="card card-lift project-card block h-full">
                <ProjectArt project={project} />
                <div className="project-meta">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.type}</p>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-white/55">
                    <Icon name="arrowUpRight" size={15} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 text-center text-xs text-white/35">
            Proyectos entregados a clientes reales. Puedes abrir cada sitio y probarlo tú mismo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function StoreTeaser() {
  return (
    <section className="store-band theme-fuchsia section" data-accent="fuchsia">
      <div className="grid-lines opacity-40" />
      <div className="glow-orb right-[6%] top-[12%] h-[420px] w-[420px] opacity-50" />
      <div className="shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.65)" }}>
            Creax Store · Próximamente
          </span>
          <h2 className="h2 mt-5 max-w-[17ch]">
            Herramientas que ya resolvimos. <em>Ahora para ti.</em>
          </h2>
          <p className="lead mt-6 max-w-xl">
            Estamos preparando una tienda de producto digital: software, plantillas web, assets 3D y
            recursos que usamos en nuestros propios proyectos. Listos para descargar y adaptar a tu marca.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["Plantillas web", "Software", "Assets 3D", "Presets", "Kits de marca"].map((item) => (
              <span
                className="tag"
                key={item}
                style={{ borderColor: "rgba(255,0,254,0.22)", color: "rgba(255,255,255,0.72)" }}
              >
                <span
                  className="inline-block h-1 w-1 rounded-full"
                  style={{ background: "#ff00fe", boxShadow: "0 0 7px #ff00fe" }}
                />
                {item}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/tienda" className="btn btn-solid">
              Entrar a la tienda
              <Icon name="arrowUpRight" size={17} />
            </Link>
            <a href="#contacto" className="btn btn-ghost">
              Quiero que me avisen
            </a>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#ff00fe] opacity-20 blur-[100px]" />
            <img
              src="/brand/oso-paquetes.webp"
              alt="Mascota de Creax3D saliendo de una caja"
              className="relative mx-auto w-full max-w-[400px]"
              loading="lazy"
            />
            <div className="relative mx-auto -mt-4 w-fit rounded-full border border-[rgba(255,0,254,0.35)] bg-black/40 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#ff8afe] backdrop-blur">
              Muy pronto
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Home({ onAccentChange }: { onAccentChange: (accent: Accent | null) => void }) {
  useEffect(() => {
    const services = document.getElementById("servicios");
    const store = document.querySelector(".store-band");
    if (!services || !store) return;

    const visible = new Map<Element, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target, entry.isIntersecting));

        if (visible.get(store)) onAccentChange("fuchsia");
        else if (visible.get(services)) onAccentChange("green");
        else onAccentChange(null);
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );

    observer.observe(services);
    observer.observe(store);

    return () => {
      observer.disconnect();
      onAccentChange(null);
    };
  }, [onAccentChange]);

  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Páginas web",
          "Software a la medida",
          "Apps móviles",
          "Tiendas online",
          "Diseño UI/UX",
          "Branding",
          "Diseño 2D/3D",
        ]}
      />
      <ServicesSection />
      <About />
      <Process />
      <PortfolioPreview />
      <StoreTeaser />
      <ContactCTA />
    </>
  );
}

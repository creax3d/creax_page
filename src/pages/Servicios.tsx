import { Link } from "react-router-dom";
import { ContactCTA } from "../components/ContactCTA";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { Marquee, PageHero } from "../components/UI";
import { process, services, whatsappLink } from "../data/site";

const art: Record<string, string> = {
  web: "/brand/oso-servicios.webp",
  software: "/brand/oso-metodos.webp",
  apps: "/brand/oso-atencion.webp",
  ecommerce: "/brand/oso-paquetes.webp",
  brand: "/brand/oso-clientes.webp",
  "3d": "/brand/isotipo.webp",
};

export function Servicios() {
  return (
    <div className="theme-green">
      <PageHero
        eyebrow="Servicios"
        title={
          <>
            Diseño y código, <em>en la misma mesa.</em>
          </>
        }
        copy="No vendemos paquetes cerrados. Entendemos tu necesidad y armamos el equipo, el alcance y la tecnología que el proyecto pide de verdad."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contacto" className="btn btn-solid">
            Cuéntanos tu proyecto
            <Icon name="arrowUpRight" size={17} />
          </Link>
          <a href="#servicios-lista" className="btn btn-ghost">
            Ver servicios
          </a>
        </div>
      </PageHero>

      <div className="shell pb-6">
        <div className="flex flex-wrap gap-2">
          {services.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className="tag quick-tag">
              <span style={{ color: "var(--accent)" }}>0{i + 1}</span>
              {s.title}
            </a>
          ))}
        </div>
      </div>

      <div id="servicios-lista">
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-28 border-t border-white/[0.07] py-16 md:py-24"
          >
            <div className="shell grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="mono text-white/30">0{i + 1}</span>
                  <span className="h-px w-10 bg-white/15" />
                  <span className="service-icon !mb-0">
                    <Icon name={service.icon} size={21} />
                  </span>
                </div>
                <h2 className="h2 mt-6 max-w-[15ch]">{service.title}</h2>
                <p className="lead mt-6 max-w-xl">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={whatsappLink(`Hola Creax3D, me interesa el servicio de ${service.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm mt-8"
                >
                  <Icon name="whatsapp" size={15} />
                  Hablemos de esto
                </a>
              </Reveal>

              <Reveal delay={100}>
                <div className="card relative overflow-hidden p-6 sm:p-8">
                  <img
                    src={art[service.id]}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="pointer-events-none absolute -right-4 -top-6 w-40 opacity-10 sm:w-48"
                  />
                  <p className="mono relative text-white/40">Qué incluye</p>
                  <ul className="relative mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                        <span
                          className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full"
                          style={{
                            background: "rgba(var(--accent-rgb), 0.1)",
                            color: "var(--accent)",
                          }}
                        >
                          <Icon name="check" size={12} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="hairline my-7" />
                  <p className="text-sm leading-relaxed text-white/45">
                    Cada proyecto se cotiza según alcance, tiempo y complejidad. Te damos un presupuesto
                    cerrado antes de empezar.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <Marquee
        items={[
          "React",
          "TypeScript",
          "Cloudflare",
          "Node.js",
          "React Native",
          "Figma",
          "Blender",
          "Tailwind",
          "PostgreSQL",
        ]}
      />

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">Método</span>
                <h2 className="h2 mt-5">
                  Cuatro etapas. <em>Cero misterios.</em>
                </h2>
              </div>
              <p className="lead max-w-sm text-[15px]">
                Un proyecto bien llevado se siente tranquilo. Este es el camino que seguimos contigo.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
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

      <ContactCTA />
    </div>
  );
}

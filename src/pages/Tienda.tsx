import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { site, whatsappLink, products } from "../data/site";

const faqs = [
  {
    q: "¿Cuándo abre la tienda?",
    a: "Estamos preparando el catálogo y la pasarela de pago. Si dejas tu correo, te avisamos primero y con acceso anticipado.",
  },
  {
    q: "¿Qué voy a poder comprar?",
    a: "Plantillas web, software propio, assets 3D, presets y kits de marca. Producto digital listo para descargar y adaptar.",
  },
  {
    q: "¿Puedo pedir algo personalizado?",
    a: "Sí. Además de la tienda, seguimos tomando proyectos a la medida. Escríbenos y lo conversamos.",
  },
];

export function Tienda() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const notify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const link = whatsappLink(
      `Hola Creax3D, quiero que me avisen cuando abra la tienda. Mi correo es: ${email.trim()}`,
    );
    window.open(link, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="theme-fuchsia">
      <header className="page-hero">
        <div className="grid-lines opacity-50" />
        <div className="glow-orb -top-24 right-0 h-[460px] w-[460px] opacity-70" />
        <div className="shell relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow">Creax Store</span>
            <h1 className="page-title mt-6">
              Producto digital <em>hecho con criterio.</em>
            </h1>
            <p className="lead mt-7 max-w-xl">
              Software, plantillas y recursos que ya usamos en nuestros proyectos. Herramientas honestas,
              bien diseñadas y listas para que las hagas tuyas.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,0,254,0.35)] bg-[rgba(255,0,254,0.07)] px-4 py-2 text-[11px] uppercase tracking-[0.16em]"
                style={{ color: "#ff8afe" }}
              >
                <span className="pulse" />
                Apertura próximamente
              </span>
              <a href="#aviso" className="btn btn-ghost btn-sm">
                Avísame cuando abra
              </a>
            </div>
          </div>
          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#ff00fe] opacity-20 blur-[100px]" />
              <img
                src="/brand/oso-paquetes.webp"
                alt="Mascota de Creax3D saliendo de una caja"
                className="relative mx-auto w-full max-w-[380px]"
              />
            </div>
          </Reveal>
        </div>
      </header>

      <section className="section !pt-8">
        <div className="shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.name} delay={i * 60}>
                <article className="card store-card card-lift flex h-full flex-col p-6">
                  <div className="flex items-start justify-between">
                    <span
                      className="grid h-12 w-12 place-items-center rounded-2xl border"
                      style={{
                        color: "#ff5cfe",
                        borderColor: "rgba(255,0,254,0.3)",
                        background: "rgba(255,0,254,0.07)",
                        boxShadow: "0 0 30px -10px rgba(255,0,254,0.6)",
                      }}
                    >
                      <Icon name={product.icon} size={22} />
                    </span>
                    <span
                      className="rounded-full border border-[rgba(255,0,254,0.25)] px-3 py-1 text-[10px] uppercase tracking-[0.14em]"
                      style={{ color: "#ff8afe" }}
                    >
                      {product.status}
                    </span>
                  </div>
                  <p className="mono mt-6 text-white/30">{product.category}</p>
                  <h3 className="mt-2 font-[var(--font-display)] text-xl font-semibold tracking-tight">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{product.description}</p>
                  <div className="mt-auto pt-6">
                    <button
                      className="flex w-full items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-xs text-white/40 transition hover:border-[rgba(255,0,254,0.4)] hover:text-white"
                      onClick={() => document.getElementById("aviso")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Quiero saber más
                      <Icon name="arrowUpRight" size={14} />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.012] py-14">
        <div className="shell grid gap-8 sm:grid-cols-3">
          {[
            {
              icon: "asset" as const,
              title: "Descarga inmediata",
              text: "Compras, descargas y empiezas el mismo día. Sin esperas ni reuniones.",
            },
            {
              icon: "check" as const,
              title: "Licencia clara",
              text: "Sabes exactamente qué puedes hacer con cada recurso. Sin letra pequeña.",
            },
            {
              icon: "whatsapp" as const,
              title: "Soporte real",
              text: "Si algo no funciona o no sabes usarlo, te responde una persona del estudio.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="flex gap-4">
                <span
                  className="grid h-11 w-11 flex-none place-items-center rounded-xl border"
                  style={{ color: "#ff5cfe", borderColor: "rgba(255,0,254,0.28)" }}
                >
                  <Icon name={item.icon} size={19} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/45">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="aviso">
        <div className="shell grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <span className="eyebrow">Lista de espera</span>
            <h2 className="h2 mt-5 max-w-[16ch]">
              Sé de los primeros <em>en entrar.</em>
            </h2>
            <p className="lead mt-6 max-w-lg">
              Déjanos tu correo y te avisamos cuando la tienda abra, con acceso anticipado y precios de
              lanzamiento.
            </p>

            {sent ? (
              <div
                className="mt-8 rounded-2xl border p-6"
                style={{ borderColor: "rgba(255,0,254,0.35)", background: "rgba(255,0,254,0.05)" }}
              >
                <p className="flex items-center gap-2 text-sm font-medium" style={{ color: "#ff8afe" }}>
                  <Icon name="check" size={17} />
                  ¡Casi listo!
                </p>
                <p className="mt-2 text-sm text-white/55">
                  Se abrió WhatsApp con tu correo. Envíanos el mensaje y te agregamos a la lista.
                </p>
                <button
                  className="mt-4 text-xs text-white/45 underline underline-offset-4 hover:text-white"
                  onClick={() => setSent(false)}
                >
                  Usar otro correo
                </button>
              </div>
            ) : (
              <form onSubmit={notify} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="field"
                  aria-label="Tu correo electrónico"
                />
                <button type="submit" className="btn btn-solid flex-none">
                  Avísame
                  <Icon name="arrowRight" size={16} />
                </button>
              </form>
            )}

            <p className="mt-4 flex items-center gap-2 text-xs text-white/30">
              <Icon name="clock" size={13} />
              Solo te escribimos cuando haya algo que valga la pena. Nada de spam.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition open:border-[rgba(255,0,254,0.3)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                    {faq.q}
                    <span className="grid h-6 w-6 flex-none place-items-center rounded-full border border-white/15 text-white/50 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{faq.a}</p>
                </details>
              ))}
              <div
                className="rounded-2xl border p-5"
                style={{ borderColor: "rgba(255,0,254,0.22)", background: "rgba(255,0,254,0.04)" }}
              >
                <p className="text-sm text-white/65">
                  ¿Necesitas algo hecho a la medida? La tienda es solo una parte de lo que hacemos.
                </p>
                <Link to="/contacto" className="btn btn-ghost btn-sm mt-4">
                  Hablemos de tu proyecto
                  <Icon name="arrowUpRight" size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="shell">
          <div className="hairline" />
          <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-white/30 sm:flex-row">
            <span>Creax Store · un proyecto de Creax3D</span>
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

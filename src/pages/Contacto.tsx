import { useState } from "react";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/UI";
import { services, site, whatsappLink } from "../data/site";

export function Contacto() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hola Creax3D, soy ${form.name}.`,
      form.service ? `Me interesa: ${form.service}.` : "",
      form.message ? `\n${form.message}` : "",
      form.email ? `\nMi correo: ${form.email}` : "",
      form.phone ? `Mi teléfono: ${form.phone}` : "",
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={
          <>
            Cuéntanos qué <em>tienes en mente.</em>
          </>
        }
        copy="Escríbenos por WhatsApp, correo o el formulario. Te responde una de las dos personas que va a trabajar en tu proyecto —no un bot ni un intermediario."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappLink("Hola Creax3D, quiero conversar sobre un proyecto.")}
            target="_blank"
            rel="noreferrer"
            className="btn btn-solid"
          >
            <Icon name="whatsapp" size={18} />
            WhatsApp directo
          </a>
          <a href={`mailto:${site.email}`} className="btn btn-ghost">
            <Icon name="mail" size={17} />
            {site.email}
          </a>
        </div>
      </PageHero>

      <section className="pb-20">
        <div className="shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            <Reveal>
              <div className="card relative overflow-hidden p-6">
                <div className="grid-lines opacity-30" />
                <div className="relative flex items-start gap-4">
                  <img
                    src="/brand/oso-atencion.webp"
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-16 flex-none"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-semibold">Atención de verdad</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/50">
                      Escríbenos y te contestamos en menos de 24 horas hábiles. Si es urgente, WhatsApp es
                      el camino más rápido.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="card p-6">
                <p className="mono text-white/35">Teléfonos</p>
                <div className="mt-4 space-y-3">
                  {site.phones.map((p) => (
                    <a
                      key={p.href}
                      href={`tel:${p.href}`}
                      className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.07] px-4 py-3 transition hover:border-[rgba(86,254,254,0.35)]"
                    >
                      <span className="flex items-center gap-3 text-sm text-white/70 group-hover:text-white">
                        <Icon name="phone" size={16} style={{ color: "var(--accent)" }} />
                        {p.label}
                      </span>
                      <Icon name="arrowUpRight" size={14} className="text-white/25" />
                    </a>
                  ))}
                </div>

                <p className="mono mt-6 text-white/35">Correo</p>
                <a
                  href={`mailto:${site.email}`}
                  className="group mt-3 flex items-center justify-between gap-4 rounded-xl border border-white/[0.07] px-4 py-3 transition hover:border-[rgba(86,254,254,0.35)]"
                >
                  <span className="flex items-center gap-3 text-sm text-white/70 group-hover:text-white">
                    <Icon name="mail" size={16} style={{ color: "var(--accent)" }} />
                    {site.email}
                  </span>
                  <Icon name="arrowUpRight" size={14} className="text-white/25" />
                </a>

                <p className="mono mt-6 text-white/35">Redes</p>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-3 flex items-center justify-between gap-4 rounded-xl border border-white/[0.07] px-4 py-3 transition hover:border-[rgba(86,254,254,0.35)]"
                >
                  <span className="flex items-center gap-3 text-sm text-white/70 group-hover:text-white">
                    <Icon name="instagram" size={16} style={{ color: "var(--accent)" }} />
                    @{site.instagram}
                  </span>
                  <Icon name="arrowUpRight" size={14} className="text-white/25" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card p-6">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#56fefe]">
                  <span className="pulse" />
                  {site.availability}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {site.location}. Trabajamos con clientes de cualquier parte, coordinando horarios según tu
                  zona.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="card p-6 sm:p-8">
              {sent ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-[rgba(86,254,254,0.4)] bg-[rgba(86,254,254,0.08)] text-[#56fefe]">
                    <Icon name="check" size={26} />
                  </span>
                  <h2 className="h2 mt-6 text-[clamp(1.7rem,3vw,2.2rem)]">Mensaje listo.</h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
                    Se abrió WhatsApp con tu mensaje precargado. Solo dale enviar y te respondemos.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-xs text-white/45 underline underline-offset-4 hover:text-white"
                  >
                    Volver al formulario
                  </button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <p className="mono text-white/35">Formulario de proyecto</p>
                  <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold tracking-tight">
                    Cuéntanos los detalles
                  </h2>
                  <p className="mt-2 text-sm text-white/45">
                    Al enviar, se abrirá WhatsApp con tu mensaje listo para enviar.
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="label" htmlFor="name">
                        Nombre
                      </label>
                      <input
                        id="name"
                        required
                        className="field"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={update("name")}
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="email">
                        Correo
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="field"
                        placeholder="tu@correo.com"
                        value={form.email}
                        onChange={update("email")}
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="phone">
                        Teléfono <span className="normal-case tracking-normal text-white/25">(opcional)</span>
                      </label>
                      <input
                        id="phone"
                        className="field"
                        placeholder="+58 412 000 0000"
                        value={form.phone}
                        onChange={update("phone")}
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="service">
                        ¿Qué necesitas?
                      </label>
                      <select id="service" className="field" value={form.service} onChange={update("service")}>
                        <option value="">Selecciona un servicio</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Otro / no estoy seguro">Otro / no estoy seguro</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="label" htmlFor="message">
                        Tu idea
                      </label>
                      <textarea
                        id="message"
                        required
                        className="field"
                        placeholder="Cuéntanos qué quieres construir, para quién y en qué etapa estás."
                        value={form.message}
                        onChange={update("message")}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-solid mt-6 w-full">
                    <Icon name="whatsapp" size={18} />
                    Enviar por WhatsApp
                  </button>

                  <p className="mt-4 text-center text-xs text-white/30">
                    ¿Prefieres correo?{" "}
                    <a href={`mailto:${site.email}`} className="text-white/60 underline underline-offset-4 hover:text-white">
                      Escríbenos a {site.email}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

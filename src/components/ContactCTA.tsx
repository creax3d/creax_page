import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { site, whatsappLink } from "../data/site";

export function ContactCTA() {
  return (
    <section className="section" id="contacto">
      <div className="shell">
        <Reveal>
          <div className="card relative overflow-hidden px-6 py-14 text-center sm:px-12 md:py-20">
            <div className="grid-lines opacity-60" />
            <div className="glow-orb left-1/2 top-[-30%] h-[420px] w-[520px] -translate-x-1/2 opacity-70" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="eyebrow justify-center">Siguiente paso</span>
              <h2 className="h2 mt-5">
                Tu próxima idea <em>empieza con un mensaje.</em>
              </h2>
              <p className="lead mx-auto mt-6 max-w-xl">
                Cuéntanos qué tienes en mente. Te respondemos con una propuesta clara, sin compromiso y sin
                tecnicismos innecesarios.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href={whatsappLink("Hola Creax3D, tengo una idea y quiero conversar sobre un proyecto.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-solid"
                >
                  <Icon name="whatsapp" size={18} />
                  Escribir por WhatsApp
                </a>
                <a href={`mailto:${site.email}`} className="btn btn-ghost">
                  <Icon name="mail" size={17} />
                  {site.email}
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-white/45">
                {site.phones.map((p) => (
                  <a className="flex items-center gap-2 hover:text-white" key={p.href} href={`tel:${p.href}`}>
                    <Icon name="phone" size={13} />
                    {p.label}
                  </a>
                ))}
                <a
                  className="flex items-center gap-2 hover:text-white"
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="instagram" size={13} />
                  {site.instagram}
                </a>
                <span className="flex items-center gap-2">
                  <Icon name="pin" size={13} />
                  {site.location}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

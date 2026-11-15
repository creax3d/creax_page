import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Icon } from "./Icon";
import { Logo } from "./UI";
import { site, whatsappLink } from "../data/site";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/portafolio", label: "Portafolio" },
  { to: "/tienda", label: "Tienda" },
  { to: "/contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const theme = pathname.startsWith("/servicios")
    ? "theme-green"
    : pathname.startsWith("/tienda")
      ? "theme-fuchsia"
      : "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""} ${theme}`}>
        <div className="shell nav-inner">
          <Logo />

          <div className="nav-links">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink("Hola Creax3D, quiero hablar sobre un proyecto.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid btn-sm nav-cta action-btn"
            >
              Hablemos
              <Icon name="arrowUpRight" size={15} />
            </a>
            <button
              className="burger"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              <Icon name={open ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className={`mobile-menu ${theme}`}>
          <div />
          <div className="flex flex-col justify-center">
            {links.map((l, i) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="menu-link">
                {l.label}
                <span>0{i + 1}</span>
              </Link>
            ))}
          </div>
          <div className="space-y-3 pt-8">
            <a
              href={whatsappLink("Hola Creax3D, quiero hablar sobre un proyecto.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid w-full"
            >
              <Icon name="whatsapp" size={18} />
              Escríbenos por WhatsApp
            </a>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/45">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>{site.instagram}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
          <div>
            <Logo height={30} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Estudio de programación y diseño. Construimos productos digitales con intención, del primer
              boceto al último deploy.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Creax3D"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-[rgba(86,254,254,0.5)] hover:text-[#56fefe]"
              >
                <Icon name="instagram" size={17} />
              </a>
              <a
                href={whatsappLink("Hola Creax3D, quiero hablar sobre un proyecto.")}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp de Creax3D"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-[rgba(86,254,254,0.5)] hover:text-[#56fefe]"
              >
                <Icon name="whatsapp" size={17} />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Correo de Creax3D"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-[rgba(86,254,254,0.5)] hover:text-[#56fefe]"
              >
                <Icon name="mail" size={17} />
              </a>
            </div>
          </div>

          <div>
            <p className="mono mb-4 text-white/35">Navegar</p>
            {links.map((l) => (
              <Link key={l.to} className="footer-link" to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <p className="mono mb-4 text-white/35">Servicios</p>
            <Link className="footer-link" to="/servicios#web">
              Páginas web
            </Link>
            <Link className="footer-link" to="/servicios#software">
              Software a la medida
            </Link>
            <Link className="footer-link" to="/servicios#apps">
              Apps móviles
            </Link>
            <Link className="footer-link" to="/servicios#3d">
              Diseño 3D
            </Link>
          </div>

          <div>
            <p className="mono mb-4 text-white/35">Contacto</p>
            {site.phones.map((p) => (
              <a key={p.href} className="footer-link" href={`tel:${p.href}`}>
                {p.label}
              </a>
            ))}
            <a className="footer-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className="mt-3 text-xs text-white/35">{site.location}</p>
          </div>
        </div>

        <div className="hairline" />

        <div className="flex flex-col gap-3 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Creax3D. Todos los derechos reservados.</p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>Hecho con React + Cloudflare</span>
            <span className="text-white/20">·</span>
            <span>Yohanderson & María José</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

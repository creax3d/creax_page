import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../data/site";

const pages: Record<string, { description: string }> = {
  "/": {
    description:
      "Diseñamos y desarrollamos páginas web, software a la medida, apps y tiendas online que resuelven problemas reales y hacen crecer tu negocio.",
  },
  "/servicios": {
    description:
      "Páginas web, software a la medida, apps móviles, e-commerce, diseño UI/UX y 3D. Diseño y código en el mismo equipo.",
  },
  "/portafolio": {
    description:
      "Conceptos y casos de estudio de Creax3D: dashboards, tiendas online, apps móviles e identidad visual.",
  },
  "/tienda": {
    description: "Software, plantillas web, assets 3D y recursos digitales creados por Creax3D. Próximamente.",
  },
  "/contacto": {
    description:
      "Cuéntanos tu proyecto. WhatsApp, correo y formulario. Te responde una de las personas que trabajará contigo.",
  },
};

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pages[pathname] ?? {
      description: "La página que buscas no existe.",
    };
    const url = `${site.url}${pathname === "/" ? "" : pathname}`;

    document.title = "Creax3d";
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", url);
  }, [pathname]);
}

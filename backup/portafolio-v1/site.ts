export const site = {
  name: "Creax3D",
  tagline: "Programación y Diseño",
  url: "https://creax3d.pages.dev",
  email: "creaxusa@gmail.com",
  phones: [
    { label: "+58 412-662-0345", href: "+584126620345" },
    { label: "+58 412-036-3124", href: "+584120363124" },
  ],
  whatsapp: "584126620345",
  instagram: "creax3d_",
  instagramUrl: "https://www.instagram.com/creax3d_/",
  location: "Venezuela · Trabajamos en remoto",
  availability: "Disponibles para nuevos proyectos",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: "code" | "layers" | "mobile" | "cart" | "sparkles" | "cube";
  tags: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "web",
    title: "Páginas web & landings",
    short: "Sitios rápidos, memorables y hechos a la medida de tu marca.",
    description:
      "Diseñamos y programamos sitios que cargan en segundos y comunican en el primero. Desde una landing de campaña hasta el sitio corporativo completo, con animaciones cuidadas, SEO técnico y despliegue en Cloudflare.",
    icon: "code",
    tags: ["React", "Astro", "Cloudflare", "SEO"],
    deliverables: ["Diseño UI/UX", "Desarrollo responsive", "Animaciones", "SEO técnico", "Deploy y dominio"],
  },
  {
    id: "software",
    title: "Software a la medida",
    short: "Sistemas que ordenan tu operación y te ahorran horas.",
    description:
      "Construimos paneles, sistemas de gestión, automatizaciones e integraciones pensadas para cómo trabaja tu equipo de verdad. Sin plantillas rígidas ni funciones que nunca vas a usar.",
    icon: "layers",
    tags: ["Dashboards", "APIs", "Automatización", "Auth"],
    deliverables: ["Levantamiento de procesos", "Arquitectura", "Panel administrativo", "Roles y permisos", "Documentación"],
  },
  {
    id: "apps",
    title: "Aplicaciones móviles",
    short: "Tu producto en el bolsillo, con una experiencia impecable.",
    description:
      "Apps iOS y Android desde una sola base de código. Diseñamos los flujos, cuidamos cada transición y publicamos listo para las tiendas.",
    icon: "mobile",
    tags: ["React Native", "iOS", "Android", "Push"],
    deliverables: ["Flujos de producto", "Diseño de interfaz", "Desarrollo multiplataforma", "Notificaciones", "Publicación"],
  },
  {
    id: "ecommerce",
    title: "Tiendas online",
    short: "Catálogo, pagos y una compra que no da pereza terminar.",
    description:
      "Creamos e-commerce rápidos y fáciles de administrar: catálogo, carrito, pagos, envíos y un panel claro para que vender no dependa de nadie más.",
    icon: "cart",
    tags: ["E-commerce", "Pagos", "Inventario", "Checkout"],
    deliverables: ["Diseño de catálogo", "Checkout optimizado", "Pasarela de pago", "Gestión de inventario", "Capacitación"],
  },
  {
    id: "brand",
    title: "Diseño UI/UX & branding",
    short: "Una identidad coherente en cada pantalla y cada pieza.",
    description:
      "Desde el logotipo hasta el design system. Definimos la personalidad visual de tu marca y la convertimos en un sistema que tu equipo puede usar sin romperlo.",
    icon: "sparkles",
    tags: ["Identidad", "Design system", "Prototipos", "Figma"],
    deliverables: ["Investigación", "Identidad visual", "Design system", "Prototipo interactivo", "Guía de marca"],
  },
  {
    id: "3d",
    title: "Diseño 2D & 3D",
    short: "Renders, personajes y piezas que le dan cuerpo a tu idea.",
    description:
      "Modelado 3D, renders de producto, ilustración y animación. El recurso visual que hace que tu marca se vea distinta en redes, web y presentaciones.",
    icon: "cube",
    tags: ["Modelado 3D", "Renders", "Animación", "Ilustración"],
    deliverables: ["Modelado", "Texturizado", "Renders", "Animación", "Assets para redes"],
  },
];

export type Project = {
  slug: string;
  name: string;
  category: "Web" | "Software" | "Apps" | "Diseño";
  type: string;
  year: string;
  summary: string;
  tags: string[];
  art: "dashboard" | "shop" | "phone";
  accent: string;
  glow: string;
  bg: string;
};

export const projects: Project[] = [
  {
    slug: "nebula",
    name: "Nébula",
    category: "Software",
    type: "SaaS de gestión",
    year: "Concepto",
    summary: "Panel para centralizar clientes, cobros y métricas de un negocio de servicios.",
    tags: ["Dashboard", "SaaS", "Automatización"],
    art: "dashboard",
    accent: "#56fefe",
    glow: "rgba(86,254,254,0.28)",
    bg: "linear-gradient(150deg,#0d1a1c,#08090a 65%)",
  },
  {
    slug: "mercado-sur",
    name: "Mercado Sur",
    category: "Web",
    type: "Tienda online",
    year: "Concepto",
    summary: "E-commerce de productos locales con checkout corto y catálogo editorial.",
    tags: ["E-commerce", "Checkout", "Branding"],
    art: "shop",
    accent: "#ffb86b",
    glow: "rgba(255,184,107,0.3)",
    bg: "linear-gradient(150deg,#1c1409,#08090a 65%)",
  },
  {
    slug: "orbita",
    name: "Órbita",
    category: "Apps",
    type: "App de reservas",
    year: "Concepto",
    summary: "Reservas, recordatorios y pagos en una app simple para negocios de agenda.",
    tags: ["React Native", "Reservas", "UX"],
    art: "phone",
    accent: "#a8ff60",
    glow: "rgba(168,255,96,0.28)",
    bg: "linear-gradient(150deg,#121a09,#08090a 65%)",
  },
  {
    slug: "estudio",
    name: "Estudio Bruma",
    category: "Web",
    type: "Sitio de portafolio",
    year: "Concepto",
    summary: "Sitio para un estudio creativo con scroll narrativo y galería inmersiva.",
    tags: ["Landing", "Animación", "Arte"],
    art: "dashboard",
    accent: "#c9a7ff",
    glow: "rgba(201,167,255,0.28)",
    bg: "linear-gradient(150deg,#17101f,#08090a 65%)",
  },
  {
    slug: "raiz",
    name: "Raíz",
    category: "Software",
    type: "Sistema de inventario",
    year: "Concepto",
    summary: "Control de stock y ventas para comercios con varias sucursales.",
    tags: ["Inventario", "Roles", "Reportes"],
    art: "dashboard",
    accent: "#ff7aa8",
    glow: "rgba(255,122,168,0.28)",
    bg: "linear-gradient(150deg,#1f0d14,#08090a 65%)",
  },
  {
    slug: "forma",
    name: "Forma",
    category: "Diseño",
    type: "Identidad + assets 3D",
    year: "Concepto",
    summary: "Identidad visual y familia de renders para una marca de objetos de diseño.",
    tags: ["Branding", "3D", "Dirección de arte"],
    art: "shop",
    accent: "#56fefe",
    glow: "rgba(86,254,254,0.28)",
    bg: "linear-gradient(150deg,#0b1819,#08090a 65%)",
  },
];

export type Product = {
  name: string;
  category: string;
  description: string;
  status: string;
  icon: "template" | "software" | "asset" | "preset" | "course" | "kit";
  accent: string;
};

export const products: Product[] = [
  {
    name: "Plantillas web",
    category: "Templates",
    description: "Landings y sitios en React listos para personalizar con tu marca.",
    status: "Próximamente",
    icon: "template",
    accent: "#ff00fe",
  },
  {
    name: "Software propio",
    category: "Software",
    description: "Herramientas que ya construimos y puedes adaptar a tu negocio.",
    status: "Próximamente",
    icon: "software",
    accent: "#56fefe",
  },
  {
    name: "Assets 3D",
    category: "3D",
    description: "Modelos, escenas y personajes listos para renders y contenido.",
    status: "Próximamente",
    icon: "asset",
    accent: "#a8ff60",
  },
  {
    name: "Presets & texturas",
    category: "Diseño",
    description: "Materiales, luces y presets para acelerar tus proyectos visuales.",
    status: "Próximamente",
    icon: "preset",
    accent: "#ffb86b",
  },
  {
    name: "Kits de marca",
    category: "Branding",
    description: "Sistemas visuales editables para marcas que están empezando.",
    status: "Próximamente",
    icon: "kit",
    accent: "#c9a7ff",
  },
  {
    name: "Mini cursos",
    category: "Formación",
    description: "Aprende a construir y cuidar tu producto digital paso a paso.",
    status: "Próximamente",
    icon: "course",
    accent: "#ff7aa8",
  },
];

export const process = [
  {
    title: "Conversamos",
    text: "Entendemos tu negocio, tu público y qué necesita realmente el proyecto. Sin humo.",
  },
  {
    title: "Diseñamos",
    text: "Bocetos, dirección visual y prototipos. Ves y apruebas antes de escribir una línea.",
  },
  {
    title: "Construimos",
    text: "Desarrollo por etapas con entregas visibles. Tú sigues el avance en todo momento.",
  },
  {
    title: "Lanzamos",
    text: "Deploy, dominio, pruebas y capacitación. Nos quedamos cerca para lo que venga.",
  },
];

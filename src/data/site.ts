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

export type ProjectShots = {
  desktop: string;
  tablet: string;
  mobile: string;
};

export type Project = {
  slug: string;
  name: string;
  category: "Sistemas" | "Tiendas" | "Landings";
  type: string;
  year: string;
  client: string;
  summary: string;
  description: string;
  panelDescription?: string;
  panelFeatures?: string[];
  adminGallery?: { label: string; image: string }[];
  features: string[];
  tags: string[];
  images: ProjectShots;
  adminImages?: ProjectShots;
  url: string;
  accent: string;
  glow: string;
  bg: string;
};

export const projects: Project[] = [
  {
    slug: "andreas-cake",
    name: "Andrea's Cake",
    category: "Tiendas",
    type: "Tienda + sistema de pedidos",
    year: "2026",
    client: "Andrea's Cake · El Vigía, Mérida",
    summary:
      "Pastelería con catálogo, pedidos por WhatsApp y un panel privado para gestionar encargos, clientes y entregas.",
    description:
      "Sitio para Andrea's Cake, repostería, decoración y sublimación. Los clientes exploran el catálogo, arman su pedido y lo envían por WhatsApp. Desde el panel, Andrea registra encargos, controla abonos, fechas de entrega, clientes y alertas del negocio en un solo lugar.",
    panelDescription:
      "El panel «Encargo» es el centro de operaciones de la repostería. Al entrar muestra las entregas del día, pedidos activos de la semana, lo cobrado en el mes y el saldo por cobrar. Cada pedido se gestiona con estados (cotización, confirmado, en preparación, listo, entregado o cancelado), productos del catálogo, anticipos, saldo pendiente y comprobante imprimible. También incluye calendario de entregas, catálogo de 25 productos en 7 categorías, ficha de clientes con historial de compras y alertas de fechas y cobros. Es instalable como app y sigue funcionando sin internet.",
    panelFeatures: [
      "Dashboard con entregas del día y métricas del mes",
      "Pedidos con estados, anticipos, saldo y comprobante",
      "Calendario mensual de entregas y carga de trabajo",
      "Catálogo de productos, categorías, precios y stock",
      "Clientes con historial de compras y WhatsApp directo",
      "Alertas de entregas próximas, atrasos y saldos",
      "Ajustes de marca, moneda, impuestos y notificaciones",
    ],
    adminGallery: [
      { label: "Pedidos y estados", image: "/portafolio/andreas-cake/admin/pedidos.jpg" },
      { label: "Calendario de entregas", image: "/portafolio/andreas-cake/admin/calendario.jpg" },
      { label: "Catálogo y precios", image: "/portafolio/andreas-cake/admin/catalogo.jpg" },
      { label: "Clientes e historial", image: "/portafolio/andreas-cake/admin/clientes.jpg" },
      { label: "Alertas del negocio", image: "/portafolio/andreas-cake/admin/alertas.jpg" },
    ],
    features: [
      "Catálogo con categorías y galería",
      "Pedido directo por WhatsApp",
      "Panel de pedidos, clientes y entregas",
      "Calendario y control de abonos",
      "Alertas de cobros y pendientes",
    ],
    tags: ["Tienda", "Pedidos", "Panel admin", "WhatsApp"],
    images: {
      desktop: "/portafolio/andreas-cake/desktop.jpg",
      tablet: "/portafolio/andreas-cake/tablet.jpg",
      mobile: "/portafolio/andreas-cake/mobile.jpg",
    },
    adminImages: {
      desktop: "/portafolio/andreas-cake/admin/desktop.jpg",
      tablet: "/portafolio/andreas-cake/admin/tablet.jpg",
      mobile: "/portafolio/andreas-cake/admin/mobile.jpg",
    },
    url: "https://andreascake.creax3d.workers.dev/",
    accent: "#ff5f9e",
    glow: "rgba(255,95,158,0.28)",
    bg: "linear-gradient(150deg,#2a1019,#08090a 65%)",
  },
  {
    slug: "linda-quintero",
    name: "Od. Linda Quintero",
    category: "Sistemas",
    type: "Sistema de citas odontológicas",
    year: "2026",
    client: "Consultorio odontológico · Venezuela",
    summary:
      "Reservas online y panel clínico para administrar agenda, pacientes, tratamientos e ingresos.",
    description:
      "Sitio del consultorio de la Od. Linda Quintero con reserva de citas en línea. El paciente elige día y hora según la disponibilidad real; el consultorio administra la agenda, bloquea horarios, registra pacientes, tratamientos y pagos desde un panel privado.",
    panelDescription:
      "El panel del consultorio funciona como una agenda clínica completa. La agenda se ve por día, semana o mes y permite crear citas manuales, bloquear descansos o ausencias para que no aparezcan en la reserva online, y registrar pacientes con su historial. En ingresos se controla lo facturado, lo cobrado y lo pendiente, con producción diaria, tratamientos más realizados y lista de deudores. El catálogo de tratamientos incluye duración, precio y descripción (consulta, limpieza, ortodoncia, blanqueamiento, endodoncia, prótesis, entre otros) y se administra desde ajustes: horario semanal, intervalo entre citas, anticipación mínima, moneda, acceso y notificaciones push.",
    panelFeatures: [
      "Agenda por día, semana y mes con citas online y manuales",
      "Bloqueo de horarios para descansos y ausencias",
      "Fichas de pacientes con historial de visitas",
      "Ingresos: facturado, cobrado, por cobrar y deudores",
      "Catálogo de tratamientos con duración y precios",
      "Configuración de horarios y reglas de reserva",
      "Acceso privado y notificaciones de nuevas reservas",
    ],
    adminGallery: [
      { label: "Ingresos y deudores", image: "/portafolio/linda-quintero/admin/ingresos.jpg" },
      { label: "Catálogo de tratamientos", image: "/portafolio/linda-quintero/admin/tratamientos.jpg" },
      { label: "Horarios y configuración", image: "/portafolio/linda-quintero/admin/ajustes.jpg" },
    ],
    features: [
      "Reserva de citas en línea",
      "Agenda por día, semana y mes",
      "Bloqueo de horarios y descansos",
      "Ficha de pacientes y tratamientos",
      "Control de ingresos del consultorio",
    ],
    tags: ["Citas", "Salud", "Agenda", "Panel admin"],
    images: {
      desktop: "/portafolio/linda-quintero/desktop.jpg",
      tablet: "/portafolio/linda-quintero/tablet.jpg",
      mobile: "/portafolio/linda-quintero/mobile.jpg",
    },
    adminImages: {
      desktop: "/portafolio/linda-quintero/admin/desktop.jpg",
      tablet: "/portafolio/linda-quintero/admin/tablet.jpg",
      mobile: "/portafolio/linda-quintero/admin/mobile.jpg",
    },
    url: "https://odlindaquintero.creax3d.workers.dev/",
    accent: "#c8a06a",
    glow: "rgba(200,160,106,0.28)",
    bg: "linear-gradient(150deg,#231a10,#08090a 65%)",
  },
  {
    slug: "selyn-studio",
    name: "Selyn Studio",
    category: "Sistemas",
    type: "Sistema de reservas de belleza",
    year: "2026",
    client: "Selyn Studio · Manicura y pedicura",
    summary:
      "Reserva de citas online para un estudio de uñas, con servicios, horarios y gestión de clientas.",
    description:
      "Sitio y sistema de reservas para Selyn Studio. Las clientas conocen los servicios, eligen día y hora disponibles y reservan en línea. El estudio gestiona su agenda, servicios y horarios desde un panel privado, sin depender de mensajes para cada cita.",
    panelDescription:
      "El panel de Selyn Studio centraliza la operación del estudio. La agenda muestra las citas por día, semana o mes, con creación manual, bloqueo de descansos y disponibilidad sincronizada con la reserva online. La ficha de clientas guarda visitas, total pagado y deudas pendientes. En ingresos se ve lo facturado, cobrado y por cobrar, la producción por día, los servicios más solicitados y quién debe. El catálogo permite crear y editar servicios con duración, precio y descripción; los ajustes controlan horario semanal, intervalo y descanso entre citas, anticipación mínima, moneda y notificaciones push.",
    panelFeatures: [
      "Agenda por día, semana y mes con reservas online",
      "Bloqueo de horarios y descansos del estudio",
      "Clientas con historial de visitas, pagos y deudas",
      "Ingresos: facturado, cobrado, producción y deudores",
      "Catálogo de servicios con duración y precios",
      "Horarios y reglas de reserva configurables",
      "Notificaciones push de nuevas reservas",
    ],
    adminGallery: [
      { label: "Ingresos y deudores", image: "/portafolio/selyn-studio/admin/ingresos.jpg" },
      { label: "Catálogo de servicios", image: "/portafolio/selyn-studio/admin/servicios.jpg" },
      { label: "Horarios y configuración", image: "/portafolio/selyn-studio/admin/ajustes.jpg" },
    ],
    features: [
      "Reserva de citas en línea",
      "Catálogo de servicios y precios",
      "Disponibilidad y horarios reales",
      "Gestión de clientas y citas",
      "Panel administrativo del estudio",
    ],
    tags: ["Reservas", "Belleza", "Agenda", "Panel admin"],
    images: {
      desktop: "/portafolio/selyn-studio/desktop.jpg",
      tablet: "/portafolio/selyn-studio/tablet.jpg",
      mobile: "/portafolio/selyn-studio/mobile.jpg",
    },
    adminImages: {
      desktop: "/portafolio/selyn-studio/admin/desktop.jpg",
      tablet: "/portafolio/selyn-studio/admin/tablet.jpg",
      mobile: "/portafolio/selyn-studio/admin/mobile.jpg",
    },
    url: "https://selynstudio.creax3d.workers.dev/",
    accent: "#d6b8b2",
    glow: "rgba(214,184,178,0.28)",
    bg: "linear-gradient(150deg,#211817,#08090a 65%)",
  },
  {
    slug: "rifas-contreras",
    name: "Rifas Contreras",
    category: "Sistemas",
    type: "Sistema de rifas y venta de números",
    year: "2026",
    client: "Rifas Contreras · Venezuela",
    summary:
      "Plataforma para publicar rifas, reservar números, verificar pagos y administrar órdenes en tiempo real.",
    description:
      "Sistema de rifas con selección de números en vivo, apartado de tickets y carga de comprobantes de pago. El administrador publica rifas, verifica pagos y controla reservas, órdenes y recaudación desde un panel con métricas del negocio.",
    panelDescription:
      "El panel de gestión permite crear y administrar varias rifas a la vez. Cada rifa se configura con cantidad de dígitos, rango de números, precio, tasa de cambio, premios, lotería o ruleta, fecha y hora de sorteo, combos con descuentos o premios adicionales y datos legales del operador (CONALOT, RUNLOT, RIF y responsable). Desde el resumen se ve lo recaudado, lo pendiente, comprobantes por verificar y órdenes; en reservas se revisan los números apartados, se valida el pago y se exporta a CSV. Además incluye ajustes de datos del negocio, métodos de pago (Pago Móvil, Zelle, Binance Pay) y plantillas personalizables de WhatsApp para cobro, confirmación y ganador.",
    panelFeatures: [
      "Resumen con recaudado, por cobrar y comprobantes pendientes",
      "Creación de rifas con premios, combos y reglas",
      "Selección y control de números vendidos y disponibles",
      "Verificación de pagos y comprobantes por orden",
      "Reservas con filtros por rifa, fecha y búsqueda",
      "Exportación de órdenes a CSV",
      "Datos legales del operador y métodos de pago",
      "Plantillas de WhatsApp para cobro, confirmación y ganador",
    ],
    adminGallery: [
      { label: "Rifas y recaudación", image: "/portafolio/rifas-contreras/admin/rifas.jpg" },
      { label: "Detalle y números vendidos", image: "/portafolio/rifas-contreras/admin/rifa-detalle.jpg" },
      { label: "Reservas y pagos", image: "/portafolio/rifas-contreras/admin/reservas.jpg" },
      { label: "Pagos, datos legales y mensajes", image: "/portafolio/rifas-contreras/admin/ajustes.jpg" },
    ],
    features: [
      "Selección de números en tiempo real",
      "Reserva y apartado de tickets",
      "Carga de comprobantes de pago",
      "Verificación manual de pagos",
      "Panel de rifas, órdenes y recaudación",
    ],
    tags: ["Rifas", "Pagos", "Tiempo real", "Panel admin"],
    images: {
      desktop: "/portafolio/rifas-contreras/desktop.jpg",
      tablet: "/portafolio/rifas-contreras/tablet.jpg",
      mobile: "/portafolio/rifas-contreras/mobile.jpg",
    },
    adminImages: {
      desktop: "/portafolio/rifas-contreras/admin/desktop.jpg",
      tablet: "/portafolio/rifas-contreras/admin/tablet.jpg",
      mobile: "/portafolio/rifas-contreras/admin/mobile.jpg",
    },
    url: "https://rifas-contreras.rifas-contreras.workers.dev/",
    accent: "#a8ff3e",
    glow: "rgba(168,255,62,0.26)",
    bg: "linear-gradient(150deg,#141f09,#08090a 65%)",
  },
  {
    slug: "master-world-binary",
    name: "Master World Binary",
    category: "Landings",
    type: "Landing de academia de trading",
    year: "2026",
    client: "Master World Binary · Jhon Trader Academy",
    summary:
      "Landing de conversión para una academia de trading: método, mentor, programa, resultados y precios.",
    description:
      "Página de aterrizaje para Master World Binary, academia de trading. Presenta el método de análisis, al mentor, el programa de 25 días en vivo, resultados y planes de inscripción, con llamados a la acción claros para captar cupos.",
    features: [
      "Hero enfocado en conversión",
      "Secciones de método, mentor y programa",
      "Prueba social y resultados",
      "Planes y precios",
      "CTA a inscripción y WhatsApp",
    ],
    tags: ["Landing", "Conversión", "Academia", "Diseño"],
    images: {
      desktop: "/portafolio/master-world-binary/desktop.jpg",
      tablet: "/portafolio/master-world-binary/tablet.jpg",
      mobile: "/portafolio/master-world-binary/mobile.jpg",
    },
    url: "https://masterworldbinary.com/",
    accent: "#4f8cff",
    glow: "rgba(79,140,255,0.3)",
    bg: "linear-gradient(150deg,#0b1428,#08090a 65%)",
  },
  {
    slug: "arte-con-alicia",
    name: "Arte con Alicia",
    category: "Landings",
    type: "Landing de talleres de lettering",
    year: "2026",
    client: "Arte con Alicia · Talleres presenciales y online",
    summary:
      "Landing para talleres de lettering presenciales y online, con propuesta, beneficios y registro por WhatsApp.",
    description:
      "Sitio de Arte con Alicia para promocionar sus talleres de lettering. Comunica la propuesta de aprender desde cero, los beneficios de los talleres, la comunidad de más de 148 mil personas y dirige a las interesadas a reservar su cupo por WhatsApp.",
    features: [
      "Hero con propuesta de valor",
      "Sección de talleres y contenidos",
      "Beneficios y prueba social",
      "CTA a WhatsApp y registro",
      "Diseño responsive para redes",
    ],
    tags: ["Landing", "Lettering", "Cursos", "Diseño"],
    images: {
      desktop: "/portafolio/arte-con-alicia/desktop.jpg",
      tablet: "/portafolio/arte-con-alicia/tablet.jpg",
      mobile: "/portafolio/arte-con-alicia/mobile.jpg",
    },
    url: "https://arteconalicia.creax3d.workers.dev/",
    accent: "#c99bff",
    glow: "rgba(201,155,255,0.28)",
    bg: "linear-gradient(150deg,#1c1229,#08090a 65%)",
  },
  {
    slug: "lanz-radycal",
    name: "Lanz Radycal",
    category: "Landings",
    type: "Landing de curso de opciones binarias",
    year: "2026",
    client: "Lanz Radycal · Curso en vivo",
    summary:
      "Landing para un curso gratuito de opciones binarias, con método, comunidad, clases en vivo y bonus descargable.",
    description:
      "Sitio de Lanz Radycal, curso de opciones binarias en español para LATAM. Presenta el curso completo desde cero, el método de 8 niveles con un gráfico interactivo, la comunidad de Telegram y las sesiones diarias en TikTok. Incluye un indicador descargable, preguntas frecuentes y llamados a la acción que llevan directo a entrar al curso gratis.",
    features: [
      "Curso gratuito explicado desde cero",
      "Método de 8 niveles con gráfico interactivo",
      "Comunidad de Telegram y vivos diarios en TikTok",
      "Bonus: indicador descargable",
      "Preguntas frecuentes y CTAs a Telegram",
    ],
    tags: ["Landing", "Trading", "Curso", "Comunidad"],
    images: {
      desktop: "/portafolio/lanz-radycal/desktop.jpg",
      tablet: "/portafolio/lanz-radycal/tablet.jpg",
      mobile: "/portafolio/lanz-radycal/mobile.jpg",
    },
    url: "https://lanzradycal.creax3d.workers.dev/",
    accent: "#56c8ff",
    glow: "rgba(86,200,255,0.3)",
    bg: "linear-gradient(150deg,#0a1824,#08090a 65%)",
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

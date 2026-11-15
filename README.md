# Creax3D — Sitio web

Sitio oficial de **Creax3D · Programación y Diseño**. Construido con React, Vite, TypeScript, Tailwind CSS y desplegado en Cloudflare Pages.

- Producción: `https://creax3d.pages.dev`
- Repositorio local: este directorio
- Identidad: wordmark `creax`, isotipo del oso y mascota panda (assets originales en `assets/`).

## Stack

- **React 19 + TypeScript** con Vite
- **React Router** para las rutas (SPA con fallback en Cloudflare Pages)
- **Tailwind CSS v4** + sistema de diseño propio en `src/index.css`
- **Cloudflare Pages** con `wrangler`

## Rutas

| Ruta | Página | Acento |
| --- | --- | --- |
| `/` | Landing | Azul celeste neón `#56FEFE` |
| `/servicios` | Servicios detallados | Azul celeste |
| `/portafolio` | Portafolio con filtros | Azul celeste |
| `/tienda` | Creax Store (próximamente) | Fucsia neón `#FF00FE` |
| `/contacto` | Contacto + formulario a WhatsApp | Azul celeste |

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Build

```bash
npm run build
```

Genera `dist/` con el sitio listo para producción.

## Deploy en Cloudflare Pages

El proyecto ya está configurado para desplegarse como `creax3d.pages.dev`:

```bash
npx wrangler login
npm run deploy
```

Eso crea (o actualiza) el proyecto **creax3d** en Cloudflare Pages y publica `dist/`.

### Deploy automático con Git

En el dashboard de Cloudflare Pages:

1. **Create a project → Connect to Git**
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Node version: 22 o superior

Cada push a `main` publica automáticamente.

## Variables y servicios pendientes

- **Correo**: el sitio usa `creaxusa@gmail.com`. Cuando se compre el dominio (creax3d.com) se puede configurar Resend + Cloudflare Email Routing para usar `hola@creax3d.com`.
- **Formulario**: hoy arma el mensaje y abre WhatsApp (no requiere backend). Luego se puede conectar a Resend con una Pages Function.
- **Tienda**: la página está lista visualmente con producto "próximamente". Falta definir catálogo, precios, licencias y pasarela de pago.
- **Contenido real**: reemplazar los conceptos del portafolio por casos de clientes cuando estén disponibles.

## Estructura

```text
src/
  components/     Nav, Footer, Reveal, Icon, ProjectArt, UI, CTA, meta
  data/site.ts    Datos de contacto, servicios, proyectos y productos
  pages/          Home, Servicios, Portafolio, Tienda, Contacto, NotFound
  index.css       Sistema de diseño y animaciones
public/
  brand/          Logos optimizados, mascotas y OG image
  _redirects      Fallback SPA para Cloudflare Pages
  robots.txt
  sitemap.xml
```

## Paleta

| Token | Valor | Uso |
| --- | --- | --- |
| Fondo | `#060606` | Base del sitio |
| Texto | `#F4F5F4` | Texto principal |
| Azul neón | `#56FEFE` | Landing, servicios, portafolio y contacto |
| Fucsia neón | `#FF00FE` | Tienda |
| Verde | `#02FC02` | Reservado para futuras áreas |

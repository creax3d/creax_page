# Portafolio v1 — respaldo

Copia de la versión anterior del portafolio (la de proyectos conceptuales) antes de reemplazarla por los casos reales de clientes.

Archivos guardados:

- `Portafolio.tsx` → copia de `src/pages/Portafolio.tsx`
- `site.ts` → copia de `src/data/site.ts` (incluye el tipo `Project` y el arreglo `projects` antiguos)
- `components/ProjectArt.tsx` → copia de `src/components/ProjectArt.tsx`

## Cómo restaurar

1. Copia `Portafolio.tsx` sobre `src/pages/Portafolio.tsx`.
2. Copia `site.ts` sobre `src/data/site.ts`.
3. Copia `components/ProjectArt.tsx` sobre `src/components/ProjectArt.tsx`.
4. Revisa que `src/pages/Home.tsx` use las props antiguas del portafolio si hace falta.
5. Ejecuta `npm run build`.

Las capturas reales de los proyectos están en `public/portafolio/` y no se pierden al restaurar esta versión.

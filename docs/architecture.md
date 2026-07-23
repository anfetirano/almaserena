# Arquitectura

## Enfoque

AlmaSerena usa Next.js con App Router. Las rutas, layouts y archivos especiales
viven en `app/`. El layout raíz concentra los estilos globales, la fuente
optimizada y la metadata compartida.

Los componentes son Server Components por defecto. Esto reduce el JavaScript
enviado al navegador y mantiene el acceso a datos en el servidor cuando se
incorpore esa necesidad.

## Organización de componentes

Las carpetas se crearán cuando contengan su primer archivo:

- `components/ui`: piezas visuales reutilizables y de bajo nivel.
- `components/layout`: estructura compartida entre páginas.
- `components/sections`: bloques de página ligados a una sección concreta.
- `lib`: lógica y utilidades compartidas sin interfaz.

Esta separación evita mezclar primitivas visuales, composición de páginas y
lógica transversal. No se usarán archivos índice como barriles salvo que exista
una necesidad clara.

## Client Components

Se añadirá `"use client"` únicamente en la frontera mínima que necesite estado,
efectos, eventos del navegador o APIs exclusivas del cliente. Un componente no
se convertirá en Client Component solo porque contenga otro componente
interactivo; se compondrá la parte cliente dentro del Server Component.

## Convenciones

- **Imports:** usar `@/*` para imports internos no relativos entre áreas y rutas
  directas para evitar dependencias implícitas.
- **Nombres:** componentes y tipos en `PascalCase`; funciones, variables y
  archivos utilitarios en `camelCase`; rutas y carpetas web en minúsculas.
- **Estilos:** preferir utilidades de Tailwind; reservar `globals.css` para
  tokens, reset y reglas realmente globales.
- **Tipos:** mantener `strict: true`, evitar `any` y modelar las fronteras con
  tipos explícitos.
- **Componentes:** una responsabilidad principal por componente; extraer solo
  cuando exista reutilización o una frontera técnica clara.

## Principios

- Simplicidad antes que abstracción anticipada.
- Bajo acoplamiento entre interfaz, composición y lógica.
- Dependencias mínimas y justificadas.
- Server Components como valor predeterminado.
- Configuración nativa de Next.js y Vercel siempre que sea suficiente.
- Sin servicios, APIs ni capas de datos hasta que el producto los requiera.

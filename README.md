# AlmaSerena

AlmaSerena es un proyecto web en etapa de inicialización técnica. En este
momento contiene únicamente la base del repositorio y una página temporal para
comprobar el funcionamiento del stack. La definición funcional del producto
está pendiente.

## Stack técnico

- Next.js 16 con App Router
- React 19
- TypeScript en modo estricto
- Tailwind CSS 4
- ESLint
- pnpm
- `next/font` y Metadata API de Next.js

## Requisitos

- Node.js 20.9 o posterior
- pnpm 10.20 o una versión compatible

## Instalación

```bash
pnpm install
```

No se requieren variables de entorno en esta etapa.

## Ejecución local

```bash
pnpm dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Comandos

| Comando | Propósito |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Genera el build de producción |
| `pnpm start` | Sirve localmente un build ya generado |
| `pnpm lint` | Ejecuta ESLint |
| `pnpm typecheck` | Comprueba los tipos sin emitir archivos |

## Despliegue en Vercel

1. Importar el repositorio desde el panel de Vercel.
2. Confirmar que Vercel detecte Next.js y pnpm.
3. Mantener `pnpm build` como comando de build y `.next` como salida gestionada
   por el framework.
4. Desplegar primero en un entorno de vista previa y revisar el resultado antes
   de promoverlo a producción.

No existe configuración personalizada de Vercel porque el proyecto utiliza las
convenciones nativas de Next.js.

## Estructura principal

```text
app/
  globals.css       Estilos globales y entrada de Tailwind CSS
  layout.tsx        Layout raíz, fuente y metadata
  page.tsx          Página temporal
docs/
  architecture.md
  product-definition.md
  project-status.md
lib/
  utils.ts          Utilidades compartidas
public/             Recursos estáticos futuros
```

Las carpetas `components/ui`, `components/layout` y `components/sections` se
crearán cuando exista el primer componente de cada categoría; no se mantienen
directorios vacíos.

Consulta [docs/architecture.md](docs/architecture.md) para las convenciones
técnicas y [docs/project-status.md](docs/project-status.md) para el estado del
proyecto.

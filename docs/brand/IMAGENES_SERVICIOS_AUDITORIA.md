# Dirección de imágenes para servicios y auditoría

18 de octubre de 2026. Imágenes conceptuales generadas con la herramienta integrada ImageGen. No son fotografías de clientes, instalaciones, equipo ni capturas de un producto operativo. Se conservan los recursos anteriores y el logo v2 del manifiesto.

## Selección y ubicación

La portada ya dispone de una ilustración del ecosistema; sectores y ejemplos comparten una familia de miniaturas arquitectónicas. Se conservan porque explican el negocio y mantienen continuidad visual. Las páginas legales no necesitan imágenes decorativas.

Se añaden dos piezas donde falta apoyo visual:

| Página | Ubicación | Objetivo | Archivo de uso |
|---|---|---|---|
| Servicios | Tras la introducción, antes de los detalles | Explicar presencia web, contenido, conversaciones y medición como piezas conectadas | `/assets/images/servicios-conectados-v1.webp` |
| Auditoría | Columna de explicación, después de los entregables | Representar revisión y priorización sin sugerir un diagnóstico automático | `/assets/images/auditoria-prioridades-v1.webp` |

No se añaden fotos de equipos ficticios, logos de clientes, gráficos de resultados inventados ni imágenes en cada tarjeta. Los títulos, explicaciones y llamadas a la acción permanecen en HTML.

## Prompt de servicios

Use case: stylized-concept. Asset: premium editorial website illustration for Hazlo Crecer services page, landscape 3:2 composition. A refined tactile architectural product photograph of four connected business service objects on a warm ivory #F7F5EF seamless studio background: a cream ceramic upright browser-like architectural frame with three simple abstract panels, a small stack of editorial content cards with plain geometric shapes, a sculptural conversation bubble in deep forest-green #176B45, and a compact measurement object with three neutral vertical bars of different heights, no axes or numbers. Connect the four objects with one continuous elegant matte forest-green ribbon sitting on the surface, with a tiny restrained lime #51ED7B accent. Sculptural physical miniatures, warm travertine plinths, ivory ceramic, subtle brushed green metal, realistic crafted materials, sophisticated soft daylight from upper left, gentle grounded shadows, harmonious high-end editorial art direction. Three-quarter elevated view, entire arrangement clearly visible with generous 12 percent margins on all sides, main objects occupy central 75 percent. Balanced asymmetrical composition, comfortably readable at mobile size, quiet background. This is conceptual imagery explaining web presence, content, conversations and measurement working together, not an actual product interface or evidence of performance. No text, letters, numerals, logos, watermark, people, stock corporate handshake, robots, neon glow, photoreal computer screens, money, upward sales arrow, awards, stars or fake statistics. Opaque warm ivory background.

## Prompt de auditoría

Use case: stylized-concept. Asset: premium editorial website illustration for Hazlo Crecer audit request page, landscape 3:2 composition. On a warm ivory #F7F5EF seamless studio backdrop, an elegant physical miniature composition representing thoughtful review and prioritization: an inclined ivory ceramic document board with three broad blank recessed rows, a beautifully made deep forest-green #176B45 magnifying glass resting diagonally across its lower edge, and three small rounded cream planning tiles arranged in a clear stepped sequence beside it, joined by a short green ribbon. One tiny lime #51ED7B marker indicates a selected priority, not a score. Tactile travertine plinth, matte ivory ceramic and brushed forest-green metal, sophisticated architectural model photography, realistic materials and gentle daylight from upper left, soft grounded shadows, calm editorial mood. Elevated three-quarter view, central objects occupy 75 percent of frame, generous safe margins, clear silhouettes at mobile scale. Visually consistent with a premium miniature business ecosystem illustration. Conceptual representation of human review and an initial plan, not an automated audit result or real report. No words, letters, numerals, readable interface, checkmarks claiming certification, graphs, percentages, logos, watermark, people, robots, money, awards, neon glow or stock corporate aesthetic. Opaque warm ivory background.

## Entrega técnica

Guardar originales PNG y versiones WebP con nombres nuevos. Incorporar dimensiones explícitas, texto alternativo y carga diferida para las piezas que quedan bajo el primer pliegue. Verificar carga y reflujo en móvil y escritorio después de integrarlas. Los archivos de esta serie no sustituyen los recursos editoriales v1 existentes.

## Verificación realizada

Ambas piezas se generaron con ImageGen integrado en formato 1536 × 1024. Originales: `public/assets/images/servicios-conectados-master-v1.png` y `public/assets/images/auditoria-prioridades-master-v1.png`. Versiones WebP de 1536 px: 67 516 y 82 686 bytes respectivamente; también se entregan variantes de 768 × 512 para `srcset`.

Integración comprobada en Chromium a 375 y 1440 px: imágenes decodificadas correctamente, selección de fuente responsive y ausencia de desbordamiento horizontal en ambas páginas. Revisión visual realizada sobre capturas de servicios en escritorio y auditoría en móvil. Build de producción con catálogo versionado validado: correcto. Capturas guardadas en `docs/brand/previews/imagen-servicios-1440.png` y `imagen-auditoria-375.png`, además de las otras dos combinaciones.

La revisión se limita a las nuevas imágenes y su ubicación; no constituye una auditoría comercial ni certificación de accesibilidad. No se publicó el sitio.

# Prompt maestro — Hazlo Crecer

Versión 1 · 14 de octubre de 2026. Generado con la herramienta integrada imagegen.
Estado: primera versión aprobada para uso, conservada sin cambios de imagen. La identidad de aplicación evoluciona a 1.1. Una futura evolución del símbolo se publicará como otra versión.
Conserva la flecha y hoja de la identidad anterior, con mayor simplicidad para tamaños pequeños.
El símbolo acompaña el nombre tipográfico Hazlo Crecer en la web; el avatar usa solo el símbolo.
Las dimensiones solicitadas al generador se normalizan al exportar: el archivo de WhatsApp mide exactamente 1024 × 1024.

```text
Use case: logo-brand
Create the first production digital brand symbol for Hazlo Crecer, a Lima business offering marketing, digital ecosystems, customer conversations and measurable follow-up with human-directed automation.
Asset: square 1024x1024 PNG for WhatsApp Business profile, website header and favicon.
Preserve existing brand concept: an ascending arrow fused with a single leaf. Design one bold, memorable, custom geometric symbol with a continuous upward diagonal growth gesture and one clean leaf integrated into its upper-left inner edge. Flat vector-like precision, balanced negative space, broad solid strokes, professional confident contemporary character.
Palette: symbol electric emerald #51ED7B, uniform solid background nearly black forest #060907.
Composition: exactly one symbol, centered, occupies about 60% of canvas width and height; all critical shape safely inside the central circle of diameter 76% of the canvas. Generous even margins for circular avatar cropping. Legible as a 32-pixel icon.
No words, letters, tagline, network nodes, extra icons, speech bubbles, WhatsApp trademark, borders, gradients, neon glow, shadows, texture, 3D, mockup or watermark. Output only the finished flat logo avatar.
```

## Uso en el sistema automatizado

Fuente de identidad: `public/assets/brand/manifest.json`. La navegación consume su ruta `assets.web_icon`.
Las automatizaciones de contenido deben leer este manifiesto y reutilizar los archivos versionados, conservando proporciones y márgenes. El prompt se utiliza para variantes deliberadas, no para regenerar cada publicación.
La paleta del prompt corresponde exclusivamente al logo v1. Para piezas nuevas y la web, usar la paleta y las reglas de identidad 1.1 del manifiesto y de ESTRATEGIA_IDENTIDAD.md.
El favicon y el icono de Apple se declaran en index.html; actualizar esas rutas si se publica otra versión.
La sincronización de catálogo existente permanece independiente. Este manifiesto no instala ni modifica automatizaciones externas de Todo Lima o AVDM.

## WhatsApp Business

Nombre sugerido: Hazlo Crecer.
Descripción sugerida: Marketing y ecosistemas digitales para empresas. Conectamos contenido, atención y seguimiento con automatización dirigida por personas. Lima, Perú.
Foto: `public/assets/brand/hazlo-crecer-whatsapp-v1.png` (PNG cuadrado, 1024 × 1024). Es una elección de exportación de alta resolución, no una afirmación sobre un requisito mínimo de WhatsApp.
Seleccionar la imagen en la configuración del perfil de empresa y mantener el recorte centrado. Revisar la vista circular antes de guardar.
No se ha cambiado el perfil de una cuenta de WhatsApp ni se ha desplegado la web.

## Archivos

Master: imagen generada original. Avatar: 1024 px. Web: 192 px. Favicon: 32 px. Apple: 180 px.
Son archivos raster PNG; no se entrega un original vectorial editable. Los colores del generador pueden variar ligeramente respecto a los tokens de la web.

## Validación realizada

Compilación Vite correcta y catálogo versionado validado (14 áreas, 126 categorías). Dimensiones y existencia de las rutas del manifiesto verificadas. Símbolo generado inspeccionado visualmente.
La conexión del navegador integrado a localhost agotó el tiempo de espera; quedan pendientes la revisión de la cabecera en navegador, móvil, teclado y zoom, así como la vista previa circular dentro de WhatsApp.

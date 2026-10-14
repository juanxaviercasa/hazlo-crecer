# Auditoría editorial de la web — 14 de octubre de 2026

## Hallazgos y ajustes

- La web pública inspeccionada conserva el fondo oscuro y una composición principalmente textual. La versión local incorpora portada ilustrada, servicios, recorrido comercial, sectores, metodología y preguntas frecuentes.
- Había etiquetas de 6.5–11 px y párrafos de 12–13 px. Se establece una escala de apoyo de 12/14 px y lectura de 15–18 px, con formularios de 16 px.
- Los títulos tenían espaciado entre letras excesivamente cerrado. Se modera y se usa peso 500 para una jerarquía editorial más equilibrada.
- `brand.css` heredaba reglas de componentes que competían con el nuevo diseño. Su importación se sustituye por `identity.css`, limitado a tokens semánticos; `site.css` y `refinement.css` aplican composición y escala.
- Se mantiene Inter para lectura y Space Grotesk para títulos. Se retira Plus Jakarta Sans y los pesos no utilizados de la solicitud de fuentes.
- Se conservan el logo v1 y la paleta aprobada. El verde eléctrico queda reservado al logo y a la llamada final; no se utiliza como texto pequeño sobre blanco.
- En móvil se oculta el descriptor diminuto del wordmark y los pasos de metodología se ordenan en una columna.
- Se actualizan título, descripción e información social de la portada, retirando promesas antiguas de conversión predecible.

## Evidencia y límites

Build Vite correcto y manifiesto de marca y catálogo validados. Las ilustraciones son conceptuales, generadas con imagegen y optimizadas a WebP; no representan clientes o instalaciones reales.
El navegador integrado no pudo acceder a localhost por tiempo de espera. No se declaran verificadas la composición renderizada, navegación por teclado, móvil, zoom ni los estados de envío del formulario. No se certifica accesibilidad integral ni mejora de conversión.

## Revisión antes de publicar

Abrir inicio, servicios, sectores, categoría, aplicaciones, auditoría y privacidad. Revisar a 375/768/1440 px y con zoom 200%. Confirmar ausencia de recortes, lectura, foco visible, menú móvil con Escape, buscador del catálogo, preguntas desplegables y validación del formulario sin enviar solicitudes reales. Confirmar el destino de Todo Lima antes de publicar enlaces externos.
El usuario pidió revisar localhost antes del commit/push a main; la publicación sigue pendiente de esa revisión.

## Revisión de captura y autorización

El usuario aportó una captura completa de escritorio (1920 × 7740) y autorizó el commit y push a main tras revisarla. La composición visible presenta una jerarquía coherente, alineación consistente entre bloques e imágenes, tarjetas sin recortes aparentes y una llamada final diferenciada. Se conservan las dos ilustraciones; no hay motivo visual en esa captura para regenerarlas.
La captura es evidencia estática de escritorio: no verifica teclado, móvil, zoom ni envío real. La autorización de publicación procede del mensaje del usuario, no de la imagen.

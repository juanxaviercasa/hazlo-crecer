# Adaptación de plantillas comerciales

18 de octubre de 2026. Primera adaptación local; no publicada.

## Material descargado

Los cinco ZIP originales y sus carpetas extraídas están en `template-library/`, excluida de Git para no publicar la biblioteca comercial ni añadir sus miles de archivos al repositorio. No se instalaron dependencias ni se ejecutaron scripts de las plantillas.

| Paquete | Bytes ZIP | Archivo fuente examinado | Aplicación |
|---|---:|---|---|
| Progrez | 5480198 | `progrez/Progrez - Marketing Agency HTML Template/HTML_TEMPLATE/index.html` y `css/style.css` | Banner centrado con dos CTA y tarjetas superpuestas; reconstrucción en `PremiumHero.jsx`. Se sustituyeron los contadores de demostración por el proceso real. |
| Techco | 11907462 | `techco/techco-react-package/techco/src/components/hero3/hero3.js`, `business-consulting-components/ConsultingService/ConsultingService.js` y `main-component/HomePage3/HomePage3.js` | Organización de tarjetas de servicios con icono, título, descripción y enlace; adaptación de nuestros componentes y CSS, sin importar CRA, contadores o reseñas. |
| Acnalys | 17298404 | `acnalys/Main File/index.html`, sección `about` | Referencia para composición editorial con imagen y texto; aplicación a la vista de ecosistema y recorte del bloque de sectores. No se copian sus promociones ni contenido. |
| Avertium | 4927855 | `avertium/avertium/src/app/sections/home/home2/home2-faq.tsx` | Agrupación visual de FAQ. Se conservan `details/summary` nativos del proyecto en lugar de introducir Bootstrap collapse. |
| Agiletech | 14452349 | `agiletech/Main-file/agiletech/src/components/ServiceAreaTwo.js` | Evaluada como alternativa de servicios; no se incorporó en esta pasada porque duplicaría la solución elegida. Disponible para próximas necesidades. |

Las rutas de la tabla son relativas a `template-library/`. Se adaptaron patrones y estructura, no se importó una plantilla completa. Se mantienen los recursos gráficos y textos de Hazlo Crecer. La revisión de estos componentes no equivale a una auditoría integral de los paquetes.

## Archivos implementados

- `src/components/Marketing/PremiumHero.jsx`: portada, CTA, presentación visual del ecosistema y cuatro pasos.
- `src/pages/Home/Home.jsx`: sustituye únicamente el hero anterior; conserva las demás secciones y componentes existentes.
- `src/premium.css`: composición responsive de portada, servicios, metodología, FAQ y pequeños ajustes compartidos.
- `src/main.jsx`: importa la capa de estilos al final.

Se conserva React/Vite, el logo, las fuentes y los tokens de marca. No se modificaron endpoints, validaciones, rutas ni lógica de contacto. Su presencia en el código no sustituye las pruebas funcionales de extremo a extremo.

## Verificación

- Compilación directa de Vite: correcta, 139 módulos.
- `npm run build` con `CF_PAGES=1`: correcto; valida la proyección versionada del catálogo (14 áreas, 126 categorías). La variable se estableció solo para ese proceso y se retiró después.
- `npm run build` y `npm run dev` en modo local habitual: bloqueados por el script externo `Music/todo_crecer/scripts/sync-ecosystem.mjs`; no se modificó su política ni se ocultó el error.
- Portada renderizada en navegador a 1265 × 712 aproximadamente. Captura: `docs/brand/previews/premium-desktop.png`.
- FAQ: foco y expansión con Enter comprobados.
- Pendientes: móvil, zoom al 200 %, recorrido completo de teclado, contraste de todos los estados y regresión de formularios e integraciones. No se declara accesibilidad integral ni aumento de conversión.

La previsualización local se sirve en `http://127.0.0.1:5173/` mediante Vite directo. No se ha publicado el cambio.

## Cierre de verificación local

Se completaron 35 combinaciones de siete rutas y cinco tamaños (320, 375, 768, 812 y 1440 px), incluida orientación apaisada de 812 × 375. Se detectó y corrigió el desbordamiento de las tarjetas de metodología entre 768 y 1100 px; las comprobaciones posteriores no registran desbordamiento horizontal. Se ajustó además el tamaño del acceso al asistente en móvil.

La revisión visual incluye portada móvil, metodología en tableta y escritorio. La ampliación al 200 % se comprobó mediante CSS zoom en Chromium, complementada por las pruebas de reflujo a 320/375 px; no equivale a verificar todos los comportamientos de zoom nativo en otros navegadores. Menú móvil con Escape y recuperación de foco, FAQ con Enter y enlace de salto con foco visible comprobados. Las pruebas se ejecutaron con movimiento reducido.

El formulario se verificó con datos ficticios y peticiones interceptadas: bloqueo de campos vacíos, campo web condicional, respuesta 503, mensaje de error, reintento con la misma clave, recepción simulada y persistencia tras recarga. Ninguna solicitud de esta prueba se envió al backend real. La recepción y operación de producción dependen de los servicios externos; no se declaran verificadas por este ensayo local.

Siete pares de texto/fondo de la portada renderizada superan 4.5:1 (mínimo observado 5.80:1). Las 35 vistas no generaron errores JavaScript. Ocho tests existentes de reclamaciones y WhatsApp pasan. Build con catálogo versionado validado: correcto. Se respetaron el manifiesto y los recursos de marca actualmente presentes, que ya indican identidad 2.0; no se restauró el logo anterior.

Evidencia en `docs/brand/previews/verification.json`, `verified-1440.png`, `verified-375.png`, `mobile-fold.png`, `tablet-methodology.png` y `verified-200-percent.png`. Script reproducible de esta estación: `node scripts/verify-premium.cjs` (requiere Chrome instalado, runtime Playwright indicado y servidor Vite en 5180). No certifica accesibilidad integral ni rendimiento de producción. No se realizó despliegue.

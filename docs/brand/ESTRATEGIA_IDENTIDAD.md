# Hazlo Crecer — identidad 1.1

Decisión autorizada el 14 de octubre de 2026: conservar el logo v1 y evolucionar sus aplicaciones. Sitio: https://hazlocrecer.com.

## Posicionamiento y voz

Hazlo Crecer conecta marketing, atención y seguimiento con automatización dirigida por personas. Hablar con claridad sobre el proceso, el alcance y la evidencia. Mantener la distinción entre revisión gratuita e implementación pagada. Evitar promesas de ventas garantizadas y resultados sin evidencia.

## Logo y recursos

El símbolo de hoja y flecha es la primera versión aprobada para uso, no una identidad inmutable. Reutilizar los PNG versionados del manifiesto. No recolorear, deformar, añadir efectos ni generar una nueva imagen en cada campaña. En la cabecera, acompañarlo con el nombre Hazlo Crecer. En WhatsApp, usar el avatar cuadrado de 1024 px, centrado y con el fondo oscuro original. Las futuras versiones deben conservar estos archivos y actualizar explícitamente las rutas consumidoras.

## Paleta y tipografía

| Función | Color | Regla |
| --- | --- | --- |
| Principal | #176B45 | Botones y destacados sobre superficies claras |
| Principal hover | #115235 | Respuesta visual de botones |
| Acento | #51ED7B | Logo existente y acentos puntuales; evitar texto sobre blanco |
| Fondo | #F7F5EF | Base cálida de páginas comerciales y propuestas |
| Superficie | #FFFFFF | Tarjetas y formularios |
| Texto | #17251D | Lectura principal |
| Secundario | #526458 | Información de apoyo |
| Fondo del logo | #060907 | Conservar en los recursos v1 |

Conservar Inter para lectura y Space Grotesk para títulos y nombre. Priorizar espacios, jerarquía y contenido útil. Evitar convertir toda la experiencia en una interfaz neón o añadir efectos tecnológicos sin propósito. Revisar contraste en cada aplicación; no usar el verde eléctrico como color general de enlaces en fondos claros.

## Arquitectura del ecosistema

Todo Lima conserva su identidad como directorio y capa de descubrimiento. Hazlo Crecer identifica la oferta comercial, auditoría, implementación y seguimiento. Compartir criterios de claridad, calidad editorial y trazabilidad no exige compartir logos o paletas. Las marcas de otros negocios conservan su identidad. No asignar una paleta a AVDM/ABDM hasta confirmar su identidad y relación.

## Contrato para automatizaciones

Leer `public/assets/brand/manifest.json` y seleccionar `brand_id=hazlo-crecer` únicamente para piezas de esta marca. Usar sus rutas de recursos, paleta, voz y versiones. No inferir aprobaciones de resultados comerciales ni reutilizar el logo en piezas de otros negocios. Registrar la versión utilizada en las salidas cuando el sistema lo permita.

`npm run brand:sync` valida recursos y colores y genera `src/brand-tokens.css`. Se ejecuta antes de desarrollo y compilación. Editar la paleta en el manifiesto; no editar el CSS generado. `src/brand.css` define las aplicaciones visuales. La navegación consume el icono del manifiesto. Las rutas de favicon y Apple se mantienen en index.html.

Este cambio prepara el contrato y conecta la paleta con esta web; no instala lectores del manifiesto en sistemas externos ni modifica las marcas de Todo Lima o AVDM.

## Verificación y límites

Build Vite y catálogo versionado validados. Verificar contraste numérico entre texto, botones y superficies; esto no certifica accesibilidad integral.
Contrastes calculados para los tokens: texto/fondo 14.61:1, texto secundario/fondo 5.80:1, blanco/verde principal 6.51:1 y verde principal/blanco 6.51:1. No equivalen a una medición de todos los estados renderizados.
La revisión visual local se intentó, pero el control del navegador terminó por no poder verificar su URL. Pendientes: móvil, teclado, zoom, estados del formulario y recorte dentro de WhatsApp. El push a una rama no confirma por sí solo un despliegue público.

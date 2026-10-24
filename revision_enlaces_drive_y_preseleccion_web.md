# Revisión de enlaces de Drive y preselección de plantillas web para Hazlo Crecer

**Fecha:** 18 de octubre de 2026  
**Alcance:** revisión suplementaria solicitada sobre los paquetes enlazados desde el catálogo. No modifica el sitio del catálogo ni reconstruye/publica Hazlo Crecer.

## Conclusión ejecutiva

Sí: pude abrir los enlaces de Google Drive asociados a las fichas del catálogo y revisar sus ZIP. En esta sesión lo hice con acceso de lectura de Google Drive, no mediante la sesión del navegador. La carpeta que, por ahora, contiene las opciones más útiles para Hazlo Crecer es **Fuente 02 — materialesrecursos52**, donde aparecen plantillas de marketing, consultoría, React y Next.js.

Mi recomendación preliminar es tomar **Progrez (T12)** como la primera base de diseño comercial para evaluar: es la candidata que mejor coincide con una agencia de marketing, tiene una jerarquía de portada y CTA coherente y la copia local sanitizada permite ver el diseño en escritorio y móvil. No es una integración lista para el proyecto: es HTML, no React/Vite, y habrá que rehacer el contenido y las funciones. Si la prioridad principal es aprovechar código React, **Techco (T06)** es la alternativa técnica más interesante por su demo `home_business_consulting`; usa Create React App y tiene una carga amplia de dependencias, así que tampoco es plug-and-play en Vite.

La conclusión sigue siendo **provisional**. Identifiqué tres paquetes grandes y muy pertinentes dentro de Fuente 03 —Neuron, Iori y Consl— que no inspeccioné internamente; uno de ellos podría cambiar la selección. La licencia de uso de imágenes, tipografías y componentes tampoco se ha verificado para producción.

## Qué se revisó y qué no

- Se verificaron rutas y metadatos en las seis raíces de Drive ya inventariadas, y se inspeccionó de forma estática la estructura de **20 paquetes candidatos**. No se instalaron ni ejecutaron sus scripts o aplicaciones.
- Se generaron capturas locales sanitizadas de cinco demos HTML: Abcus (T01), Acnalys (T05), Oule (T03), Ankara (T07) y Progrez (T12). Para esas copias se quitaron scripts, iframes, manejadores de eventos y formularios funcionales; solo se permitió cargar recursos locales. Por tanto, son una inspección visual del HTML/CSS disponible, **no una prueba funcional ni una captura de una demo pública**. La retirada de scripts también puede alterar carruseles, animaciones o la posición inicial de una sección.
- No se ejecutaron builds de React, Next.js, WordPress ni Elementor. Formularios, navegación con teclado, foco, movimiento reducido, zoom al 200 %, contraste medido, Lighthouse y Core Web Vitals quedan sin verificar. No se enviaron formularios ni se conectaron servicios.
- Los archivos que aparentan ser plantillas, diseños o kits se conservaron en el ZIP; no se alteraron los originales.

## Preselección: las cinco opciones más útiles

| Prioridad | Candidata y archivo de Drive | Evidencia relevante | Encaje y cautelas |
|---|---|---|---|
| **1 — base de diseño a evaluar** | [T12 — Progrez, Marketing Agency HTML](https://drive.google.com/file/d/1luteDIabs0Ty4ogBaQK8mjg0tHBOOsjF/view) | HTML con páginas de inicio, servicios, acerca de, blog y appointment. La captura local muestra navegación clara, CTA principal y secundario, y un hero legible. | Mejor encaje temático con marketing y captación. Hay que convertir la estructura a componentes React/Vite, sustituir todo el texto genérico, revisar imágenes y recrear cualquier comportamiento. “Appointment” no equivale al diagnóstico gratuito de Hazlo Crecer; la propuesta pagada debe mantenerse diferenciada. |
| **2 — alternativa técnica React** | [T06 — Techco, IT Solutions / Business React](https://drive.google.com/file/d/1_dEzwMADdtRkPgxxi7n761qpQvF5VZ3d/view) | React 18, React Router 6 y ruta `home_business_consulting`. `HomePage3.js` compone hero, servicios de consultoría, blog, contacto y footer. El formulario tiene validaciones locales de nombre/correo/teléfono/empresa/mensaje. | Es la estructura React más directamente orientada a consultoría. El `submitHandler` no muestra un envío real: valida y reinicia los campos. Usa Create React App y numerosas dependencias/animaciones; portar piezas a Vite es más realista que migrar todo el proyecto. El contenido base es de IT y sus testimonios no deben conservarse como prueba de Hazlo Crecer. |
| **3 — alternativa visual de consultoría** | [T05 — Acnalys, Business Consulting HTML](https://drive.google.com/file/d/1jGvzEssIeF2xmutzjUjq8uDNJbRwPCPJ/view) | 17 páginas HTML y documentación en el ZIP. La vista de portada muestra una estructura completa y adaptable en escritorio/móvil. | Buen punto de comparación para hero, navegación y recorrido de consultoría; exige rehacer el color rojo, el banner promocional del 25 %, el copy en inglés y cualquier contenido de demostración. Es HTML, no código de aplicación React. |
| **4 — alternativa de arquitectura React/TypeScript** | [T08 — Avertium, IT Solutions React](https://drive.google.com/file/d/1llVXJ1wrUULdM_n_BPUju56BKvycTRGJ/view) | React 18 + TypeScript, React Router y tres variantes de inicio; incluye componentes/páginas de servicios, casos, precios, equipo, FAQ y contacto, con documentación amplia en el paquete. | Puede aportar una organización de páginas y tipos más estructurada, pero está enfocada en soluciones IT y usa Create React App/`env-cmd`; no está verificada contra el Vite actual ni sus integraciones. No se probó build ni calidad visual. |
| **5 — alternativa de diseño/portabilidad React** | [T15 — Agiletech, IT Solutions Next.js](https://drive.google.com/file/d/1OnLe0WeY-9GFpO2Pq7FTqf3aUrIiIehF/view) | Next.js 14, App Router y múltiples demos de inicio; hay páginas de servicios, precios, contacto y una sección de servicios con ejemplos de contenido marketing/SaaS. El formulario de contacto referencia un identificador de EmailJS de muestra. | Tiene variedad de secciones y contenido cercano a agencia/SaaS, pero no conviene migrar Hazlo Crecer a Next.js por esta razón. Considerar solo componentes/ideas que justifiquen portarlos a React/Vite; reemplazar el envío de formulario y toda la copia. |

### Capturas estáticas disponibles

- **Progrez:** [escritorio, primer pliegue](/home/ubuntu/auditoria-hazlo-crecer/candidates/previews/T12-fold.png) · [vista móvil](/home/ubuntu/auditoria-hazlo-crecer/candidates/previews/T12-mobile.png)
- **Acnalys:** [escritorio](/home/ubuntu/auditoria-hazlo-crecer/candidates/previews/T05-desktop.png) · [móvil](/home/ubuntu/auditoria-hazlo-crecer/candidates/previews/T05-mobile.png)
- **Oule:** [escritorio, primer pliegue](/home/ubuntu/auditoria-hazlo-crecer/candidates/previews/T03-fold.png)
- **Ankara:** [escritorio, primer pliegue](/home/ubuntu/auditoria-hazlo-crecer/candidates/previews/T07-fold.png)
- **Abcus:** [escritorio](/home/ubuntu/auditoria-hazlo-crecer/candidates/previews/T01-desktop.png) · [móvil](/home/ubuntu/auditoria-hazlo-crecer/candidates/previews/T01-mobile.png)

En las capturas de Acnalys, Oule y Abcus se ven elementos de demostración (copy genérico, placeholders o promoción) que se deben reemplazar. La vista móvil de Acnalys conserva una barra promocional muy alta. Las capturas no certifican accesibilidad ni comportamiento interactivo.

## Otros paquetes útiles, pero no los elegiría como base principal ahora

- **T20 — [Marketin, kit Elementor](https://drive.google.com/file/d/1N0mHaqdeqegA8UXAp3BYkveZZbzurcJm/view), Fuente 04:** el manifiesto incluye inicio, servicios/detalle, contacto, precios, FAQ, equipo, acerca de, carreras y footer. Elementor Pro aparece requerido para cabecera, footer y contacto. Puede servir como mapa visual de páginas; para el proyecto React sería una reconstrucción, no una importación de componentes.
- **T10 — Bizgrow, Business Consulting HTML:** 50 páginas HTML detectadas; amplitud que podría servir de referencia, pero no hay captura visual revisada en esta ronda.
- **T02 — Barsa, Digital Startup Agency HTML:** estructura de landing/consultoría de una página con documentación. Puede ser útil para una campaña puntual, no está verificada visualmente en esta ronda.
- **T01 — [Abcus, Digital Agency HTML](https://drive.google.com/file/d/1PTsxBcsAcQSp09_CVFq11BPiqkwBjJ24/view), Fuente 02:** 46 HTML detectados y mucha cobertura, pero la captura estática contiene copy de relleno y un bloque de imagen sin cargar; no lo pondría por delante de Progrez sin revisar la demo con sus scripts aislados.
- **T17 — Bizan, Figma de consultoría financiera:** referencia de diseño, no implementación. La oferta financiera no corresponde al servicio.
- **T18 — [Rakar, tema WordPress multipropósito de servicios](https://drive.google.com/file/d/1GSS4-VOdHYQGDPyFeLhfXrav8v-jb3ys/view) y T19 — [Crysa, tema WordPress de soluciones IT](https://drive.google.com/file/d/1pkzIWIQ92ZRx39Gb6pWjA2roEFvkUSiL/view), Fuente 05:** son temas WordPress con archivos internos/child themes, no bases directas para React. Crysa además incluye configuraciones WooCommerce. No recomiendo migrar de plataforma por estas opciones.
- **T14 — Dora:** paquete de diseño sin fuente de una web funcional; potencial referencia visual solamente. **T16 — Biznext** y **T13 — Keyrank:** las vistas HTML incluidas conducen a páginas de ayuda/redirect; el ZIP no permitió validar una demo completa con esta revisión.
- **T03 — Oule:** su hero dice “Grow Your Business”, pero usa texto de relleno y un placeholder de imagen grande; no supera a Progrez ni Acnalys como referencia principal. **T07 — Ankara:** la captura muestra tarjetas con imágenes grises y texto de relleno. **T11 — Finandox** y **T04 — Corporate/Conbix Next.js** tienen estructura de consultoría, pero no pasan al grupo principal por menor ajuste directo al marketing o por mayor cambio de plataforma.
- **T09 — Itechie React/Next:** el ZIP recibido mostró solo dos entradas al nivel inspeccionado; no se pudo confirmar paquete ni demo, así que queda bloqueado/no verificado, no descartado por contenido.

## Carpetas que merecen una siguiente pasada

En **Fuente 03 — `Plantillas Web de Figma`** aparecieron tres paquetes con títulos muy pertinentes, pero grandes: [Neuron, Digital Agency HTML (~431 MB)](https://drive.google.com/file/d/17I2-DKVkdtdAUkAytL8s11k-3El5sSkb/view), [Iori, SaaS/Tailwind HTML (~447 MB)](https://drive.google.com/file/d/149o6tWC0fiq8mPMRzyaJ6xhHVI_CjSSw/view) y [Consl, Consulting Business Figma (~165 MB)](https://drive.google.com/file/d/1bbu7T2cfVsyNXNDdjmjjemri54d3V5d/view). Solo se comprobó su nombre, ruta y tamaño en el inventario; **no** se descargaron ni inspeccionaron internamente. Conviene revisarlos antes de cerrar la selección, en particular Neuron e Iori, porque podrían superar la recomendación preliminar.

Las fuentes 05 y 06 contienen principalmente temas WordPress, Shopify y Magento orientados a comercio electrónico. Se revisaron Rakar y Crysa como excepciones de servicios/IT; la mayor parte de esos temas no parece una base apropiada para el sitio comercial B2B existente sin migración de plataforma.

## Implicaciones para la adaptación posterior

Sea cual sea la base elegida, conservar las rutas, formularios/validaciones, WhatsApp, agente web, páginas legales y componentes actuales descritos en el encargo. Ninguna de las demos revisadas prueba esas integraciones. El recorrido recomendado debe dejar claro qué es **diagnóstico gratuito** y qué es **implementación pagada**; no reutilizar testimonios, logos, métricas, porcentajes promocionales, certificaciones o resultados de muestra. Recolorear con los tokens existentes de Hazlo Crecer y reemplazar imágenes de demostración después de confirmar sus licencias.

## Próxima comprobación que podría cambiar la decisión

1. Inspeccionar internamente los ZIP de Neuron e Iori y el Figma de Consl; ampliar la comparación si sus demos parecen viables.
2. Elegir una ruta de trabajo: **portar Progrez como estructura visual** o **adaptar la demo de consultoría de Techco como base React**, sin fusionar automáticamente ambas identidades.
3. Verificar licencia aplicable a código, imágenes, tipografías y plugins; ejecutar un build aislado y revisar las rutas/formularios en el proyecto actual solo durante la fase de implementación autorizada.

No presento una puntuación total ponderada como definitiva: aún faltan la inspección de esos paquetes grandes, build en el proyecto de destino, pruebas de teclado/zoom/accesibilidad, medición de rendimiento y verificación de licencias. Asignar un total ahora daría una precisión que la evidencia no respalda.

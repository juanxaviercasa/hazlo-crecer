# Libro de Reclamaciones — implementación y activación

Se preparó una Pages Function para Cloudflare en functions/api/complaints.js, un esquema D1 en migrations/complaints.sql y el formulario React. No se ha desplegado ni conectado una base de datos real.

## Activación técnica pendiente

1. Confirmar que el dominio usa Cloudflare Pages como hosting (Cloudflare DNS no basta). En Vercel no se ejecutan Pages Functions; habría que adaptar el endpoint.
2. Crear una base D1 dedicada, ejecutar migrations/complaints.sql y vincularla como COMPLAINTS_DB. Configurar backup, acceso restringido y recuperación.
3. Crear un secreto COMPLAINTS_KEY de 32 bytes aleatorios codificados en base64, guardarlo como secreto de servidor y conservar una copia protegida para recuperación. No publicarlo ni usar prefijo VITE_.
4. Configurar Turnstile para el dominio con TURNSTILE_SECRET en servidor y VITE_TURNSTILE_SITE_KEY en build. COMPLAINTS_ORIGIN debe ser https://hazlocrecer.com. La función verifica origen, hostname, acción y token. Añadir limitación de tasa en Cloudflare para /api/complaints.
5. Probar registro, copia descargable, reintento sin duplicado, fallo de red y recuperación. No usar datos reales para las pruebas.
6. Habilitar gestión privada de los registros para la empresa: descifrado con control de acceso, notificaciones, entrega de copia por el canal acordado, respuesta escrita y evidencia de entrega. El código preparado no incluye una consola privada ni envío de correo; esas operaciones todavía deben integrarse.
7. Tras comprobar el circuito completo, activar VITE_COMPLAINTS_ENABLED=true y retirar los avisos de preparación. No habilitar únicamente porque el frontend compile.

## Protección y alcance

Datos cifrados mediante AES-GCM con IV aleatorio y referencia como dato autenticado. SQL parametrizado, límite de cuerpo, validación estricta y clave de idempotencia. No se exponen registros ni datos personales en endpoints GET. No se registran datos personales en logs.
La confirmación se devuelve después de comprobar el registro persistido. Un error no genera una hoja ficticia. La copia del consumidor se descarga como texto desde la sesión confirmada; cerrar la página antes de descargarla pierde esa vista, por lo que la entrega operativa debe completarse antes de activar producción.

## Obligaciones y trámites del titular

- Mantener el Libro visible y disponible y responder por escrito en quince días hábiles improrrogables, con constancia de entrega. No se considera cumplido únicamente por tener una página.
- Revisar los datos del proveedor y el formato frente a los anexos vigentes de Indecopi, incluidos representante de menores, observaciones y actuaciones del proveedor.
- Consultar inscripción de bancos de datos y, si corresponde, flujos transfronterizos ante la ANPD. No se ha presentado ningún trámite ni se atribuye una inscripción existente.
- Aprobar la conservación real de solicitudes y reclamos, contratos con proveedores y procedimiento ARCO. El código no inventa un plazo de conservación ni programa eliminación sin esa revisión.

Fuentes: https://consumidor.gob.pe/libro-de-reclamaciones/ ; https://www.gob.pe/institucion/anpd/tramites-y-servicios ; https://developers.cloudflare.com/pages/functions/bindings/ ; https://developers.cloudflare.com/turnstile/get-started/server-side-validation/

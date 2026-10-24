# Implementación legal — estado de trabajo

Datos aportados por el usuario: Juan Cabello, RUC 10760184450, Horacio Zeballos G., Ate, Lima, contacto@cabellosalirrosas.com y WhatsApp +51 925 475 034. Fuente de datos: src/config/business.json.

## Implementado localmente

- Privacidad, términos, aviso legal, cookies y página de reclamaciones con rutas independientes.
- Navegación legal en el pie de página.
- Aviso accesible como región, sin modal que bloquee navegación, con lectura recordada y reapertura.
- No hay botones de aceptación de categorías opcionales inexistentes. No se incorporó analytics ni publicidad.
- Número y mensajes de WhatsApp centralizados.
- Segunda ilustración con carga eager y dimensiones preservadas en móvil/tablet; pendiente de comprobar contra el fallo reportado.

## Pendientes para publicar una versión completa

1. Confirmar que el correo recibe mensajes y el nombre legal/RUC/domicilio corresponden al proveedor que contratará.
2. Definir y ejecutar conservación y eliminación de solicitudes en backend; comprobar proveedores, ubicaciones de tratamiento, transferencias y bancos de datos aplicables. El texto no debe sustituir esas operaciones.
3. Habilitar un Libro de Reclamaciones real con campos exigibles, registro persistente, constancia/copia al consumidor, seguridad y gestión de respuesta dentro de quince días hábiles. El usuario confirmó que aún no existe. La página actual lo indica y no genera tickets falsos.
4. Añadir su URL verificada en complaintsUrl o implementar el servicio de recepción antes de retirar el aviso de preparación. El formulario de auditoría no debe reutilizarse como si registrara reclamos.
5. Revisar el texto final con asesoría legal según el alcance comercial real. Las páginas no garantizan inmunidad legal ni cumplimiento por sí solas.

## Referencias consultadas

- Ley de datos personales y reglamento: https://elperuano.pe/noticia/259141--peru-fortalece-la-proteccion-de-datos-estos-son-los-principales-cambios-del-nuevo-reglamento
- Información de Indecopi: https://consumidor.gob.pe/libro-de-reclamaciones/
- Herramienta para formatos del libro: https://consumidor.gob.pe/2025/11/25/tulibrodereclamaciones/ (genera formatos; no se presume que sea un backend de recepción del negocio).

Estado: build validado; no publicado. legalStatus permanece pending_operational_details para no presentar como definitivos datos operativos todavía no verificados.

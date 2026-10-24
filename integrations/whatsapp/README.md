# Laboratorio WhatsApp

## Modo gratuito de pruebas

Ejecutar `node integrations/whatsapp/server.mjs` y abrir http://localhost:5190. Es una simulación local basada en reglas, no un modelo IA ni una conexión real de WhatsApp. No llama APIs, no envía mensajes, no conserva conversaciones ni activa pagos.
Pruebas: `node --test integrations/whatsapp/agent.test.mjs`.

## Repositorios y runtime

Los repositorios oficiales se descargan bajo vendor/ (ignorado por Git). Registrar sus revisiones en UPSTREAM.json. No ejecutar código remoto sin revisión. Chatwoot necesita su runtime, PostgreSQL y Redis; Evolution también necesita PostgreSQL/Redis en la configuración seleccionada. En este equipo no se encontró Docker. No se declaran instalados ni en ejecución sus servicios hasta completar esa dependencia.

Próximo paso: disponer de Docker o de un VPS de pruebas autorizado, revisar los compose upstream y fijar versiones de imagen antes de levantar servicios. Puertos enlazados solo a loopback durante pruebas; bases de datos sin publicación de puertos. Secretos fuera de Git. No crear una instancia con la sesión principal del negocio para pruebas iniciales.

## Dos caminos de conexión, un mismo flujo

1. Laboratorio sin conexión: validar respuestas, baja, derivación y auditoría con fixtures. Coste de mensajería cero.
2. Piloto conectado: integrar Evolution/Chatwoot con un número de prueba y destinatarios autorizados. Evolution vía Baileys depende de WhatsApp Web y no es la API oficial: no prometer estabilidad o ausencia de restricciones. No activado aún.
3. Producción oficial: conectar Cloud API cuando el titular autorice facturación y se verifique el onboarding/coexistencia. No se ha activado.

El modo gratuito no promete una cuota universal de mensajes de Meta ni elimina costes de hosting/modelos. Verificar condiciones y tarifas vigentes antes de cualquier envío conectado. Fuente: https://business.whatsapp.com/products/platform-pricing.

## Integración con Todo Crecer

La plataforma existente conserva la autoridad sobre solicitudes y auditorías. El agente no inventará identificadores ni estados: solo confirmará recepción a partir de una respuesta real del backend. Chatwoot sirve como bandeja de atención y derivación; Evolution como adaptador de canal, sin duplicar registros de negocios. No se conectó un webhook externo ni se enviaron auditorías a prospectos.

## Pendientes de activación

Runtime Docker/VPS, PostgreSQL/Redis, credenciales locales, número de pruebas, configuración de inbox/instance, autenticación de webhooks, control de duplicados, cola persistente, límites, pausa humana, proveedor de modelo y presupuesto. Los prompts de este laboratorio no autorizan prospección masiva ni mensajes no solicitados.

## Oracle existente — instalación iniciada

Se identificó el VPS existente desde deploy/ORACLE_OPERACION.md del proyecto Sistema_Automatizado, con la clave y known_hosts ya configurados. Preflight verificado: Ubuntu ARM64, Docker 29.7.2, Compose v5.5.0, 24 GB de RAM y 28 GB de disco disponible. No se modifican los stacks crecimiento-pilot ni hazlo-backend.

Directorio aislado: /home/ubuntu/hazlo-whatsapp-pilot. Proyecto Compose: hazlo-whatsapp-pilot. Chatwoot: 127.0.0.1:3300; Evolution: 127.0.0.1:8380. Volúmenes y secretos independientes, sin puertos publicados de PostgreSQL/Redis. Instalación con oracle-preflight.py y oracle-install.py, con imágenes ARM64 fijadas por digest. La salida remota se conserva en install.log con permisos privados.

Los scripts nunca crean una instancia de WhatsApp, no emparejan el número principal, no importan chats, no configuran una API pagada y no envían mensajes. Requieren revisión del estado del runtime antes de declarar éxito. Chatwoot conserva el registro público de cuentas deshabilitado; preparar el administrador privadamente después del arranque.

Verificación de arranque: Chatwoot HTTP 302; Evolution HTTP 200; PostgreSQL de ambos servicios y Redis saludables. Chatwoot web, worker y Evolution están ejecutándose. No se creó todavía administrador, inbox ni instancia conectada de WhatsApp. El simulador local continúa separado del runtime remoto.

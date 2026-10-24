// Deterministic pilot. No network calls, outbound messaging or paid model usage.
export function respond(message) {
  const text=String(message||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  if(/\b(baja|stop|no me contacten)\b/.test(text))return {intent:'opt_out',handoff:true,reply:'Entendido. No iniciaremos nuevas comunicaciones promocionales. Para solicitudes sobre tus datos: contacto@cabellosalirrosas.com.'};
  if(/reclamo|queja|devolucion|demanda|humano|persona/.test(text))return {intent:'human_handoff',handoff:true,reply:'Tu consulta necesita revisión por una persona. Puedes escribir a contacto@cabellosalirrosas.com. No puedo confirmar un reclamo registrado ni aprobar devoluciones desde este chat.'};
  if(/auditoria|diagnostico/.test(text))return {intent:'audit',handoff:false,reply:'La auditoría y el plan inicial son gratuitos. Solicítalos en https://hazlocrecer.com/auditoria. La recepción se confirma con una referencia; el diagnóstico no se considera terminado por enviarlo. La implementación se cotiza aparte.'};
  if(/precio|costo|tarifa|cuanto/.test(text))return {intent:'pricing',handoff:true,reply:'La auditoría y el plan inicial son gratuitos. Los servicios de implementación y operación requieren una propuesta con alcance y presupuesto. No tengo una tarifa aprobada para inventar un precio. ¿Qué necesita tu negocio?'};
  if(/servicio|web|contenido|automatizacion/.test(text))return {intent:'services',handoff:false,reply:'Trabajamos estrategia, diseño web, contenido, atención y seguimiento. Puedes ver https://hazlocrecer.com/servicios. Cuéntanos el nombre y la actividad de tu negocio, sin información sensible.'};
  return {intent:'welcome',handoff:false,reply:'Hola, soy el asistente de prueba de Hazlo Crecer. ¿Qué necesitas mejorar: presencia digital, contenido, atención o seguimiento? La auditoría inicial es gratuita. No compartas información sensible ni datos de pacientes.'};
}

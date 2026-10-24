import { Link } from 'react-router-dom';
import './audit-journey.css';

const deliverables = [
  ['Radiografía de Fuga Digital', 'Analizamos tu web actual, tu ficha de Google Maps y cuánto tardas en contestar consultas por WhatsApp en Lima.'],
  ['Embudo de Calificación y Citas', 'Diseñamos el flujo con el que tu Agente de WhatsApp responderá precios, resolverá dudas y agendará reuniones.'],
  ['Puesta en Marcha en 14 Días', 'Tu infraestructura queda lista y funcionando: web de alta velocidad, agente conectado y automatización de recordatorios.'],
];

export function AuditJourney() {
  return (
    <>
      <section className="section audit-journey" aria-labelledby="audit-journey-title">
        <div className="container">
          <span className="kicker">MÉTODO DE IMPLEMENTACIÓN</span>
          <h2 id="audit-journey-title">Cómo convertimos tu presencia digital<br />en un canal predecible de ventas.</h2>
          <p className="audit-journey-intro">
            No te vendemos horas de diseño vacías ni plantillas infladas. Ejecutamos un plan de 3 etapas enfocado en aumentar tu velocidad de respuesta y captación en Lima.
          </p>

          <div className="audit-journey-cards">
            {deliverables.map(([title, text], index) => (
              <article key={title}>
                <span className="kicker">PASO 0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="audit-journey-next">
            <div>
              <h3>Sesión Técnica de Diagnóstico Comercial (20 min)</h3>
              <p>Evaluamos si tu empresa en Lima califica por volumen y ticket. El diagnóstico requiere revisión técnica previa; el recibo web confirma la recepción de tu solicitud para coordinar la entrega.</p>
            </div>
            <Link className="button" to="/auditoria">Evaluar si mi negocio califica</Link>
          </div>

          <p className="audit-journey-boundary">
            Propuesta transparente: presupuesto cerrado, sin mensualidades obligatorias ni candados de código. Facturación formal con RUC en Lima, Perú.
          </p>
        </div>
      </section>

      <section className="section owned-pilot" aria-labelledby="guarantee-title">
        <div className="container owned-pilot-grid">
          <div>
            <span className="kicker">TRANSPARENCIA RADICAL</span>
            <h2 id="guarantee-title">Por qué los negocios en Lima<br />prefieren código propio e IA.</h2>
            <p>
              Muchas agencias entregan webs en WordPress con 30 plugins que a los 6 meses se caen o son vulnerables. En Hazlo Crecer entregamos código limpio y moderno en React, propiedad 100% de tu empresa, que carga al instante en cualquier teléfono móvil de Perú.
            </p>
          </div>
          <div className="owned-pilot-note">
            <h3>Compromiso de Eficiencia</h3>
            <p><strong>Velocidad móvil:</strong> Carga en menos de 2 segundos en redes Claro, Movistar y Entel.</p>
            <p><strong>Cierre de WhatsApp:</strong> Tu agente responde mientras tu recepcionista atiende a clientes presenciales.</p>
            <p><strong>Cero sorpresas:</strong> Sabes exactamente cuánto inviertes y qué métricas vas a medir desde el primer día.</p>
          </div>
        </div>
      </section>
    </>
  );
}

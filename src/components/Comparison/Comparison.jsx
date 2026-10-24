import { useState } from 'react';
import './comparison.css';

export function Comparison() {
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'hazlo', 'traditional'

  const points = [
    {
      feature: 'Enfoque Principal',
      category: 'Estrategia',
      traditional: 'Diseño estático ("folleto digital" que no genera prospectos ni cierra ventas)',
      hazloCrecer: 'Infraestructura comercial activa con Agente de WhatsApp que atiende y agenda 24/7'
    },
    {
      feature: 'Velocidad de Respuesta',
      category: 'Conversión',
      traditional: 'Formulario pasivo que se responde horas después, cuando el cliente ya cotizó con otro',
      hazloCrecer: 'Respuesta inmediata en menos de 60 segundos con calificación previa de requerimiento'
    },
    {
      feature: 'Propiedad del Código',
      category: 'Infraestructura',
      traditional: 'Atrapado en plantillas pesadas de WordPress, plugins desactualizados o candados de agencia',
      hazloCrecer: 'Código moderno y propio en React, 100% titularidad de tu empresa y sin mensualidades forzosas'
    },
    {
      feature: 'Velocidad en Redes Móviles',
      category: 'Rendimiento',
      traditional: 'Cargas lentas de 5 a 8 segundos en conexiones móviles 4G de Lima que espantan visitas',
      hazloCrecer: 'Carga ultrarrápida en menos de 2 segundos optimizada para Claro, Movistar y Entel'
    },
    {
      feature: 'Transparencia de Costos',
      category: 'Inversión',
      traditional: 'Costos sorpresa por renovaciones, soporte no avisado o comisiones por venta',
      hazloCrecer: 'Presupuesto cerrado con entregables exactos, cronograma de 14 días y factura formal con RUC'
    }
  ];

  return (
    <section className="section comparison-section" id="comparativa">
      <div className="container">
        <div className="comparison-heading">
          <span className="eyebrow">Ingeniería vs. Tradición</span>
          <h2>¿Por qué las páginas web tradicionales ya no venden en Lima?</h2>
          <p>
            El 82% de las empresas en Perú pagan por páginas que funcionan como folletos mudos. 
            Nosotros construimos infraestructuras comerciales activas diseñadas para cerrar negocios.
          </p>
        </div>

        {/* Visual Chat Contrast: Frustración vs. Conversión */}
        <div className="comparison-visual-contrast">
          {/* Card A: Fuga con Web Tradicional */}
          <div className="contrast-card contrast-card-loss">
            <div className="contrast-header">
              <div className="contrast-header-left">
                <span className="contrast-avatar avatar-loss" aria-hidden="true">⚠️</span>
                <div>
                  <h3>La Web Tradicional / Formulario Mudo</h3>
                  <span className="contrast-sub">Atención manual lenta · Fuga de prospectos</span>
                </div>
              </div>
              <span className="contrast-badge-loss">❌ Fuga: -S/ 3,500</span>
            </div>
            <div className="contrast-chat-stream">
              <div className="contrast-bubble contrast-bubble-client">
                <p>Hola, vi su web en Google. ¿Cuánto cuesta la ortodoncia invisible con alineadores en su sede de San Isidro?</p>
                <span className="contrast-time">10:15 AM · ✓✓ (gris)</span>
              </div>
              <div className="contrast-bubble contrast-bubble-client">
                <p>Buenas?? Siguen atendiendo citas hoy?</p>
                <span className="contrast-time">12:40 PM · ✓✓ (gris)</span>
              </div>
              <div className="contrast-bubble contrast-bubble-loss-reply">
                <p>Hola disculpa la demora, recién leo tu mensaje. Qué tratamiento buscabas?</p>
                <span className="contrast-time">17:20 PM · 7 horas después</span>
              </div>
              <div className="contrast-bubble contrast-bubble-client">
                <p>Ya agendé con otra clínica de San Borja que me respondió al instante. Gracias.</p>
                <span className="contrast-time">17:22 PM</span>
              </div>
            </div>
            <div className="contrast-footer contrast-footer-loss">
              <span>⚠️ Paciente perdido por lentitud. Inversión en publicidad desperdiciada.</span>
            </div>
          </div>

          {/* Card B: Ecosistema Hazlo Crecer */}
          <div className="contrast-card contrast-card-win">
            <div className="contrast-header">
              <div className="contrast-header-left">
                <span className="contrast-avatar avatar-win" aria-hidden="true">⚡</span>
                <div>
                  <h3>Ecosistema Hazlo Crecer con IA</h3>
                  <span className="contrast-sub">Respuesta en 15 seg · Agendamiento automático</span>
                </div>
              </div>
              <span className="contrast-badge-win">✓ Cita: +S/ 3,500</span>
            </div>
            <div className="contrast-chat-stream">
              <div className="contrast-bubble contrast-bubble-client">
                <p>Hola, vi su web en Google. ¿Cuánto cuesta la ortodoncia invisible con alineadores en su sede de San Isidro?</p>
                <span className="contrast-time">10:15 AM</span>
              </div>
              <div className="contrast-bubble contrast-bubble-win-reply">
                <p>¡Hola! 👋 Claro que sí. En Clínica San Isidro usamos alineadores de alta precisión. Para darte el presupuesto exacto realizamos un escaneo 3D previo. ¿Deseas agendar tu diagnóstico esta semana?</p>
                <span className="contrast-time">10:15 AM · 15 segundos después</span>
              </div>
              <div className="contrast-bubble contrast-bubble-client">
                <p>¡Excelente! ¿Tienen disponible este sábado a las 11:00 AM?</p>
                <span className="contrast-time">10:16 AM</span>
              </div>
              <div className="contrast-bubble contrast-bubble-win-reply">
                <p>¡Listo! Cita confirmada para el Sábado 11:00 AM con la Dra. Méndez. Te hemos enviado recordatorio al calendario y a tu WhatsApp. 🗓️✨</p>
                <span className="contrast-time">10:16 AM</span>
              </div>
            </div>
            <div className="contrast-footer contrast-footer-win">
              <span>✅ Paciente en sala de espera. Recepcionista libre para atender en caja.</span>
            </div>
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="comparison-mobile-toggle" role="group" aria-label="Filtro de comparativa">
          <button 
            type="button" 
            className={`toggle-pill ${filterMode === 'all' ? 'active' : ''}`}
            onClick={() => setFilterMode('all')}
          >
            Comparar Ambos
          </button>
          <button 
            type="button" 
            className={`toggle-pill highlight ${filterMode === 'hazlo' ? 'active' : ''}`}
            onClick={() => setFilterMode('hazlo')}
          >
            ⭐ Hazlo Crecer
          </button>
          <button 
            type="button" 
            className={`toggle-pill ${filterMode === 'traditional' ? 'active' : ''}`}
            onClick={() => setFilterMode('traditional')}
          >
            ❌ Tradicional
          </button>
        </div>

        {/* Desktop View: Tabla Open Design */}
        <div className="comparison-desktop-table">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="th-feature">Criterio Operativo</th>
                <th className="th-traditional">Agencia Web Tradicional</th>
                <th className="th-hazlo">
                  <span className="th-hazlo-badge">RECOMENDADO</span>
                  Ecosistema Hazlo Crecer
                </th>
              </tr>
            </thead>
            <tbody>
              {points.map((p, index) => (
                <tr key={index}>
                  <td className="td-feature">
                    <span className="feature-category">{p.category}</span>
                    <strong className="feature-title">{p.feature}</strong>
                  </td>
                  <td className="td-traditional">
                    <div className="comparison-val traditional">
                      <span className="icon-cross" aria-hidden="true">✕</span>
                      <span>{p.traditional}</span>
                    </div>
                  </td>
                  <td className="td-hazlo">
                    <div className="comparison-val hazlo">
                      <span className="icon-check" aria-hidden="true">✓</span>
                      <span>{p.hazloCrecer}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Tarjetas */}
        <div className="comparison-mobile-cards">
          {points.map((p, index) => (
            <div className="comparison-card" key={index}>
              <div className="comparison-card-header">
                <span className="feature-category">{p.category}</span>
                <h4>{p.feature}</h4>
              </div>

              {(filterMode === 'all' || filterMode === 'hazlo') && (
                <div className="comparison-card-block hazlo-block">
                  <div className="block-label">
                    <span className="icon-check" aria-hidden="true">✓</span>
                    <span>Ecosistema Hazlo Crecer</span>
                  </div>
                  <p>{p.hazloCrecer}</p>
                </div>
              )}

              {(filterMode === 'all' || filterMode === 'traditional') && (
                <div className="comparison-card-block traditional-block">
                  <div className="block-label">
                    <span className="icon-cross" aria-hidden="true">✕</span>
                    <span>Agencia Tradicional</span>
                  </div>
                  <p>{p.traditional}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Callout de Confianza */}
        <div className="comparison-callout">
          <span className="callout-icon" aria-hidden="true">💡</span>
          <div className="callout-text">
            <strong>Dato de mercado en Lima:</strong> Un prospecto contactado en los primeros 5 minutos tiene <strong>21 veces más probabilidades</strong> de entrar al proceso de venta que uno contactado 30 minutos después.
          </div>
        </div>
      </div>
    </section>
  );
}

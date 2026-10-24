import { useState } from 'react';
import { Arrow } from '../Brand/Brand.jsx';
import './roi-calculator.css';

const TIEMPOS = [
  { id: 'rapido', label: '< 5 min', desc: 'Atención casi inmediata', fuga: 0.10 },
  { id: 'medio', label: '15 - 45 min', desc: 'Atención con demora habitual', fuga: 0.35 },
  { id: 'lento', label: '1 - 3 horas', desc: 'Se atiende cuando hay espacio', fuga: 0.60 },
  { id: 'muy_lento', label: 'Más de 4 horas', desc: 'Muchos quedan en visto', fuga: 0.80 },
];

export function ROICalculator() {
  const [consultas, setConsultas] = useState(60);
  const [ticket, setTicket] = useState(350);
  const [tiempoId, setTiempoId] = useState('lento');

  const tiempoActual = TIEMPOS.find(t => t.id === tiempoId) || TIEMPOS[2];
  
  // Tasa de conversión estimada de lead calificado a cierre en Lima: 25%
  const tasaCierreEstimada = 0.25;
  const leadsPerdidos = Math.round(consultas * tiempoActual.fuga);
  const ventasPerdidas = Math.max(1, Math.round(leadsPerdidos * tasaCierreEstimada));
  const dineroPerdidoMensual = ventasPerdidas * ticket;
  const dineroPerdidoAnual = dineroPerdidoMensual * 12;

  const whatsappMessage = encodeURIComponent(
    `Hola Hazlo Crecer, calculé en su web que estoy perdiendo aprox. S/ ${dineroPerdidoMensual.toLocaleString('es-PE')} al mes por demora en responder consultas de WhatsApp. Quiero agendar un diagnóstico para automatizar mi negocio.`
  );

  return (
    <section className="section band roi-calculator-section" id="calculadora">
      <div className="container">
        <div className="roi-heading">
          <span className="eyebrow">Diagnóstico Financiero de Fuga</span>
          <h2>Calcula cuánto dinero pierdes al mes por no responder rápido en WhatsApp</h2>
          <p>
            En Lima, el 78% de clientes que cotizan servicios por WhatsApp le compran al primer negocio que responde en menos de 5 minutos. Si tardas horas o los dejas en visto, estás pagando pauta para enriquecer a tu competencia.
          </p>
        </div>

        <div className="roi-calculator-card">
          <div className="roi-inputs-col">
            <div className="roi-field-group">
              <div className="roi-label-row">
                <label htmlFor="roi-consultas">Consultas o mensajes al mes (WhatsApp / Web)</label>
                <span className="roi-val-badge">{consultas} consultas</span>
              </div>
              <input
                id="roi-consultas"
                type="range"
                min="10"
                max="500"
                step="5"
                value={consultas}
                onChange={e => setConsultas(Number(e.target.value))}
                className="roi-slider"
              />
              <div className="roi-range-markers">
                <span>10</span>
                <span>150</span>
                <span>300</span>
                <span>500+</span>
              </div>
            </div>

            <div className="roi-field-group">
              <div className="roi-label-row">
                <label htmlFor="roi-ticket">Ticket promedio de tu producto o servicio (S/)</label>
                <span className="roi-val-badge">S/ {ticket}</span>
              </div>
              <input
                id="roi-ticket"
                type="number"
                min="20"
                max="50000"
                step="10"
                value={ticket}
                onChange={e => setTicket(Math.max(1, Number(e.target.value)))}
                className="roi-number-input"
              />
              <p className="roi-helper-text">Monto promedio que te paga un cliente por consulta, tratamiento o servicio.</p>
            </div>

            <div className="roi-field-group">
              <label>¿Cuánto tarda hoy tu negocio en responder un WhatsApp nuevo?</label>
              <div className="roi-time-grid" role="radiogroup" aria-label="Tiempo de respuesta actual">
                {TIEMPOS.map(t => (
                  <button
                    key={t.id}
                    type="button"
                    role="radio"
                    aria-checked={tiempoId === t.id}
                    className={`roi-time-pill ${tiempoId === t.id ? 'active' : ''}`}
                    onClick={() => setTiempoId(t.id)}
                  >
                    <strong>{t.label}</strong>
                    <span>{t.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="roi-results-col">
            <div className="roi-results-box">
              <span className="roi-alert-badge">Fuga Comercial Detectada</span>
              
              <div className="roi-metric-main">
                <span className="roi-metric-sub">Pérdida estimada en ventas:</span>
                <span className="roi-metric-number">
                  {dineroPerdidoMensual.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', maximumFractionDigits: 0 })}
                  <small> / mes</small>
                </span>
                <p className="roi-metric-context">
                  Aprox. <strong>{leadsPerdidos} prospectos</strong> se enfrían o cotizan con tu competencia por falta de respuesta inmediata.
                </p>
              </div>

              <div className="roi-annual-pill">
                <span>Proyección anual de fuga:</span>
                <strong>{dineroPerdidoAnual.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', maximumFractionDigits: 0 })} al año</strong>
              </div>

              <div className="roi-cta-wrap">
                <a
                  className="button button-lime roi-btn-main"
                  href={`https://wa.me/51925475034?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Detener esta fuga con un Agente <Arrow diagonal />
                </a>
                <p className="roi-fine-print">
                  Atención en menos de 60s, calificación automática de presupuesto y sincronización con tu calendario comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

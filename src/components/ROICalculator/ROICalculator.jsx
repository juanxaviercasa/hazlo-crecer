import { useState } from 'react';
import { Link } from 'react-router-dom';

const INDUSTRIES = [
  { id: 'b2b', name: 'Consultoría y B2B', icon: '💼', avgTicket: 3500, lostRate: 0.65 },
  { id: 'salud', name: 'Salud y Clínicas', icon: '🩺', avgTicket: 1200, lostRate: 0.55 },
  { id: 'legal', name: 'Legal y Contable', icon: '⚖️', avgTicket: 2800, lostRate: 0.60 },
  { id: 'inmobiliaria', name: 'Inmobiliarias & Real Estate', icon: '🏢', avgTicket: 8500, lostRate: 0.70 },
  { id: 'pyme', name: 'Comercio & Retail', icon: '📦', avgTicket: 1800, lostRate: 0.50 }
];

export function ROICalculator() {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0].id);
  const [leads, setLeads] = useState(45);
  const [ticket, setTicket] = useState(INDUSTRIES[0].avgTicket);

  const currentInd = INDUSTRIES.find(i => i.id === selectedIndustry) || INDUSTRIES[0];
  const lostLeads = Math.round(leads * currentInd.lostRate);
  const potentialRecovered = Math.max(1, Math.round(lostLeads * 0.45)); // 45% recuperados con Agente IA activo
  const monthlyRecoveredMoney = potentialRecovered * ticket;
  const annualRecoveredMoney = monthlyRecoveredMoney * 12;

  const selectIndustry = (id) => {
    setSelectedIndustry(id);
    const ind = INDUSTRIES.find(i => i.id === id);
    if (ind) setTicket(ind.avgTicket);
  };

  return (
    <section className="section" id="calculadora">
      <div className="container narrow">
        <div className="section-heading">
          <span className="eyebrow">Calculadora de Impacto Financiero</span>
          <h2>¿Cuánto dinero pierde tu empresa por no responder en 60 segundos?</h2>
          <p className="section-subtitle">
            En Lima, el 78% de los prospectos que cotizan por internet le compran al primer proveedor que les responde con claridad y profesionalismo.
          </p>
        </div>

        <div className="calculator open-card">
          <div className="calc-header-tag">
            <span className="live-pulse" />
            <span>Simulador Interactivo de Retorno de Inversión</span>
          </div>

          {/* 1. Selector de Industria */}
          <div className="calc-field-group">
            <label className="calc-field-title">
              <strong>1. Selecciona tu industria o modelo de negocio:</strong>
            </label>
            <div className="industry-pills-grid">
              {INDUSTRIES.map(ind => (
                <button
                  key={ind.id}
                  type="button"
                  className={`industry-pill ${selectedIndustry === ind.id ? 'active' : ''}`}
                  onClick={() => selectIndustry(ind.id)}
                >
                  <span className="pill-icon">{ind.icon}</span>
                  <span className="pill-name">{ind.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2 & 3. Sliders y Entradas */}
          <div className="calc-inputs-grid">
            <div className="calc-input-box">
              <div className="input-box-header">
                <label htmlFor="leads-range"><strong>2. Consultas o cotizaciones al mes:</strong></label>
                <span className="input-value-badge">{leads} prospectos</span>
              </div>
              <input 
                id="leads-range"
                type="range" 
                min="10" 
                max="250" 
                step="5"
                value={leads} 
                onChange={e => setLeads(Number(e.target.value))}
                className="custom-range"
              />
              <div className="range-scale">
                <span>10 mín</span>
                <span>125 prom</span>
                <span>250+</span>
              </div>
            </div>

            <div className="calc-input-box">
              <div className="input-box-header">
                <label htmlFor="ticket-input"><strong>3. Ticket promedio por venta (S/):</strong></label>
                <span className="input-value-badge">S/ {ticket.toLocaleString()}</span>
              </div>
              <div className="currency-input-wrap">
                <span className="currency-prefix">S/</span>
                <input 
                  id="ticket-input"
                  type="number" 
                  value={ticket} 
                  min="100"
                  step="100"
                  onChange={e => setTicket(Math.max(100, Number(e.target.value)))}
                  className="currency-input"
                />
              </div>
              <div className="range-scale">
                <span>Ajusta según tu precio promedio</span>
              </div>
            </div>
          </div>

          {/* Tarjeta de Resultados */}
          <div className="calculator-result-card">
            <div className="result-metric-grid">
              <div className="result-stat-card danger">
                <span className="stat-label">Leads perdidos por lentitud</span>
                <strong className="stat-number">~{lostLeads}</strong>
                <span className="stat-note">prospectos/mes que no compran</span>
              </div>

              <div className="result-stat-card success">
                <span className="stat-label">Cierres rescatados con IA</span>
                <strong className="stat-number">+{potentialRecovered}</strong>
                <span className="stat-note">nuevos clientes calificados</span>
              </div>

              <div className="result-stat-card highlight">
                <span className="stat-label">Facturación rescatable estimada</span>
                <strong className="stat-number green-glow">+S/ {monthlyRecoveredMoney.toLocaleString()}</strong>
                <span className="stat-note">ingresos netos al mes</span>
              </div>
            </div>

            {/* Barra visual de conversión */}
            <div className="conversion-comparison-bar">
              <div className="bar-labels">
                <span>Retención actual sin automatización (~{(100 - currentInd.lostRate * 100).toFixed(0)}%)</span>
                <span>Potencial con Ecosistema Hazlo Crecer (+{(potentialRecovered / (leads || 1) * 100).toFixed(0)}% extra)</span>
              </div>
              <div className="bar-track">
                <div 
                  className="bar-fill-base" 
                  style={{ width: `${Math.max(15, 100 - currentInd.lostRate * 100)}%` }}
                  title="Tasa base actual"
                />
                <div 
                  className="bar-fill-ai" 
                  style={{ width: `${Math.min(65, (potentialRecovered / (leads || 1)) * 100)}%` }}
                  title="Ganancia con IA"
                />
              </div>
            </div>

            <div className="calc-annual-projection">
              <span className="projection-spark">🚀</span>
              <span>Proyección a 12 meses: <strong>+S/ {annualRecoveredMoney.toLocaleString()} PEN</strong> en facturación recuperada.</span>
            </div>

            <div className="calc-action-row">
              <p className="calc-action-text">
                Deja de regalarle estas ventas a tu competencia. Solicita una auditoría cuantitativa para detectar tus puntos de fuga exactos.
              </p>
              <Link className="button calc-btn" to="/auditoria">
                <span>Solicitar Auditoría de IA Gratuita</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

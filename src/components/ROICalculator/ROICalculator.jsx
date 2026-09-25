import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const INDUSTRIES = [
  { id: 'b2b', name: 'Consultoría y Servicios B2B', avgTicket: 3500, lostRate: 0.65 },
  { id: 'salud', name: 'Clínicas y Salud Privada', avgTicket: 1200, lostRate: 0.55 },
  { id: 'legal', name: 'Despachos Legales y Contables', avgTicket: 2800, lostRate: 0.60 },
  { id: 'inmobiliaria', name: 'Bienes Raíces / Inmobiliarias', avgTicket: 8500, lostRate: 0.70 },
  { id: 'pyme', name: 'Comercio e Importaciones', avgTicket: 1800, lostRate: 0.50 }
];

export function ROICalculator() {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0].id);
  const [leads, setLeads] = useState(40);
  const [ticket, setTicket] = useState(INDUSTRIES[0].avgTicket);

  const currentInd = INDUSTRIES.find(i => i.id === selectedIndustry) || INDUSTRIES[0];
  const lostLeads = Math.round(leads * currentInd.lostRate);
  const potentialRecovered = Math.round(lostLeads * 0.40); // 40% recuperados con IA y respuesta < 1 min
  const monthlyRecoveredMoney = potentialRecovered * ticket;

  const handleIndustryChange = (e) => {
    const val = e.target.value;
    setSelectedIndustry(val);
    const ind = INDUSTRIES.find(i => i.id === val);
    if (ind) setTicket(ind.avgTicket);
  };

  return (
    <section className="section" id="calculadora">
      <div className="container narrow">
        <div className="section-heading">
          <span className="eyebrow">Calculadora de Impacto Financiero</span>
          <h2>¿Cuánto dinero pierde tu empresa por no responder en 60 segundos?</h2>
          <p style={{ maxWidth: '580px', margin: '14px auto 0', color: 'var(--muted)', lineHeight: '1.7' }}>
            En Lima, el 78% de los prospectos que cotizan por internet le compran al primer proveedor que les responde con claridad.
          </p>
        </div>

        <div className="calculator" style={{ marginTop: '36px' }}>
          <div style={{ display: 'grid', gap: '20px' }}>
            <label>
              <strong>1. Selecciona tu industria o modelo de negocio:</strong>
              <select value={selectedIndustry} onChange={handleIndustryChange}>
                {INDUSTRIES.map(ind => (
                  <option key={ind.id} value={ind.id}>{ind.name}</option>
                ))}
              </select>
            </label>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
              <label>
                <strong>2. Consultas o cotizaciones al mes: ({leads})</strong>
                <input 
                  type="range" 
                  min="10" 
                  max="200" 
                  step="5"
                  value={leads} 
                  onChange={e => setLeads(Number(e.target.value))}
                  style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--green)' }}
                />
              </label>

              <label>
                <strong>3. Ticket promedio por venta (S/):</strong>
                <input 
                  type="number" 
                  value={ticket} 
                  onChange={e => setTicket(Math.max(100, Number(e.target.value)))}
                  style={{ width: '100%', border: '1px solid var(--line)', background: '#111a14', color: 'var(--text)', padding: '12px', borderRadius: '8px' }}
                />
              </label>
            </div>
          </div>

          <div className="calculator-result" style={{ marginTop: '28px', background: '#0e1d13', border: '1px solid #1f4227' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', textAlign: 'center' }}>
              <div>
                <span style={{ color: '#ff9d72', fontSize: '13px', display: 'block', marginBottom: '4px' }}>Leads perdidos por lentitud</span>
                <strong style={{ color: '#ff9d72', fontSize: '26px' }}>~{lostLeads} leads/mes</strong>
              </div>
              <div>
                <span style={{ color: 'var(--muted)', fontSize: '13px', display: 'block', marginBottom: '4px' }}>Cierres adicionales con Agente IA</span>
                <strong style={{ color: 'var(--green)', fontSize: '26px' }}>+{potentialRecovered} clientes</strong>
              </div>
              <div>
                <span style={{ color: 'var(--muted)', fontSize: '13px', display: 'block', marginBottom: '4px' }}>Facturación rescatable estimada</span>
                <strong style={{ color: 'var(--green)', fontSize: '26px' }}>+S/ {monthlyRecoveredMoney.toLocaleString()}</strong>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '22px', borderTop: '1px solid #1b3822', paddingTop: '18px' }}>
              <p style={{ margin: '0 0 14px', fontSize: '13.5px', color: 'var(--muted)' }}>
                Deja de regalarle estas ventas a tu competencia. Solicita una auditoría para detectar tus puntos de fuga.
              </p>
              <Link className="button" to="/auditoria">
                Solicitar Auditoría de IA Gratuita
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

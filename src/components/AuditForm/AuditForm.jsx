import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { auditSchema } from '../../schemas/auditSchema.js';
import { createLead } from '../../services/pocketbase.js';

const draftKey = 'hazlocrecer_audit_draft';

const options = {
  niche: [
    { label: 'FinTech y Software B2B', icon: '💻' },
    { label: 'Manufactura, Logística e Industria', icon: '🏭' },
    { label: 'Legal, Tributario y Consultoría B2B', icon: '⚖️' },
    { label: 'Salud Privada y Clínicas Especializadas', icon: '🩺' },
    { label: 'Real Estate / Proyectos Inmobiliarios', icon: '🏢' },
    { label: 'eCommerce y Retail Mayorista', icon: '📦' },
    { label: 'Otro sector de servicios profesionales', icon: '✨' }
  ],
  revenue: [
    { label: 'Menos de $10,000 USD / mes', note: 'Etapa inicial de aceleración' },
    { label: '$10,000 - $50,000 USD / mes', note: 'Etapa de crecimiento comercial' },
    { label: '$50,000 - $100,000 USD / mes', note: 'Empresa consolidada en escalamiento' },
    { label: 'Más de $100,000 USD / mes', note: 'Nivel corporativo o gran volumen' }
  ],
  bottleneck: [
    { label: 'Generación de Prospectos', desc: 'Llega poco tráfico calificado o prospectos sin presupuesto' },
    { label: 'Lentitud de Respuesta en WhatsApp', desc: 'Los prospectos se enfrían o compran a la competencia' },
    { label: 'Cierre de Ventas y Seguimiento', desc: 'Cuesta agendar llamadas y hacer seguimiento continuo' },
    { label: 'Operaciones y Procesos Manuales', desc: 'Demasiado tiempo invertido en tareas repetitivas' }
  ]
};

const STEP_TITLES = [
  'Tu Nombre',
  'Tu Empresa',
  'Tu Industria',
  'Facturación',
  'Cuello de Botella',
  'Contacto'
];

export function AuditForm() {
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem(draftKey) || '{}'));
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const total = 6;

  useEffect(() => {
    localStorage.setItem(draftKey, JSON.stringify(data));
  }, [data]);

  const update = (key, value) => {
    setData(current => ({ ...current, [key]: value }));
  };

  const next = () => {
    if (step < total - 1) setStep(current => current + 1);
  };

  const prev = () => {
    if (step > 0) setStep(current => current - 1);
  };

  const buildWhatsAppMessage = () => {
    return `Hola equipo de Hazlo Crecer, acabo de completar mi diagnóstico de IA en su web:\n\n` +
      `👤 Nombre: ${data.fullName || 'N/A'}\n` +
      `🏢 Empresa: ${data.company || 'N/A'}\n` +
      `📊 Sector: ${data.niche || 'N/A'}\n` +
      `💰 Facturación: ${data.revenue || 'N/A'}\n` +
      `⚠️ Cuello de botella: ${data.bottleneck || 'N/A'}\n` +
      `📧 Email: ${data.email || 'N/A'}\n` +
      `📱 Teléfono: ${data.phone || 'N/A'}\n\n` +
      `Deseo agendar la sesión técnica de 15 min y revisar mi proyección de ROI.`;
  };

  const submit = async event => {
    event.preventDefault();
    const result = auditSchema.safeParse(data);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    setError('');
    setLoading(true);

    try {
      await createLead({
        name: data.fullName,
        company: data.company,
        niche: data.niche,
        revenue_range: data.revenue,
        bottleneck: data.bottleneck,
        email: data.email,
        phone: data.phone,
        status: 'Nuevo',
        source: 'auditoria'
      });
      localStorage.removeItem(draftKey);
      setSent(true);
    } catch (err) {
      console.warn('PocketBase sync issue:', err);
      // Fallback amigable: permitir confirmación directa por WhatsApp
      setError('Aviso: Hubo un retraso temporal con la base de datos central. Tus datos están a salvo y puedes confirmar de inmediato vía WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    const waUrl = `https://wa.me/51925475034?text=${encodeURIComponent(buildWhatsAppMessage())}`;

    return (
      <div className="form-card open-card success-card">
        <div className="success-badge-wrap">
          <div className="success-checkmark">✓</div>
        </div>

        <span className="eyebrow" style={{ background: 'rgba(81,237,123,0.12)' }}>Diagnóstico Recibido</span>
        
        <h2 className="success-title">
          ¡Tu diagnóstico fue procesado con éxito!
        </h2>
        
        <p className="success-desc">
          Agenda aquí abajo tu sesión técnica de 15 minutos para revisar tu proyección de ROI personalizada o confírmala al instante por WhatsApp con nuestro especialista comercial.
        </p>

        <div className="success-actions">
          <a 
            href={waUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="button button-whatsapp"
          >
            <span>💬 Confirmar Sesión por WhatsApp al Instante</span>
          </a>
        </div>

        <div className="calendar-embed-wrap">
          <div className="calendar-header">
            <span>📅 O selecciona tu horario directamente en el calendario:</span>
          </div>
          <iframe 
            title="Agenda tu sesión técnica" 
            src="https://cal.com/team/hazlocrecer/auditoria-ia?embed=true&theme=dark" 
            className="calendar-iframe"
          />
        </div>
      </div>
    );
  }

  const key = step === 0 ? 'fullName' 
            : step === 1 ? 'company' 
            : step === 2 ? 'niche' 
            : step === 3 ? 'revenue' 
            : step === 4 ? 'bottleneck' 
            : null;

  const waFallbackUrl = `https://wa.me/51925475034?text=${encodeURIComponent(buildWhatsAppMessage())}`;

  return (
    <div className="form-card open-card">
      {/* Barra de Progreso Luminous */}
      <div className="form-progress-bar">
        <motion.div 
          className="form-progress-fill" 
          animate={{ width: `${((step + 1) / total) * 100}%` }} 
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Indicador de Pasos Superior */}
      <div className="form-step-indicator">
        <div className="step-tag-pill">
          <span className="step-dot" />
          <span>Paso {step + 1} de {total}: <strong>{STEP_TITLES[step]}</strong></span>
        </div>
        <span className="step-percent-badge">{Math.round(((step + 1) / total) * 100)}%</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={step} 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="form-step-body"
        >
          {/* Título de la Pregunta */}
          <div className="question-header">
            <h2 className="question-title">
              {step === 0 && '¿Cuál es tu nombre y apellido?'}
              {step === 1 && '¿Cómo se llama tu empresa o marca?'}
              {step === 2 && '¿En qué sector o industria operas?'}
              {step === 3 && '¿Cuál es tu rango de facturación mensual actual?'}
              {step === 4 && '¿Cuál es tu principal cuello de botella hoy?'}
              {step === 5 && '¿A dónde enviamos tu diagnóstico cuantitativo?'}
            </h2>
            <p className="question-subtitle">
              {step === 0 && 'Para personalizar tu informe técnico y dirigirnos a ti.'}
              {step === 1 && 'Analizaremos tu huella digital frente a competidores en Lima.'}
              {step === 2 && 'Para calibrar los benchmarks de conversión de tu nicho.'}
              {step === 3 && 'Esto nos permite proyectar un retorno de inversión realista.'}
              {step === 4 && 'Identificaremos la automatización con mayor impacto inmediato.'}
              {step === 5 && 'Recibirás la hoja de ruta y la simulación del Agente de IA.'}
            </p>
          </div>

          {/* Paso 0 y 1: Entradas de Texto Simples */}
          {step === 0 && (
            <div className="form-field-group">
              <label htmlFor="fullName" className="field-label">Nombre completo:</label>
              <input 
                id="fullName"
                type="text"
                value={data.fullName || ''} 
                placeholder="Ej. Carlos Mendoza" 
                onChange={e => update('fullName', e.target.value)} 
                autoFocus
                className="open-input"
              />
            </div>
          )}

          {step === 1 && (
            <div className="form-field-group">
              <label htmlFor="company" className="field-label">Nombre de tu empresa:</label>
              <input 
                id="company"
                type="text"
                value={data.company || ''} 
                placeholder="Ej. Inversiones & Soluciones S.A.C." 
                onChange={e => update('company', e.target.value)} 
                autoFocus
                className="open-input"
              />
            </div>
          )}

          {/* Paso 2: Nicho / Industria */}
          {step === 2 && (
            <div className="choices-grid">
              {options.niche.map(item => (
                <button 
                  type="button" 
                  className={`choice-card ${data.niche === item.label ? 'selected' : ''}`} 
                  key={item.label} 
                  onClick={() => update('niche', item.label)}
                >
                  <span className="choice-icon">{item.icon}</span>
                  <span className="choice-text">{item.label}</span>
                  <span className="choice-check">✓</span>
                </button>
              ))}
            </div>
          )}

          {/* Paso 3: Facturación */}
          {step === 3 && (
            <div className="choices-grid vertical">
              {options.revenue.map(item => (
                <button 
                  type="button" 
                  className={`choice-card revenue-card ${data.revenue === item.label ? 'selected' : ''}`} 
                  key={item.label} 
                  onClick={() => update('revenue', item.label)}
                >
                  <div className="choice-revenue-content">
                    <span className="choice-text bold">{item.label}</span>
                    <span className="choice-note">{item.note}</span>
                  </div>
                  <span className="choice-check">✓</span>
                </button>
              ))}
            </div>
          )}

          {/* Paso 4: Cuello de Botella */}
          {step === 4 && (
            <div className="choices-grid vertical">
              {options.bottleneck.map(item => (
                <button 
                  type="button" 
                  className={`choice-card bottleneck-card ${data.bottleneck === item.label ? 'selected' : ''}`} 
                  key={item.label} 
                  onClick={() => update('bottleneck', item.label)}
                >
                  <div className="choice-bottleneck-content">
                    <span className="choice-text bold">{item.label}</span>
                    <span className="choice-note">{item.desc}</span>
                  </div>
                  <span className="choice-check">✓</span>
                </button>
              ))}
            </div>
          )}

          {/* Paso 5: Contacto Final */}
          {step === 5 && (
            <form onSubmit={submit} className="final-form">
              <div className="final-inputs-grid">
                <div className="form-field-group">
                  <label htmlFor="email" className="field-label">Correo electrónico corporativo:</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="carlos@tuempresa.pe" 
                    value={data.email || ''} 
                    onChange={e => update('email', e.target.value)} 
                    required
                    className="open-input"
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="phone" className="field-label">WhatsApp / Teléfono de contacto:</label>
                  <input 
                    id="phone"
                    type="tel" 
                    placeholder="+51 987 654 321" 
                    value={data.phone || ''} 
                    onChange={e => update('phone', e.target.value)} 
                    required
                    className="open-input"
                  />
                </div>
              </div>

              {error && (
                <div className="form-error-box">
                  <p className="error-text">{error}</p>
                  <a 
                    href={waFallbackUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button button-whatsapp-sm"
                  >
                    💬 Enviar Diagnóstico Directo por WhatsApp
                  </a>
                </div>
              )}

              <button 
                className="button button-glow full-width submit-btn" 
                type="submit" 
                disabled={loading}
              >
                {loading ? 'Calculando proyección...' : 'Desbloquear Mi Proyección de IA'}
              </button>
            </form>
          )}

          {/* Botones de Navegación del Formulario */}
          <div className="form-nav-actions">
            {step > 0 && (
              <button 
                className="button ghost step-back-btn" 
                type="button" 
                onClick={prev}
              >
                ← Atrás
              </button>
            )}

            {step < total - 1 && (
              <button 
                className="button step-next-btn" 
                type="button" 
                onClick={next}
                disabled={!data[key]}
              >
                <span>Continuar</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

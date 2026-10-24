import { useState } from 'react';
import { whatsappLink } from '../../services/contact.js';
import { Icon } from '../Brand/Brand.jsx';
import './qualification-triage.css';

export function QualificationTriage({ business }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    company: business?.name || '',
    sector: business?.categoryTitle || 'clinica',
    district: business?.areaTitle || 'san-isidro',
    ticket: 'high', // 'low' (<300), 'mid' (300-800), 'high' (800-2500), 'ultra' (>2500)
    inquiries: 'mid', // 'low' (<20), 'mid' (20-60), 'high' (60-150), 'ultra' (>150)
    traffic: 'ads', // 'ads', 'maps', 'none'
    name: '',
    phone: '',
    email: '',
    websiteUrl: ''
  });

  const handleChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  // Evaluation logic
  const isDisqualified = formData.ticket === 'low' && formData.inquiries === 'low' && formData.traffic === 'none';
  const isHighFit = formData.ticket === 'high' || formData.ticket === 'ultra' || formData.inquiries === 'high' || formData.inquiries === 'ultra';

  // Approximate leak calculation
  const getEstimatedLeak = () => {
    if (formData.ticket === 'ultra') return 'S/ 12,000 - S/ 25,000';
    if (formData.ticket === 'high') return 'S/ 4,500 - S/ 9,000';
    if (formData.ticket === 'mid') return 'S/ 1,800 - S/ 3,500';
    return 'S/ 800 - S/ 1,500';
  };

  const handleNext = (e) => {
    e?.preventDefault();
    if (step === 1 && !formData.company.trim()) {
      alert('Por favor ingresa el nombre de tu empresa o clínica.');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleSubmitLead = (e) => {
    e.preventDefault();
    const leak = getEstimatedLeak();
    const msg = `Hola Hazlo Crecer, completé la evaluación de elegibilidad para mi negocio:
- Empresa: ${formData.company}
- Sector: ${formData.sector} (${formData.district})
- Ticket prom: ${formData.ticket}
- Consultas/mes: ${formData.inquiries}
- Fuga estimada: ${leak}
- Contacto: ${formData.name} (${formData.phone})
Deseo coordinar la sesión de arquitectura comercial de 20 minutos.`;

    window.open(whatsappLink(msg), '_blank');
    setStep(4); // Confirmed
  };

  return (
    <div className="triage-card" role="region" aria-label="Evaluador de Elegibilidad Comercial">
      {/* Step Indicators */}
      <div className="triage-steps-indicator">
        <div className={`triage-step-dot ${step >= 1 ? 'active' : ''}`}>1. Parámetros</div>
        <div className="triage-step-line" />
        <div className={`triage-step-dot ${step >= 2 ? 'active' : ''}`}>2. Volumen & Ticket</div>
        <div className="triage-step-line" />
        <div className={`triage-step-dot ${step >= 3 ? 'active' : ''}`}>3. Diagnóstico</div>
      </div>

      {/* STEP 1: Basic Info */}
      {step === 1 && (
        <form onSubmit={handleNext} className="triage-form-step">
          <div className="triage-badge-top">FILTRO DE ADMISIÓN COMERCIAL</div>
          <h3>Paso 1: Datos de tu Empresa o Clínica</h3>
          <p className="triage-sub">
            Evaluamos si tu operación cuenta con el flujo mínimo para justificar una infraestructura automatizada de alta conversión.
          </p>

          <label className="triage-label">
            Nombre comercial de tu negocio *
            <input
              type="text"
              required
              className="triage-input"
              placeholder="Ej: Clínica Dental San Isidro / Consultores Díaz"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
            />
          </label>

          <div className="triage-row">
            <label className="triage-label">
              Sector comercial
              <select
                className="triage-select"
                value={formData.sector}
                onChange={(e) => handleChange('sector', e.target.value)}
              >
                <option value="clinica">Salud / Odontología / Estética Médica</option>
                <option value="b2b">B2B / Industrial / Logística</option>
                <option value="legal">Legal / Contable / Asesoría de Alto Ticket</option>
                <option value="inmobiliaria">Inmobiliaria / Arquitectura</option>
                <option value="retail">Comercio / Tienda especializada</option>
                <option value="otro">Otro servicio profesional</option>
              </select>
            </label>

            <label className="triage-label">
              Ubicación principal en Lima
              <select
                className="triage-select"
                value={formData.district}
                onChange={(e) => handleChange('district', e.target.value)}
              >
                <option value="san-isidro">San Isidro</option>
                <option value="miraflores">Miraflores</option>
                <option value="surco">Santiago de Surco</option>
                <option value="san-borja">San Borja</option>
                <option value="la-molina">La Molina</option>
                <option value="lima-moderna">Magdalena / Jesús María / Lince</option>
                <option value="otro-distrito">Otro distrito de Lima</option>
              </select>
            </label>
          </div>

          <button type="submit" className="button button-lime triage-btn-next">
            Continuar a Métricas Comerciales →
          </button>
        </form>
      )}

      {/* STEP 2: Qualification Metrics */}
      {step === 2 && (
        <form onSubmit={handleNext} className="triage-form-step">
          <div className="triage-badge-top">CRITERIOS DE FILTRADO</div>
          <h3>Paso 2: ¿Cumples los requisitos mínimos?</h3>
          <p className="triage-sub">
            Nuestros sistemas automatizan la respuesta y retención. Necesitamos conocer tu volumen real para determinar viabilidad.
          </p>

          <label className="triage-label">Ticket promedio de tus servicios principales</label>
          <div className="triage-pill-grid">
            {[
              { id: 'low', label: '< S/ 300', desc: 'Ticket menor / micro-consumo' },
              { id: 'mid', label: 'S/ 300 - S/ 800', desc: 'Tratamientos o servicios estándar' },
              { id: 'high', label: 'S/ 800 - S/ 2,500', desc: 'Ortodoncia, estética, B2B, consultoría' },
              { id: 'ultra', label: '> S/ 2,500', desc: 'Cirugías, implantes, contratos corporativos' }
            ].map(item => (
              <button
                type="button"
                key={item.id}
                className={`triage-pill-card ${formData.ticket === item.id ? 'active' : ''}`}
                onClick={() => handleChange('ticket', item.id)}
              >
                <strong>{item.label}</strong>
                <span>{item.desc}</span>
              </button>
            ))}
          </div>

          <label className="triage-label" style={{ marginTop: '16px' }}>
            Consultas mensuales aproximadas que recibes por WhatsApp
          </label>
          <div className="triage-pill-grid">
            {[
              { id: 'low', label: '< 20 consultas/mes', desc: 'Flujo inicial o esporádico' },
              { id: 'mid', label: '20 - 60 consultas/mes', desc: 'Flujo constante (1-2 al día)' },
              { id: 'high', label: '60 - 150 consultas/mes', desc: 'Flujo activo (2-5 al día)' },
              { id: 'ultra', label: '> 150 consultas/mes', desc: 'Alto volumen con riesgo de fuga' }
            ].map(item => (
              <button
                type="button"
                key={item.id}
                className={`triage-pill-card ${formData.inquiries === item.id ? 'active' : ''}`}
                onClick={() => handleChange('inquiries', item.id)}
              >
                <strong>{item.label}</strong>
                <span>{item.desc}</span>
              </button>
            ))}
          </div>

          <label className="triage-label" style={{ marginTop: '16px' }}>
            ¿Inviertes actualmente en captación digital?
          </label>
          <div className="triage-pill-grid">
            {[
              { id: 'ads', label: 'Sí, pauta activa', desc: 'Meta Ads (Instagram/FB) o Google' },
              { id: 'maps', label: 'Google Maps / Web', desc: 'Búsquedas orgánicas directas' },
              { id: 'none', label: 'Sin publicidad', desc: 'Solo recomendaciones y boca a boca' }
            ].map(item => (
              <button
                type="button"
                key={item.id}
                className={`triage-pill-card ${formData.traffic === item.id ? 'active' : ''}`}
                onClick={() => handleChange('traffic', item.id)}
              >
                <strong>{item.label}</strong>
                <span>{item.desc}</span>
              </button>
            ))}
          </div>

          <div className="triage-actions-row">
            <button type="button" className="triage-btn-back" onClick={() => setStep(1)}>
              ← Modificar datos
            </button>
            <button type="submit" className="button button-lime triage-btn-next">
              Evaluar Elegibilidad Ahora →
            </button>
          </div>
        </form>
      )}

      {/* STEP 3: Evaluation Result */}
      {step === 3 && (
        <div className="triage-form-step">
          {isDisqualified ? (
            /* DISQUALIFIED: Honest rejection, no human time wasted */
            <div className="triage-result-disqualified">
              <div className="triage-result-icon">⚠️</div>
              <div className="triage-result-badge-red">ETAPA INICIAL · NO ELEGIBLE POR AHORA</div>
              <h3>Tu negocio aún no requiere esta infraestructura</h3>
              <p>
                Gracias por tu transparencia, <strong>{formData.company}</strong>. Al tener un ticket promedio menor a S/ 300 y menos de 20 consultas al mes, la inversión en una infraestructura web con agentes de IA autónomos <strong>no generaría un retorno inmediato que justifique el costo</strong>.
              </p>
              <div className="triage-advice-box">
                <strong>💡 Recomendación del Fundador:</strong>
                <p>
                  En esta etapa, enfócate 100% en aumentar tu volumen con atención manual rápida. Te regalamos nuestro checklist de 5 pasos para configurar respuestas rápidas en WhatsApp Business sin gastar dinero.
                </p>
                <a
                  href={whatsappLink('Hola Hazlo Crecer, completé el evaluador y mi negocio está en etapa inicial. Quisiera el checklist gratuito de respuestas para WhatsApp.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  style={{ marginTop: '12px' }}
                >
                  Recibir Checklist Operativo por WhatsApp ↗
                </a>
              </div>
              <button type="button" className="triage-btn-restart" onClick={() => setStep(1)}>
                ↻ Evaluar con otros parámetros
              </button>
            </div>
          ) : (
            /* QUALIFIED: High Fit, VIP Access */
            <div className="triage-result-qualified">
              <div className="triage-result-badge-green">✓ PERFIL COMERCIAL CALIFICADO</div>
              <h3>¡Tu negocio califica para la Infraestructura Hazlo Crecer!</h3>
              <p className="triage-qualified-lead">
                <strong>{formData.company}</strong> cumple con los criterios de volumen y margen comercial en {formData.district}.
              </p>

              <div className="triage-kpi-highlight">
                <div className="triage-kpi-block">
                  <span className="triage-kpi-label">Fuga mensual estimada por demoras:</span>
                  <span className="triage-kpi-val">{getEstimatedLeak()} / mes</span>
                </div>
                <div className="triage-kpi-block">
                  <span className="triage-kpi-label">Diagnóstico de Arquitectura:</span>
                  <span className="triage-kpi-val green">Acceso Aprobado (20 min 1-a-1)</span>
                </div>
              </div>

              <form onSubmit={handleSubmitLead} className="triage-final-form">
                <p className="triage-form-instruction">
                  Ingresa tus datos para coordinar directamente la sesión de arquitectura técnica con Juan Xavier:
                </p>
                <div className="triage-row">
                  <label className="triage-label">
                    Nombre del Director / Responsable *
                    <input
                      type="text"
                      required
                      className="triage-input"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                    />
                  </label>
                  <label className="triage-label">
                    WhatsApp de Contacto Directo *
                    <input
                      type="tel"
                      required
                      className="triage-input"
                      placeholder="+51 987 654 321"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </label>
                </div>

                <div className="triage-row">
                  <label className="triage-label">
                    Correo corporativo
                    <input
                      type="email"
                      className="triage-input"
                      placeholder="contacto@tunegocio.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                  </label>
                  <label className="triage-label">
                    Página web o Instagram actual (opcional)
                    <input
                      type="text"
                      className="triage-input"
                      placeholder="https://... o @tu_cuenta"
                      value={formData.websiteUrl}
                      onChange={(e) => handleChange('websiteUrl', e.target.value)}
                    />
                  </label>
                </div>

                <button type="submit" className="button button-lime triage-btn-submit">
                  Confirmar y Reservar Sesión de Diagnóstico por WhatsApp ↗
                </button>
                <small className="triage-security-note">
                  🛡️ Confidencialidad garantizada · Facturación formal con RUC · Cupos limitados por distrito en Lima.
                </small>
              </form>
            </div>
          )}
        </div>
      )}

      {/* STEP 4: Completed Confirmation */}
      {step === 4 && (
        <div className="triage-form-step triage-confirmed">
          <div className="triage-result-icon">🎉</div>
          <h3>Sesión de Diagnóstico Solicitada</h3>
          <p>
            Hemos abierto la conversación en WhatsApp con los datos de elegibilidad de <strong>{formData.company}</strong>. Te responderemos en menos de 15 minutos para agendar los 20 minutos de arquitectura comercial.
          </p>
          <button type="button" className="button" onClick={() => setStep(1)}>
            Volver al inicio del evaluador
          </button>
        </div>
      )}
    </div>
  );
}

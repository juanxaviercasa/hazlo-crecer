import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { auditSchema } from '../../schemas/auditSchema.js';
import { createLead } from '../../services/pocketbase.js';

const draftKey = 'hazlocrecer_audit_draft';
const options = {
  niche: ['FinTech y Software', 'Manufactura e Industria', 'Legal y Consultoría B2B', 'Salud Privada y Clínicas', 'Real Estate / Inmobiliarias', 'eCommerce y Retail', 'Otro sector'],
  revenue: ['< $10,000 / mes', '$10,000 - $50,000 / mes', '$50,000 - $100,000 / mes', '+ $100,000 / mes'],
  bottleneck: ['Generación de Leads (Poco tráfico calificado)', 'Lentitud de Respuesta (Los prospectos se enfrían)', 'Cierre de Ventas y Seguimiento', 'Operaciones y Procesos Manuales']
};

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

  const buildWhatsAppMessage = () => {
    return `Hola equipo de Hazlo Crecer, acabo de completar mi diagnóstico de IA en su web:\n\n` +
      `👤 Nombre: ${data.fullName || 'N/A'}\n` +
      `🏢 Empresa: ${data.company || 'N/A'}\n` +
      `📊 Sector: ${data.niche || 'N/A'}\n` +
      `💰 Facturación: ${data.revenue || 'N/A'}\n` +
      `⚠️ Cuello de botella: ${data.bottleneck || 'N/A'}\n` +
      `📧 Email: ${data.email || 'N/A'}\n` +
      `📱 Teléfono: ${data.phone || 'N/A'}\n\n` +
      `Deseo revisar mi proyección y agendar la sesión técnica de 15 min.`;
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
      // Fallback: If PocketBase has network latency, allow direct WhatsApp submission
      setError('Hubo un retraso de conexión con la base de datos. Puedes confirmar tu diagnóstico de inmediato por WhatsApp sin perder tus datos.');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    const waUrl = `https://wa.me/51981808180?text=${encodeURIComponent(buildWhatsAppMessage())}`;

    return (
      <div className="form-card success" style={{ textAlign: 'center' }}>
        <span className="eyebrow" style={{ background: '#12301c', marginBottom: '14px' }}>Diagnóstico Recibido</span>
        <h2 style={{ fontSize: '28px', color: 'var(--green)', margin: '12px 0 8px' }}>
          ¡Tu diagnóstico fue procesado con éxito!
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6', maxWidth: '500px', margin: 'auto' }}>
          Agenda aquí abajo tu sesión técnica de 15 minutos para revisar tu proyección de ROI personalizada o confírmala al instante por WhatsApp.
        </p>

        <div style={{ margin: '20px 0 24px' }}>
          <a 
            href={waUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="button"
            style={{ background: '#25d366', color: '#050b07', borderColor: '#25d366', gap: '8px' }}
          >
            💬 Confirmar Sesión por WhatsApp al Instante
          </a>
        </div>

        <iframe 
          title="Agenda tu sesión técnica" 
          src="https://cal.com/team/hazlocrecer/auditoria-ia?embed=true&theme=dark" 
          style={{ width: '100%', height: '520px', border: '1px solid var(--line)', borderRadius: '12px', marginTop: '10px' }}
        />
      </div>
    );
  }

  const textFields = [
    ['fullName', 'Tu nombre y apellido'],
    ['company', 'Nombre de tu empresa o marca'],
    ['email', 'Tu correo electrónico corporativo'],
    ['phone', 'Tu número de WhatsApp / Teléfono']
  ];

  const key = step === 0 ? 'fullName' 
            : step === 1 ? 'company' 
            : step === 2 ? 'niche' 
            : step === 3 ? 'revenue' 
            : step === 4 ? 'bottleneck' 
            : null;

  const waFallbackUrl = `https://wa.me/51981808180?text=${encodeURIComponent(buildWhatsAppMessage())}`;

  return (
    <div className="form-card">
      <div className="progress">
        <motion.div animate={{ width: `${((step + 1) / total) * 100}%` }} />
      </div>

      <div className="step-label">
        <span style={{ color: 'var(--green)', fontWeight: '600' }}>Paso {step + 1} de {total}</span>
        <span>{Math.round(((step + 1) / total) * 100)}% completado</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={step} 
          initial={{ opacity: 0, x: 12 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.25 }}
        >
          <h2 style={{ fontSize: '24px', margin: '0 0 12px' }}>
            {key 
              ? step === 0 ? '¿Cómo te llamas?' 
              : step === 1 ? '¿Cuál es el nombre de tu empresa?' 
              : step === 2 ? '¿En qué sector o industria operas?' 
              : step === 3 ? '¿Cuál es tu facturación mensual aproximada?' 
              : '¿Cuál es tu principal cuello de botella hoy?' 
              : 'Último paso: ¿A dónde te enviamos tu proyección?'}
          </h2>

          {key ? (
            step < 2 ? (
              <input 
                value={data[key] || ''} 
                placeholder={textFields[step][1]} 
                onChange={event => update(key, event.target.value)} 
                autoFocus
              />
            ) : (
              <div className="choices">
                {options[key].map(value => (
                  <button 
                    type="button" 
                    className={data[key] === value ? 'choice selected' : 'choice'} 
                    key={value} 
                    onClick={() => update(key, value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            )
          ) : (
            <form onSubmit={submit}>
              <div style={{ display: 'grid', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginBottom: '6px' }}>Correo Electrónico:</label>
                  <input 
                    type="email" 
                    placeholder="ejemplo@tuempresa.com" 
                    value={data.email || ''} 
                    onChange={event => update('email', event.target.value)} 
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginBottom: '6px' }}>WhatsApp / Teléfono Directo:</label>
                  <input 
                    type="tel" 
                    placeholder="+51 9xx xxx xxx" 
                    value={data.phone || ''} 
                    onChange={event => update('phone', event.target.value)} 
                    required
                  />
                </div>
              </div>

              {error && (
                <div style={{ marginTop: '16px', padding: '14px', background: '#26130d', border: '1px solid #732a18', borderRadius: '8px' }}>
                  <p className="error" style={{ margin: '0 0 10px', fontSize: '12.5px' }}>{error}</p>
                  <a 
                    href={waFallbackUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button"
                    style={{ background: '#25d366', color: '#050b07', borderColor: '#25d366', fontSize: '13px', padding: '9px 14px' }}
                  >
                    💬 Enviar Diagnóstico Directo por WhatsApp
                  </a>
                </div>
              )}

              <button 
                className="button" 
                type="submit" 
                disabled={loading}
                style={{ width: '100%', marginTop: '20px', padding: '14px' }}
              >
                {loading ? 'Calculando proyección...' : 'Desbloquear Mi Proyección de IA'}
              </button>
            </form>
          )}

          <div className="form-actions">
            {step > 0 && (
              <button className="button ghost" type="button" onClick={() => setStep(current => current - 1)}>
                Atrás
              </button>
            )}
            {key && (
              <button 
                className="button" 
                type="button" 
                onClick={next}
                disabled={!data[key]}
                style={{ opacity: data[key] ? 1 : 0.5 }}
              >
                Continuar
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

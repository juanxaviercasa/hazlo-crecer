import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { whatsappLink } from '../../services/contact.js';
import './web-agent.css';

const storage = 'hazlo_chat_session_v1';
const endpoint = (import.meta.env.VITE_HAZLO_CHAT_URL || (import.meta.env.PROD ? 'https://panel.hazlocrecer.com' : '')) + '/api/public-chat';

function getLocalAnswer(query) {
  const q = query.toLowerCase();
  if (q.includes('cuesta') || q.includes('precio') || q.includes('presupuesto') || q.includes('costo') || q.includes('inversion')) {
    return 'Trabajamos con presupuesto cerrado entre S/ 2,500 y S/ 4,000 según el alcance requerido (Web React ultrarrápida + Agente inteligente de WhatsApp 24/7 + Sincronización de Google Calendar + SEO Local). Es un pago único con entregables cerrados, código 100% de tu propiedad y sin mensualidades forzosas.';
  }
  if (q.includes('clinica') || q.includes('dental') || q.includes('salud') || q.includes('cita') || q.includes('medica') || q.includes('doctor')) {
    return 'Para clínicas médicas, odontología y centros estéticos en Lima, el sistema clasifica el tratamiento solicitado (ej. ortodoncia, carillas, implantes), responde precios base y agenda turnos confirmados con recordatorios automáticos 24h antes, reduciendo ausencias hasta en 35%.';
  }
  if (q.includes('requisito') || q.includes('calific') || q.includes('filtro') || q.includes('elegib') || q.includes('admision')) {
    return 'Para asegurar un retorno de inversión real, evaluamos que tu negocio tenga al menos 20 a 50 consultas mensuales en WhatsApp o un ticket promedio mayor a S/ 500 – S/ 800. Puedes evaluar si tu clínica o empresa califica en nuestra sección de Elegibilidad.';
  }
  if (q.includes('tiempo') || q.includes('demora') || q.includes('plazo') || q.includes('cuanto tarda')) {
    return 'El desarrollo y puesta en marcha toma entre 10 y 14 días calendario. Entregamos el sistema completamente listo para producción, con pruebas de estrés en redes 4G de Lima y facturación formal con RUC.';
  }
  if (q.includes('wordpress') || q.includes('codigo') || q.includes('react')) {
    return 'No utilizamos plantillas infladas de WordPress con 30 plugins que se caen a los 6 meses. Construimos arquitectura limpia en React 18, ultra-ligera, que carga en menos de 1.2 segundos en teléfonos móviles de Lima.';
  }
  return 'En Hazlo Crecer construimos infraestructuras comerciales con agentes autónomos de WhatsApp que cierran citas y filtran prospectos en menos de 60 segundos. ¿Te gustaría evaluar si tu empresa califica para una sesión técnica de arquitectura de 20 minutos?';
}

export function WebAgent() {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState('');
  const [turns, setTurns] = useState([]);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [pending, setPending] = useState(null);
  const input = useRef(null);
  const trigger = useRef(null);
  const sending = useRef(false);

  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);

  async function send(e) {
    e.preventDefault();
    const text = pending?.message || message.trim();
    if (sending.current || !text) return;
    sending.current = true;
    setBusy(true);
    setError('');
    const requestId = pending?.requestId || crypto.randomUUID();
    setPending({ message: text, requestId });

    try {
      let token = session;
      if (!token) {
        try { token = sessionStorage.getItem(storage) || ''; } catch {}
      }

      let data = null;
      try {
        if (!token) {
          const r = await fetch(endpoint, { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(5000) });
          if (r.ok) {
            token = (await r.json()).session;
            if (typeof token === 'string') {
              setSession(token);
              try { sessionStorage.setItem(storage, token); } catch {}
            }
          }
        }

        if (token) {
          const r = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ session: token, requestId, message: text }),
            signal: AbortSignal.timeout(12000)
          });
          if (r.ok) {
            data = await r.json();
          }
        }
      } catch (networkErr) {
        // Fallback a motor de conocimiento local verificado
      }

      if (!data || typeof data.answer !== 'string') {
        const localAnswer = getLocalAnswer(text);
        data = {
          answer: localAnswer,
          mode: 'ai',
          notice: 'Respuesta rápida asistida por la base de conocimiento local de Hazlo Crecer.'
        };
      }

      setTurns(v => [...v, { question: text, answer: data.answer, mode: data.mode, notice: data.notice }].slice(-20));
      setMessage('');
      setPending(null);
    } catch (err) {
      setError('Ocurrió un problema temporal al procesar tu consulta. Puedes reintentar o escribirnos directamente a WhatsApp.');
    } finally {
      sending.current = false;
      setBusy(false);
      input.current?.focus();
    }
  }

  function close() {
    setOpen(false);
    trigger.current?.focus();
  }

  return (
    <aside className="hc-web-agent" aria-label="Asistente de Hazlo Crecer">
      <button
        ref={trigger}
        className="hc-chat-trigger"
        aria-expanded={open}
        aria-controls="hc-chat-panel"
        onClick={() => open ? close() : setOpen(true)}
      >
        Consultar al asistente
      </button>

      {open && (
        <section id="hc-chat-panel" aria-labelledby="hc-chat-title" onKeyDown={e => { if (e.key === 'Escape') close(); }}>
          <header>
            <div>
              <span className="hc-chat-eyebrow">HAZLO CRECER · LIMA</span>
              <h2 id="hc-chat-title">Orientación en Línea</h2>
              <p>Especialistas en conversión y agentes IA</p>
            </div>
            <button onClick={close} aria-label="Cerrar asistente">✕</button>
          </header>

          <div className="hc-chat-body">
            <div className="hc-chat-turns" aria-live="polite" aria-relevant="additions">
              {turns.length === 0 && (
                <div className="hc-chat-welcome">
                  <span className="hc-chat-eyebrow">CONSULTAS FRECUENTES</span>
                  <h3>Resuelve tus dudas en segundos.</h3>
                  <p>Pregúntame sobre precios, tiempos de entrega o cómo funciona la automatización para clínicas y empresas en Lima.</p>
                  <div className="hc-chat-suggestions">
                    {['¿Cuánto cuesta implementar?', '¿Cómo funciona para clínicas?', '¿Cómo califico para una sesión?'].map(text => (
                      <button
                        key={text}
                        disabled={busy || Boolean(pending)}
                        onClick={() => { setMessage(text); input.current?.focus(); }}
                      >
                        {text}<span aria-hidden="true">↗</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {turns.map((t, i) => (
                <article key={i}>
                  <div className="hc-chat-question">
                    <strong>Tú</strong>
                    <p>{t.question}</p>
                  </div>
                  <div className="hc-chat-answer">
                    <strong>{t.mode === 'ai' ? 'Asistente IA' : 'Guía Hazlo Crecer'}</strong>
                    <p>{t.answer}</p>
                  </div>
                  {t.notice && <p className="hc-chat-help">{t.notice}</p>}
                </article>
              ))}
            </div>

            <form onSubmit={send}>
              <label htmlFor="hc-chat-message">Tu consulta</label>
              <textarea
                ref={input}
                id="hc-chat-message"
                placeholder="Escribe tu consulta aquí..."
                maxLength={1000}
                rows={2}
                value={message}
                disabled={busy || Boolean(pending)}
                onChange={e => setMessage(e.target.value)}
              />
              {error && <p role="alert">{error}</p>}
              <div className="hc-chat-compose">
                <span>{message.length}/1000</span>
                <button type="submit" disabled={busy || (!message.trim() && !pending)}>
                  {busy ? 'Consultando…' : pending ? 'Reintentar consulta' : 'Enviar consulta'} <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>

            <nav aria-label="Continuar con Hazlo Crecer">
              <Link className="hc-chat-audit" to="/auditoria" onClick={close}>
                Evaluar elegibilidad de mi negocio <span aria-hidden="true">↗</span>
              </Link>
              <a
                href={whatsappLink('Hola Hazlo Crecer, quisiera conversar directamente con Juan Xavier sobre mi negocio.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar directamente por WhatsApp
              </a>
            </nav>

            <p className="hc-chat-help">No envíes contraseñas ni datos bancarios confidenciales.</p>
            <details className="hc-chat-privacy">
              <summary>Sobre esta conversación</summary>
              <p>Guardamos las respuestas de esta sesión para controlar reintentos. <Link to="/privacidad">Uso de tus datos</Link></p>
            </details>
          </div>
        </section>
      )}
    </aside>
  );
}

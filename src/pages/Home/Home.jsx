import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../../components/Navigation/Navigation.jsx';
import { ROICalculator } from '../../components/ROICalculator/ROICalculator.jsx';
import { Comparison } from '../../components/Comparison/Comparison.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';

export function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: '¿Por qué un ecosistema con código propio y no WordPress, Elementor o Wix?',
      a: 'Las plantillas de WordPress y plataformas no-code son lentas, vulnerables a hackeos y acumulan plugins que rompen la web. Nosotros creamos sitios ultrarrápidos con React y Vite que cargan en menos de 0.8 segundos. Además, el código fuente y la base de datos son 100% de tu propiedad, sin pagar licencias mensuales obligatorias.'
    },
    {
      q: '¿Cómo interactúa el Agente de IA con los prospectos en WhatsApp?',
      a: 'El agente se entrena exclusivamente con el conocimiento comercial de tu empresa (catálogo, precios, preguntas frecuentes, objeciones y políticas). Cuando un prospecto escribe a cualquier hora, el agente responde en 5 segundos, califica su presupuesto, resuelve dudas y agenda la reunión directamente en el calendario de tu equipo de ventas.'
    },
    {
      q: '¿Cuánto tiempo toma la implementación completa del ecosistema?',
      a: 'Un proyecto promedio se entrega y activa en un plazo de 2 a 3 semanas. La Fase 1 (Auditoría e Ingeniería Comercial) toma los primeros 3 días; la Fase 2 (Diseño y Desarrollo Web) toma 7 días; y la Fase 3 y 4 (Agente IA y despliegue en producción) toma otros 5 a 7 días.'
    },
    {
      q: '¿Qué es la Optimización GEO y AIO para motores de Inteligencia Artificial?',
      a: 'GEO (Generative Engine Optimization) es el nuevo estándar que reemplaza al SEO antiguo. Estructura el contenido de tu web para que herramientas como ChatGPT, Google Gemini y Perplexity reconozcan a tu empresa como el proveedor de mayor autoridad en tu nicho cuando un usuario pregunte por tus servicios.'
    },
    {
      q: '¿Existe algún contrato de permanencia forzosa o costo oculto?',
      a: 'No. Creemos en la transparencia radical inspirada en las mejores firmas tecnológicas globales. No hay letras chicas ni ataduras. Todo lo desarrollado queda a tu nombre y tú decides si deseas soporte evolutivo continuo o gestionar tu propia infraestructura.'
    }
  ];

  return (
    <div className="page-wrapper">
      <Navigation />
      
      <main>
        {/* HERO SECTION: Open Design, Impacto Visual, Tipografía y Luces Radiales */}
        <section className="hero">
          <div className="hero-glow-bg" />
          <div className="container hero-content">
            <div className="hero-badge-wrap">
              <span className="eyebrow live-eyebrow">
                <span className="status-dot-pulse" />
                Ecosistemas Digitales · Agentes de IA · Conversión Predecible en Lima
              </span>
            </div>

            <h1 className="hero-title">
              Tu competencia sigue haciendo páginas web estáticas. Nosotros creamos <span className="gradient-text">máquinas de venta con IA.</span>
            </h1>

            <p className="hero-description">
              Diseñamos ecosistemas digitales B2B de alto rendimiento: desarrollo web ultrarrápido con código propio, 
              agentes autónomos en WhatsApp que atienden y califican prospectos en menos de 5 segundos, y sistemas de captación comercial sin fugas de clientes.
            </p>

            <div className="actions hero-actions">
              <Link className="button button-primary-luxury" to="/auditoria">
                <span className="btn-shimmer" />
                <span className="btn-label">Solicitar Auditoría de IA Gratuita</span>
                <span className="btn-arrow">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <a 
                className="button button-whatsapp-luxury" 
                href="https://wa.me/51925475034?text=Hola%20Hazlo%20Crecer%2C%20quiero%20conocer%20c%C3%B3mo%20un%20agente%20de%20IA%20puede%20escalar%20mis%20ventas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="btn-wa-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span className="btn-wa-beacon" />
                </div>
                <div className="btn-wa-texts">
                  <strong className="btn-wa-title">Consultar por WhatsApp</strong>
                  <span className="btn-wa-sub">Agente IA activo · &lt; 5 seg</span>
                </div>
              </a>
            </div>

            {/* Badges de Confianza y Autoridad */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <span className="trust-icon">⭐</span>
                <span><strong>5.0</strong> en Google Maps Lima</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <span className="trust-icon">⚡</span>
                <span>Diagnóstico cuantitativo en <strong>3 min</strong></span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <span className="trust-icon">🔒</span>
                <span>Código y datos <strong>100% tuyos</strong></span>
              </div>
            </div>

            {/* Visual Showcase: Terminal Ejecutiva de Alta Fidelidad */}
            <div className="hero-visual-showcase">
              <div className="tech-terminal-frame open-card">
                {/* OS Header Bar */}
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="terminal-url-pill">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>hazlocrecer.pe/ecosistema-ia/core-v2.4</span>
                  </div>
                  <div className="terminal-status-pill">
                    <span className="status-dot-pulse" />
                    <span>24/7 Operativo</span>
                  </div>
                </div>

                {/* Sub-bar Navigation */}
                <div className="terminal-subbar">
                  <span className="terminal-tab active">⚡ Ecosistema Central</span>
                  <span className="terminal-tab">🤖 Agente WhatsApp Autónomo</span>
                  <span className="terminal-tab">📊 Radar de Conversión</span>
                </div>

                {/* Main Visual Display */}
                <div className="terminal-display-wrap">
                  <img 
                    src="/assets/images/hero-ai-ecosystem.jpg" 
                    alt="Ecosistema Digital y Agentes de IA en tiempo real" 
                    className="showcase-img"
                    loading="eager"
                  />
                  <div className="terminal-vignette" />

                  {/* Floating HUD Cards */}
                  <div className="terminal-hud hud-top-left">
                    <div className="hud-indicator pulse-green" />
                    <div>
                      <small>Latencia Inicial</small>
                      <strong>1.8 segundos</strong>
                    </div>
                  </div>

                  <div className="terminal-hud hud-top-right">
                    <span className="hud-badge-tag">IA QUALIFIED</span>
                    <div>
                      <small>Tasa de Precisión</small>
                      <strong className="green">94.8% en WhatsApp</strong>
                    </div>
                  </div>

                  <div className="terminal-hud hud-bottom-left">
                    <div className="hud-icon-box">💰</div>
                    <div>
                      <small>Ticket Promedio Rescatado</small>
                      <strong>+S/ 18,500 PEN / cliente</strong>
                    </div>
                  </div>

                  <div className="terminal-hud hud-bottom-right">
                    <div className="hud-icon-box">📅</div>
                    <div>
                      <small>Citas en Calendario</small>
                      <strong className="green">+14 reuniones agendadas</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS & NUMBERS BANNER */}
        <section className="metrics-banner">
          <div className="container">
            <div className="metrics-grid">
              <div className="metric-box">
                <strong className="metric-value">+145%</strong>
                <span className="metric-label">Aumento promedio en tasa de conversión web</span>
              </div>
              <div className="metric-box">
                <strong className="metric-value">&lt; 5 seg</strong>
                <span className="metric-label">Tiempo de respuesta 24/7 con Agente de WhatsApp</span>
              </div>
              <div className="metric-box">
                <strong className="metric-value">+S/ 2.4M</strong>
                <span className="metric-label">Facturación rescatada para clientes B2B en Lima</span>
              </div>
              <div className="metric-box">
                <strong className="metric-value">99.9%</strong>
                <span className="metric-label">Uptime en servidores Cloud de alta velocidad</span>
              </div>
            </div>
          </div>
        </section>

        {/* ECOSISTEMA TECNOLÓGICO: 3 Pilares Open Design */}
        <section className="section" id="ecosistema">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Arquitectura Integral</span>
              <h2>Los 3 pilares del Ecosistema Hazlo Crecer</h2>
              <p className="section-subtitle">
                Dejamos de lado las soluciones aisladas. Integramos velocidad web, inteligencia artificial autónoma y posicionamiento generativo.
              </p>
            </div>

            <div className="ecosystem-cards-grid">
              {/* Pilar 1 */}
              <div className="ecosystem-card">
                <div className="eco-badge">Pilar 01</div>
                <div className="eco-icon-wrap">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3>Desarrollo Web Ultrarrápido</h3>
                <p>
                  Construido con React y Vite de grado industrial. Carga en milisegundos, ofrece una experiencia interactiva sin fricciones y elimina la tasa de rebote móvil.
                </p>
                <ul className="eco-features">
                  <li>✓ 98+ Score en Google PageSpeed</li>
                  <li>✓ Código limpio sin plantillas pesadas</li>
                  <li>✓ Arquitectura pensada para conversión móvil</li>
                </ul>
              </div>

              {/* Pilar 2 */}
              <div className="ecosystem-card highlight">
                <div className="eco-badge highlight">Pilar 02 · Diferenciador</div>
                <div className="eco-icon-wrap">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3>Agente Autónomo de WhatsApp</h3>
                <p>
                  Atiende a tus prospectos en segundos, las 24 horas del día. Filtra clientes no calificados, responde dudas técnicas y agenda llamadas en el calendario de tu equipo.
                </p>
                <ul className="eco-features">
                  <li>✓ Calificación cuantitativa de leads</li>
                  <li>✓ Cero prospectos perdidos por lentitud</li>
                  <li>✓ Conexión con tu CRM y Google Calendar</li>
                </ul>
              </div>

              {/* Pilar 3 */}
              <div className="ecosystem-card">
                <div className="eco-badge">Pilar 03</div>
                <div className="eco-icon-wrap">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3>Posicionamiento GEO & AIO</h3>
                <p>
                  Estructuración semántica para que tu marca aparezca en las respuestas de ChatGPT, Gemini, Perplexity y las búsquedas con IA de Google.
                </p>
                <ul className="eco-features">
                  <li>✓ Captación de directores con alta intención</li>
                  <li>✓ Indexación semántica avanzada</li>
                  <li>✓ Dominio local en distritos clave de Lima</li>
                </ul>
              </div>
            </div>

            {/* Spotlight Showcase: Agente de WhatsApp con IA en Acción */}
            <div className="ecosystem-spotlight open-card">
              <div className="spotlight-grid">
                <div className="spotlight-content">
                  <span className="eyebrow">Demostración en Tiempo Real</span>
                  <h2>Tu mejor vendedor nunca duerme, no pide vacaciones y responde en 5 segundos.</h2>
                  <p>
                    Mientras tu competencia tarda horas o días en responder un correo, nuestro agente de WhatsApp califica el presupuesto del cliente, detecta su intención de compra y agenda la llamada directamente en el calendario de tu equipo de ventas.
                  </p>
                  <div className="spotlight-stats">
                    <div className="spotlight-stat-item">
                      <strong className="green">&lt; 5s</strong>
                      <span>Velocidad de primera respuesta</span>
                    </div>
                    <div className="spotlight-stat-item">
                      <strong className="green">94%</strong>
                      <span>Precisión de calificación B2B</span>
                    </div>
                    <div className="spotlight-stat-item">
                      <strong className="green">24/7</strong>
                      <span>Operatividad ininterrumpida</span>
                    </div>
                  </div>
                  <div className="spotlight-actions">
                    <Link className="button button-glow" to="/auditoria">
                      Configurar Agente para Mi Empresa
                    </Link>
                  </div>
                </div>
                <div className="spotlight-visual">
                  <img 
                    src="/assets/images/whatsapp-ai-agent.jpg" 
                    alt="Mockup de Agente de IA en WhatsApp atendiendo un cliente en tiempo real" 
                    className="spotlight-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION: Modelado de KOM y Flama */}
        <Comparison />

        {/* ROI CALCULATOR: Modelado de Staff Digital & Linklab */}
        <ROICalculator />

        {/* METODOLOGÍA CORPORATIVA: 4 Fases con Open Design */}
        <section className="section band" id="metodologia">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Metodología de Alto Rendimiento</span>
              <h2>Cómo transformamos tu presencia digital en 4 fases científicas</h2>
              <p className="section-subtitle">
                Un proceso riguroso de ingeniería comercial probado en empresas de Lima para eliminar la incertidumbre y garantizar resultados medibles.
              </p>
            </div>

            <div className="methodology-grid">
              <div className="method-step-card">
                <div className="step-num-pill">01</div>
                <h3>Auditoría Cuantitativa</h3>
                <p>
                  Radiografía matemática de tus puntos de fuga de leads, velocidad de respuesta en WhatsApp y benchmarking frente a tus rivales directos en Lima.
                </p>
                <div className="step-tag">Día 1 al 3</div>
              </div>

              <div className="method-step-card">
                <div className="step-num-pill">02</div>
                <h3>Arquitectura de Conversión</h3>
                <p>
                  Diseño de experiencia visual limpia y abierta (Open Design), copy comercial de persuasión B2B y optimización técnica para dispositivos móviles.
                </p>
                <div className="step-tag">Día 4 al 10</div>
              </div>

              <div className="method-step-card">
                <div className="step-num-pill">03</div>
                <h3>Entrenamiento de Agente IA</h3>
                <p>
                  Configuración de agentes autónomos en WhatsApp entrenados con tu conocimiento de ventas para responder, calificar y agendar citas en segundos.
                </p>
                <div className="step-tag">Día 11 al 16</div>
              </div>

              <div className="method-step-card">
                <div className="step-num-pill">04</div>
                <h3>Lanzamiento & Optimización</h3>
                <p>
                  Activación del sistema completo en infraestructura Cloud veloz, pruebas de estrés de leads y entrega de la propiedad íntegra del código y datos.
                </p>
                <div className="step-tag">Día 17 en adelante</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN AUTORIDAD & INGENIERÍA EN LIMA */}
        <section className="section band" id="nosotros">
          <div className="container">
            <div className="founders-grid">
              <div className="founders-visual open-card">
                <img 
                  src="/assets/images/ai-founders-team.jpg" 
                  alt="Equipo de fundadores e ingenieros de Hazlo Crecer en Lima" 
                  className="founders-img"
                  loading="lazy"
                />
                <div className="founders-badge">
                  <span>📍 Lima Metropolitana · Miraflores & San Isidro</span>
                </div>
              </div>
              <div className="founders-content">
                <span className="eyebrow">Ingeniería Comercial con Rostro Humano</span>
                <h2>No somos una agencia más de marketing. Somos tus socios tecnológicos en Lima.</h2>
                <p>
                  Combinamos ciencia de datos, arquitectura de software moderna y psicología de ventas para construir activos digitales que generan facturación real y predecible.
                </p>
                <div className="founders-pillars">
                  <div className="pillar-item">
                    <span className="green">✓</span>
                    <div>
                      <strong>Cero intermediarios ni becarios:</strong>
                      <small>Tu proyecto es liderado directamente por ingenieros comerciales y especialistas de software sénior.</small>
                    </div>
                  </div>
                  <div className="pillar-item">
                    <span className="green">✓</span>
                    <div>
                      <strong>Código 100% de tu propiedad:</strong>
                      <small>Nunca te cobramos licencias ocultas ni te amarramos a contratos de permanencia forzosa.</small>
                    </div>
                  </div>
                  <div className="pillar-item">
                    <span className="green">✓</span>
                    <div>
                      <strong>Garantía cuantitativa de resultados:</strong>
                      <small>Diseñamos cada embudo con métricas de conversión auditables desde la primera semana.</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES (FAQ ACORDEÓN) */}
        <section className="section" id="faq">
          <div className="container narrow">
            <div className="section-heading">
              <span className="eyebrow">Resolución de Dudas</span>
              <h2>Preguntas frecuentes de directores y gerentes</h2>
              <p className="section-subtitle">
                Todo lo que necesitas saber antes de modernizar la infraestructura comercial de tu empresa.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeFaq === index ? 'open' : ''}`}
                >
                  <button 
                    type="button" 
                    className="faq-question" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={activeFaq === index}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-toggle-icon">
                      {activeFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA: Cierre Rápido con Alta Conversión */}
        <section className="section cta-section" id="diagnostico-final">
          <div className="container">
            <div className="cta-box">
              <div className="cta-glow" />
              <div className="cta-content">
                <span className="eyebrow">Cupos Limitados por Mes</span>
                <h2>¿Listo para dejar de adivinar dónde se fugan tus ventas?</h2>
                <p className="cta-description">
                  Solicita tu diagnóstico técnico de 15 minutos o completa el formulario interactivo para proyectar el ROI exacto de tu negocio con Inteligencia Artificial.
                </p>
                <div className="actions cta-actions">
                  <Link className="button button-glow" to="/auditoria">
                    <span>Comenzar Diagnóstico IA Ahora</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link className="button ghost" to="/resultados">
                    Ver Casos de Éxito
                  </Link>
                </div>
                <div className="cta-footnote">
                  <span>Sin costo inicial · Sin contratos forzosos · 100% Confidencial</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

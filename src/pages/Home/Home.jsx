import { AuditJourney } from '../../components/AuditJourney/AuditJourney.jsx';
import { Link } from 'react-router-dom';
import { Navigation } from '../../components/Navigation/Navigation.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Arrow, Icon } from '../../components/Brand/Brand.jsx';
import { SectionHeading, FinalCTA, services } from '../../components/Marketing/Marketing.jsx';
import { PremiumHero } from '../../components/Marketing/PremiumHero.jsx';
import { Comparison } from '../../components/Comparison/Comparison.jsx';
import { ROICalculator } from '../../components/ROICalculator/ROICalculator.jsx';
import { OwnerLockscreen } from '../../components/OwnerLockscreen/OwnerLockscreen.jsx';
import { SectorLiveMetrics } from '../../components/SectorLiveMetrics/SectorLiveMetrics.jsx';
import { EcosystemDiagram } from '../../components/EcosystemDiagram/EcosystemDiagram.jsx';
import { AdmissionCriteria } from '../../components/AdmissionCriteria/AdmissionCriteria.jsx';

const faqs = [
  [
    '¿Cómo garantizan que la web y el agente realmente funcionen en teléfonos de Lima?',
    'Probamos cada desarrollo en condiciones reales de conectividad móvil (redes 4G y 3.5G de Claro, Movistar y Entel). Nuestra arquitectura en React y Cloudflare carga en menos de 1.5 segundos. Tu agente de WhatsApp responde 24/7 en menos de 60 segundos con servidores dedicados.'
  ],
  [
    '¿Qué diferencia hay entre este sistema y pagar anuncios en redes sociales?',
    'La publicidad solo envía personas a tu WhatsApp o página web. Si tu página tarda 5 segundos en cargar o nadie contesta el WhatsApp en 10 minutos, ese dinero invertido en anuncios se pierde. Nuestro sistema garantiza que cada persona interesada sea atendida de inmediato y guiada al agendamiento o cotización.'
  ],
  [
    '¿Tengo que pagar suscripciones mensuales obligatorias para mantener mi web?',
    'No. El desarrollo de la web es de tu entera propiedad (código fuente limpio, sin candados de agencias). La infraestructura base corre sobre servidores gratuitos de alto rendimiento (Cloudflare Pages) con costo S/ 0 mensual de hosting para el 99% de empresas. Solo cubres tu dominio anual y el consumo de servidores de IA si decides escalar.'
  ],
  [
    '¿Cómo se realiza el pago y la entrega?',
    'Trabajamos con contrato formal y facturación con RUC en Lima, Perú. 50% de anticipo al iniciar y 50% contra entrega y validación en tu propio dominio. Plazo de entrega garantizado de 10 a 14 días hábiles.'
  ],
  [
    '¿Mi personal necesita conocimientos técnicos para usarlo?',
    'Ninguno. Las citas se sincronizan automáticamente con el Google Calendar que ya usas en tu teléfono, y las consultas quedan registradas en WhatsApp. Tu equipo solo atiende a los clientes que ya están calificados y listos para pagar.'
  ]
];

export function Home() {
  return (
    <>
      <Navigation />
      <main id="contenido">
        {/* Hero de Alta Conversión con Simulador de WhatsApp Interactivo */}
        <PremiumHero />

        {/* Criterios de Admisión y Filtro de Clientes Serios */}
        <AdmissionCriteria />

        {/* Calculadora Interactiva de Retorno de Inversión (ROI) */}
        <ROICalculator />

        {/* Tabla Comparativa: Tradicional vs Hazlo Crecer */}
        <Comparison />

        {/* Diagrama de Ecosistema Integrado */}
        <EcosystemDiagram />

        {/* Servicios Conectados */}
        <section className="section" id="servicios">
          <div className="container">
            <SectionHeading
              eyebrow="INFRAESTRUCTURA COMPLETA"
              title={<>Las 4 piezas correctas.<br />Cerrando ventas en automático.</>}
              description="Tu negocio en Lima no necesita más teoría ni folletos mudos. Necesita un recorrido veloz que convierta visitas en dinero en caja."
            />
            <div className="services-grid">
              {services.map(s => (
                <Link to={'/servicios#' + s.id} className="service-card" key={s.id}>
                  <div className="card-top">
                    <span className="icon-box"><Icon type={s.icon} /></span>
                    <span className="index-number">{s.number}</span>
                  </div>
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  {s.items && (
                    <ul className="service-card-bullets">
                      {s.items.map(item => (
                        <li key={item}>
                          <Icon type="check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="card-link">Conocer detalles técnicos <Arrow diagonal /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Lockscreen Notifications Widget: Paz mental operativa */}
        <OwnerLockscreen />

        {/* Método y Transparencia */}
        <AuditJourney />

        {/* Sectores Clave en Lima con soluciones empaquetadas */}
        <section className="section sectors-feature">
          <div className="container sectors-feature-grid">
            <div className="sector-metrics-wrap">
              <SectorLiveMetrics />
            </div>
            <div className="sector-content">
              <span className="kicker">ESPECIALIZACIÓN VERTICAL</span>
              <h2>Cada industria en Lima<br />tiene su propio cuello de botella.</h2>
              <p>
                No aplicamos plantillas genéricas. Diseñamos la lógica comercial que resuelve la fricción exacta de tu sector:
              </p>

              <div className="sector-cards-mini">
                <Link to="/resultados#clinica-dental" className="sector-mini-card">
                  <div className="sector-mini-header">
                    <strong>🩺 Salud y Clínicas Médicas</strong>
                    <span className="sector-mini-badge">-76% Ausencias</span>
                  </div>
                  <p>Recordatorios automáticos en WhatsApp y agenda 24/7 sin saturar recepción ni perder citas.</p>
                </Link>

                <Link to="/resultados#servicios-b2b" className="sector-mini-card">
                  <div className="sector-mini-header">
                    <strong>⚙️ Equipamiento y B2B</strong>
                    <span className="sector-mini-badge">Filtro RUC</span>
                  </div>
                  <p>Cotizaciones técnicas el mismo día con verificación de RUC empresarial y distrito.</p>
                </Link>

                <Link to="/resultados#estudio-profesional" className="sector-mini-card">
                  <div className="sector-mini-header">
                    <strong>⚖️ Estudios Profesionales</strong>
                    <span className="sector-mini-badge">Cobro Previo</span>
                  </div>
                  <p>Filtro de consultas informales y reserva con pago previo de la primera sesión estratégica.</p>
                </Link>
              </div>

              <div style={{ marginTop: '20px' }}>
                <Link to="/resultados" className="button">
                  Ver arquitecturas completas <Arrow diagonal />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes Comerciales */}
        <section className="section faq-section">
          <div className="container faq-grid">
            <SectionHeading
              eyebrow="RESPUESTAS CLARAS"
              title={<>Todo lo que necesitas saber<br />antes de comenzar.</>}
              description="Transparencia absoluta. Si tienes dudas adicionales, puedes escribirnos directamente por WhatsApp."
            />
            <div className="faq-list">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}<span aria-hidden="true">+</span></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

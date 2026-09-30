import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../../components/Navigation/Navigation.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';

const CASE_STUDIES = [
  {
    id: 'lexispartners',
    name: 'LexisPartners',
    category: 'legal',
    categoryName: 'Legal & B2B',
    image: 'asistente-legal-lexispartners.webp',
    metric: '+245%',
    metricLabel: 'Leads calificados por mes',
    problem: 'Pérdida de consultas jurídicas de alto valor durante las noches y fines de semana por falta de atención inmediata.',
    solution: 'Agente autónomo de IA en WhatsApp especializado en derecho societario y laboral que filtra casos y agenda consultas directamente.',
    roiTimeline: 'Retorno de inversión logrado en 22 días'
  },
  {
    id: 'smiletech',
    name: 'Clínica SmileTech',
    category: 'salud',
    categoryName: 'Salud & Odontología',
    image: 'clinica-smiletech.webp',
    metric: '+120%',
    metricLabel: 'Citas agendadas sin intervención humana',
    problem: 'Recepción colapsada por llamadas repetitivas de cotización de brackets e implantes con alta tasa de inasistencia.',
    solution: 'Ecosistema web de carga instantánea sincronizado con asistente de WhatsApp que envía recordatorios automáticos y cobra reservas.',
    roiTimeline: 'Cero ausentismo y reducción del 60% en carga operativa'
  },
  {
    id: 'aquabuild',
    name: 'Servicios AquaBuild',
    category: 'servicios',
    categoryName: 'Construcción & Piscinas',
    image: 'cotizador-servicios-aquabuild.webp',
    metric: 'x3',
    metricLabel: 'Multiplicador de cotizaciones cerradas',
    problem: 'Tiempos de entrega de presupuestos de más de 48 horas debido a cálculos manuales de metraje y materiales.',
    solution: 'Cotizador web paramétrico inteligente con IA que entrega una estimación precisa en 45 segundos y notifica al asesor técnico.',
    roiTimeline: 'Ticket promedio elevado en un 35%'
  },
  {
    id: 'horizonte',
    name: 'Horizonte Inmobiliaria',
    category: 'inmobiliaria',
    categoryName: 'Bienes Raíces & Desarrollos',
    image: 'visualizacion-inmobiliaria-horizonte.webp',
    metric: '+210%',
    metricLabel: 'Visitas a proyectos inmobiliarios',
    problem: 'Leads fríos provenientes de pauta en Meta que no respondían correos ni llamadas en horario de oficina.',
    solution: 'Calificación automática de presupuesto y capacidad crediticia en los primeros 60 segundos vía WhatsApp con catálogo interactivo.',
    roiTimeline: 'Cierre de 4 departamentos en el primer mes de despliegue'
  },
  {
    id: 'gastronova',
    name: 'GastroNova',
    category: 'servicios',
    categoryName: 'Gastronomía & Eventos',
    image: 'reservas-restaurante-gastronova.webp',
    metric: '+30%',
    metricLabel: 'Ocupación de mesas en días de baja demanda',
    problem: 'Mesas vacías de lunes a jueves y saturación telefónica caótica los viernes y sábados por la noche.',
    solution: 'Asistente de reservas dinámicas con ofertas inteligentes según ocupación en tiempo real y confirmación instantánea.',
    roiTimeline: 'Incremento sostenido del ticket promedio por comensal'
  },
  {
    id: 'nexus',
    name: 'Consultoría B2B Nexus',
    category: 'legal',
    categoryName: 'Consultoría Empresarial',
    image: 'dashboard-analitica-ia.webp',
    metric: '+210%',
    metricLabel: 'Reuniones estratégicas agendadas',
    problem: 'Directores y gerentes de empresas no completaban los extensos formularios tradicionales de prospección.',
    solution: 'Formulario modular por pasos con cálculo interactivo de ROI y seguimiento conversacional automatizado.',
    roiTimeline: 'Tasa de conversión de visita a reunión del 18.4%'
  }
];

export function Resultados() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCases = activeCategory === 'all' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(c => c.category === activeCategory);

  return (
    <div className="page-wrapper">
      <Navigation />
      
      <main>
        {/* HERO COMPACTO OPEN DESIGN */}
        <section className="hero compact">
          <div className="hero-glow-bg" />
          <div className="container hero-content">
            <span className="eyebrow live-eyebrow">
              <span className="status-dot-pulse" />
              Métricas Reales · Resultados Auditables
            </span>
            <h1 className="hero-title">
              No mostramos diseños bonitos.<br />
              <span className="gradient-text">Mostramos retorno de inversión medible.</span>
            </h1>
            <p className="hero-description">
              Explora cómo empresas peruanas de diversos sectores sustituyeron páginas web obsoletas por ecosistemas de conversión con Inteligencia Artificial.
            </p>

            {/* Micro Stats Bar */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <span className="trust-icon">📈</span>
                <span><strong>+180%</strong> Promedio de aumento en captación</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <span className="trust-icon">⏱️</span>
                <span>Tiempo de implementación: <strong>14 a 21 días</strong></span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <span className="trust-icon">💼</span>
                <span>Enfoque en <strong>Tickets Altos B2B</strong></span>
              </div>
            </div>
          </div>
        </section>

        {/* CASOS DE ESTUDIO CON FILTRADO INTERACTIVO */}
        <section className="section">
          <div className="container">
            {/* Filtros por Categoría */}
            <div className="results-filter-bar">
              <button 
                type="button" 
                className={`filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                Todos los Casos ({CASE_STUDIES.length})
              </button>
              <button 
                type="button" 
                className={`filter-pill ${activeCategory === 'legal' ? 'active' : ''}`}
                onClick={() => setActiveCategory('legal')}
              >
                Legal & B2B
              </button>
              <button 
                type="button" 
                className={`filter-pill ${activeCategory === 'salud' ? 'active' : ''}`}
                onClick={() => setActiveCategory('salud')}
              >
                Salud & Clínicas
              </button>
              <button 
                type="button" 
                className={`filter-pill ${activeCategory === 'inmobiliaria' ? 'active' : ''}`}
                onClick={() => setActiveCategory('inmobiliaria')}
              >
                Inmobiliarias
              </button>
              <button 
                type="button" 
                className={`filter-pill ${activeCategory === 'servicios' ? 'active' : ''}`}
                onClick={() => setActiveCategory('servicios')}
              >
                Servicios & Comercio
              </button>
            </div>

            {/* Grid de Casos Open Design */}
            <div className="cases-grid">
              {filteredCases.map(item => (
                <article className="case-card open-card" key={item.id}>
                  <div className="case-image-wrap">
                    <img 
                      src={`/assets/images/${item.image}`} 
                      alt={`Mockup de caso ${item.name}`} 
                      loading="lazy"
                    />
                    <div className="case-overlay-badge">
                      <span className="badge-category">{item.categoryName}</span>
                      <span className="badge-metric">{item.metric}</span>
                    </div>
                  </div>

                  <div className="case-body">
                    <div className="case-header">
                      <h3>{item.name}</h3>
                      <span className="metric-sublabel">{item.metricLabel}</span>
                    </div>

                    <div className="case-details">
                      <div className="case-point">
                        <strong className="point-title danger">⚠️ Desafío previo:</strong>
                        <p>{item.problem}</p>
                      </div>

                      <div className="case-point">
                        <strong className="point-title success">✓ Solución con Agente IA:</strong>
                        <p>{item.solution}</p>
                      </div>
                    </div>

                    <div className="case-footer">
                      <span className="roi-timeline">{item.roiTimeline}</span>
                      <Link className="case-cta-link" to="/auditoria">
                        <span>Ver diagnóstico similar</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL / SOCIAL PROOF CALLOUT */}
        <section className="section band">
          <div className="container narrow">
            <div className="testimonial-banner">
              <div className="quote-mark">“</div>
              <blockquote className="testimonial-quote">
                “Antes gastábamos miles de dólares en anuncios de Google y la mitad de los prospectos se perdían porque el equipo comercial no daba abasto para responder en menos de una hora. El Agente de WhatsApp de Hazlo Crecer ahora atiende en 5 segundos y nos deja en el calendario únicamente a los clientes que tienen presupuesto real.”
              </blockquote>
              <div className="testimonial-author">
                <div className="author-info">
                  <strong>Director Comercial</strong>
                  <span>Firma de Consultoría Corporativa en San Isidro, Lima</span>
                </div>
                <div className="author-rating">
                  ⭐⭐⭐⭐⭐ <span>Calificación 5.0</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-box">
              <div className="cta-glow" />
              <div className="cta-content">
                <span className="eyebrow">Diagnóstico Personalizado</span>
                <h2>Tu empresa también puede convertirse en un sistema predecible.</h2>
                <p className="cta-description">
                  Solicita una auditoría cuantitativa sin costo para proyectar los resultados exactos que un Ecosistema de IA puede generar en tu nicho.
                </p>
                <div className="actions cta-actions">
                  <Link className="button button-glow" to="/auditoria">
                    <span>Solicitar Mi Auditoría de IA</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a 
                    className="button ghost"
                    href="https://wa.me/51925475034?text=Hola%20Hazlo%20Crecer%2C%20estuve%20viendo%20sus%20casos%20de%20%C3%A9xito%20y%20quiero%20conocer%20c%C3%B3mo%20aplicarlo%20a%20mi%20empresa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hablar con un Especialista
                  </a>
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

import { Link } from 'react-router-dom';
import { Navigation } from '../../components/Navigation/Navigation.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Arrow, Icon } from '../../components/Brand/Brand.jsx';
import { PageIntro, FinalCTA } from '../../components/Marketing/Marketing.jsx';
import './resultados.css';

const blueprints = [
  {
    id: 'clinica-dental',
    sector: 'Salud y Clínicas Médicas',
    distrito: 'San Isidro / San Borja',
    title: 'De 3 horas de espera en WhatsApp a citas agendadas en 40 segundos',
    problem: '45 consultas diarias en WhatsApp; la recepcionista cobraba en caja y tardaba horas en contestar preguntas de precios. Además, el 34% de los pacientes agendados no se presentaban a su cita.',
    solution: 'Web ultrarrápida mobile-first conectada a un Agente de WhatsApp que clasifica el motivo de consulta (urgencia dental, ortodoncia o estética) y agenda directamente en calendario disponible, enviando confirmaciones automáticas.',
    metrics: [
      { label: 'Tiempo de respuesta', value: '35 seg', sub: 'Antes: 2.5 a 3 horas' },
      { label: 'Tasa de inasistencia (No-shows)', value: '8%', sub: 'Antes: 34%' },
      { label: 'Citas mensuales confirmadas', value: '+45%', sub: 'Sin contratar más personal' }
    ]
  },
  {
    id: 'servicios-b2b',
    sector: 'Servicios Industriales y Equipamiento B2B',
    distrito: 'Ate / Cercado de Lima',
    title: 'Filtro automático con RUC de empresa y fichas técnicas al instante',
    problem: 'Un formulario web tradicional con 8 campos que nadie llenaba. Los pocos que llamaban no daban especificaciones técnicas, obligando a cruzar 4 o 5 correos antes de poder emitir una cotización.',
    solution: 'Botón inteligente de cotización B2B guiado en WhatsApp. El agente solicita el RUC de la empresa solicitante, valida la partida distrital y recibe las fotos del requerimiento en un solo flujo ordenado.',
    metrics: [
      { label: 'Tiempo para cotizar', value: '4 horas', sub: 'Antes: 3 días hábiles' },
      { label: 'Leads con RUC verificado', value: '100%', sub: 'Cero prospectos informales' },
      { label: 'Tasa de cierre comercial', value: '28%', sub: 'Respuesta en el mismo día' }
    ]
  },
  {
    id: 'estudio-profesional',
    sector: 'Estudio Jurídico y Tributario',
    distrito: 'Miraflores / San Isidro',
    title: 'Filtro de consultas informales y cobro previo de primera sesión estratégica',
    problem: 'El socio director perdía 15 horas semanales respondiendo llamadas de prospectos que solo buscaban "asesoría gratuita" y no tenían presupuesto para contratar al estudio.',
    solution: 'Embudo de calificación legal: el agente evalúa la materia del caso (laboral, tributario o corporativo) y habilita el pago de la consulta inicial antes de bloquear el espacio en la agenda del abogado.',
    metrics: [
      { label: 'Horas improductivas ahorradas', value: '14 hrs/sem', sub: 'Filtro 100% automático' },
      { label: 'Conversión a contrato recurrente', value: '42%', sub: 'Clientes altamente calificados' },
      { label: 'Cobro de consultas previas', value: 'S/ 350', sub: 'Por sesión estratégica' }
    ]
  }
];

export function Resultados() {
  return (
    <>
      <Navigation />
      <main id="contenido">
        <PageIntro
          eyebrow="ARQUITECTURAS COMERCIALES PROBADAS"
          title={<>Sistemas diseñados para resolver<br />cuellos de botella en Lima.</>}
          description="Así es como nuestras soluciones de Web Ultrarrápida + Agentes de WhatsApp transforman la atención comercial y aumentan la facturación en negocios locales."
        />

        <section className="section">
          <div className="container">
            <div className="blueprints-stack">
              {blueprints.map(b => (
                <article className="blueprint-card" key={b.id}>
                  <div className="blueprint-header">
                    <div>
                      <span className="blueprint-tag">{b.sector} · {b.distrito}</span>
                      <h2>{b.title}</h2>
                    </div>
                  </div>

                  <div className="blueprint-body">
                    <div className="blueprint-text-col">
                      <div className="blueprint-block">
                        <strong>❌ El problema habitual en Lima:</strong>
                        <p>{b.problem}</p>
                      </div>
                      <div className="blueprint-block">
                        <strong>⚡ La solución Hazlo Crecer:</strong>
                        <p>{b.solution}</p>
                      </div>
                    </div>

                    <div className="blueprint-metrics-col">
                      <span className="metrics-eyebrow">Impacto Cuantitativo</span>
                      <div className="metrics-grid">
                        {b.metrics.map(m => (
                          <div className="metric-box" key={m.label}>
                            <span className="metric-val">{m.value}</span>
                            <strong className="metric-lbl">{m.label}</strong>
                            <small className="metric-sub">{m.sub}</small>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="blueprint-footer">
                    <Link to={`/auditoria?rubro=${encodeURIComponent(b.sector)}`} className="button">
                      Quiero este sistema para mi negocio <Arrow diagonal />
                    </Link>
                  </div>
                </article>
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

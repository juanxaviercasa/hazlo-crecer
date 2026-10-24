import { Link } from 'react-router-dom';
import { Navigation } from '../../components/Navigation/Navigation.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Icon, Arrow } from '../../components/Brand/Brand.jsx';
import { PageIntro, FinalCTA, services } from '../../components/Marketing/Marketing.jsx';
import { EcosystemDiagram } from '../../components/EcosystemDiagram/EcosystemDiagram.jsx';

export function Servicios() {
  return (
    <>
      <Navigation />
      <main id="contenido">
        <PageIntro
          eyebrow="INGENIERÍA DIGITAL & AUTOMATIZACIÓN"
          title={<>Infraestructura comercial<br />diseñada para vender.</>}
          description="Webs ultrarrápidas en React, agentes inteligentes para WhatsApp y automatización de agendas. Entregables con presupuesto cerrado, sin mensualidades forzosas y con facturación formal en Lima."
        />

        <div className="container">
          <EcosystemDiagram />
        </div>

        <section className="section">
          <div className="container service-detail-list">
            {services.map(s => (
              <article className="service-detail" id={s.id} key={s.id}>
                <div className="service-detail-number">
                  <span>{s.number}</span>
                  <Icon type={s.icon} />
                </div>
                <div>
                  <span className="kicker">{s.short}</span>
                  <h2>{s.name}</h2>
                  <p>{s.text}</p>
                </div>
                <div>
                  <ul className="check-list">
                    {s.items.map(item => (
                      <li key={item}>
                        <Icon type="check" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/auditoria" className="text-link">
                    Evaluar elegibilidad para este servicio <Arrow diagonal />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section soft-band">
          <div className="container two-column">
            <div>
              <span className="kicker">PRESUPUESTO CERRADO Y TRANSPARENTE</span>
              <h2>Sin costos ocultos ni contratos de atadura.</h2>
            </div>
            <div>
              <p>
                La sesión técnica de diagnóstico comercial se reserva para empresas que cumplen los criterios de elegibilidad (flujo activo de consultas o ticket mayor a S/ 800 en Lima).
              </p>
              <p>
                La implementación incluye entregables específicos, cronograma cerrado (10 a 14 días), código 100% de tu propiedad y Factura electrónica con RUC para tu empresa en Perú.
              </p>
              <Link to="/auditoria" className="button">
                Evaluar elegibilidad de mi negocio <Arrow />
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

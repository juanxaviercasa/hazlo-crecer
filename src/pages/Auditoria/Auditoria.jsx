import { whatsappLink } from '../../services/contact.js';
import { Navigation } from '../../components/Navigation/Navigation.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Icon } from '../../components/Brand/Brand.jsx';
import { QualificationTriage } from '../../components/QualificationTriage/QualificationTriage.jsx';
import { AdmissionCriteria } from '../../components/AdmissionCriteria/AdmissionCriteria.jsx';

export function Auditoria() {
  return (
    <>
      <Navigation />
      <main id="contenido" className="audit-page">
        <div className="container audit-layout">
          <div className="audit-copy">
            <span className="kicker">EVALUACIÓN DE ELEGIBILIDAD & ARQUITECTURA COMERCIAL</span>
            <h1>
              Descubre dónde se están<br />
              <span>escapando tus clientes.</span>
            </h1>
            <p>
              No ofrecemos auditorías masivas a cualquier negocio. Evaluamos si tu clínica o empresa en Lima cumple con los requisitos de volumen y ticket para garantizar un retorno de inversión real antes de asignar una sesión de arquitectura 1-a-1.
            </p>

            <div className="audit-deliverables">
              <h2>Qué evaluamos en negocios calificados:</h2>
              <ul className="check-list">
                {[
                  'Detección de puntos de fuga en WhatsApp y cálculo en Soles de ventas perdidas',
                  'Auditoría técnica de velocidad en redes móviles 4G de Lima frente a tus competidores',
                  'Propuesta de arquitectura comercial integrada con presupuesto cerrado y sin costos ocultos'
                ].map(t => (
                  <li key={t}>
                    <Icon type="check" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Criterios de Selección en lugar de imagen decorativa abstracta */}
            <AdmissionCriteria />

            <div className="audit-note">
              <Icon type="shield" />
              <p>
                Si tu negocio califica, la sesión técnica de 20 minutos no tiene costo. La implementación se cotiza con entregables cerrados (10 a 14 días) y facturación formal con RUC.
              </p>
            </div>

            <a
              className="text-link"
              href={whatsappLink('Hola Hazlo Crecer, quisiera consultar directamente si mi negocio califica para la sesión de arquitectura comercial.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              ¿Prefieres consultar directamente? Escríbenos por WhatsApp.
            </a>
          </div>

          <div className="audit-form-wrap">
            <QualificationTriage />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

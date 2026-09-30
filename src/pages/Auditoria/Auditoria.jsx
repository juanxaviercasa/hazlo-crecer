import { Navigation } from '../../components/Navigation/Navigation.jsx';
import { AuditForm } from '../../components/AuditForm/AuditForm.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';

export function Auditoria() {
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
              Cupos Limitados · Máximo 5 Empresas por Mes en Lima
            </span>
            <h1 className="hero-title">
              Solicita tu Auditoría de <span className="gradient-text">Inteligencia Artificial y Conversión.</span>
            </h1>
            <p className="hero-description">
              Completa este diagnóstico interactivo en menos de 3 minutos para descubrir con exactitud matemática dónde se fugan tus ventas y qué automatizar primero.
            </p>
          </div>
        </section>

        {/* CONTENEDOR AUDITORÍA (2 COLUMNAS OPEN DESIGN) */}
        <section className="section audit-section">
          <div className="container">
            <div className="audit-grid-layout">
              {/* Columna Izquierda: Tarjeta de Autoridad y Qué Obtienes */}
              <div className="audit-sidebar open-card">
                <div className="sidebar-image-wrap">
                  <img 
                    src="/assets/images/ai-diagnostic-engine.jpg" 
                    alt="Estación de diagnóstico cuantitativo con Inteligencia Artificial" 
                    className="sidebar-bg-img"
                  />
                  <div className="sidebar-img-gradient" />
                </div>

                <div className="sidebar-content">
                  <div className="sidebar-badge">
                    <span className="eyebrow">Diagnóstico B2B Cuantitativo</span>
                  </div>

                  <h2 className="sidebar-title">
                    Un diagnóstico basado en tus números reales, no en promesas vacías.
                  </h2>

                  <p className="sidebar-desc">
                    No te daremos consejos genéricos de marketing. Analizaremos tu modelo comercial para entregarte una hoja de ruta con retornos proyectables.
                  </p>

                  <div className="audit-deliverables-list">
                    <div className="deliverable-item">
                      <div className="deliverable-icon">✓</div>
                      <div>
                        <strong>Detección de Fugas de Leads</strong>
                        <small>Descubre cuántos prospectos abandonan tu web o WhatsApp sin ser atendidos a tiempo.</small>
                      </div>
                    </div>

                    <div className="deliverable-item">
                      <div className="deliverable-icon">✓</div>
                      <div>
                        <strong>Simulación de tu Agente de IA</strong>
                        <small>Diseñaremos la lógica y el flujo exacto con el que la IA calificará a tus clientes ideales 24/7.</small>
                      </div>
                    </div>

                    <div className="deliverable-item">
                      <div className="deliverable-icon">✓</div>
                      <div>
                        <strong>Proyección de Retorno (ROI)</strong>
                        <small>Un cálculo claro de la facturación adicional estimada que el sistema generará cada mes.</small>
                      </div>
                    </div>
                  </div>

                  {/* Garantía de Privacidad */}
                  <div className="audit-guarantee-card">
                    <div className="guarantee-header">
                      <span className="shield-icon">🛡️</span>
                      <strong>Garantía Hazlo Crecer</strong>
                    </div>
                    <p>
                      100% Confidencial. Sin contratos forzosos ni llamadas de presión comercial. Solo ingeniería comercial y datos medibles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Formulario por Pasos */}
              <div className="audit-form-container">
                <AuditForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

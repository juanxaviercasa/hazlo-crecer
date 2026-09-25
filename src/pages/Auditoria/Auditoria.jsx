import { Navigation } from '../../components/Navigation/Navigation.jsx';
import { AuditForm } from '../../components/AuditForm/AuditForm.jsx';

export function Auditoria() {
  return (
    <>
      <Navigation />
      <main>
        <section className="hero compact">
          <div className="container">
            <span className="eyebrow">Cupos limitados · 5 proyectos por mes en Lima</span>
            <h1>
              Solicita tu Auditoría de <span>Inteligencia Artificial y Conversión.</span>
            </h1>
            <p>
              Completa este diagnóstico interactivo para descubrir con exactitud dónde se fugan tus ventas y qué automatizar primero en tu empresa.
            </p>
          </div>
        </section>

        <section className="section audit-layout">
          <div className="container">
            <div className="audit-intro" style={{ position: 'relative', overflow: 'hidden', borderRadius: '18px', border: '1px solid var(--line)', background: '#0e1812', padding: '32px' }}>
              <img 
                src="/assets/images/hero-auditoria-ia.webp" 
                alt="Equipo analizando datos de crecimiento" 
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18, pointerEvents: 'none' }}
              />
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <div>
                  <span className="eyebrow" style={{ background: '#12301c' }}>Diagnóstico B2B Cuantitativo</span>
                  <h2 style={{ margin: '14px 0 10px', fontSize: '28px', fontFamily: 'Space Grotesk, sans-serif' }}>
                    Un diagnóstico basado en tus números reales.
                  </h2>
                  <p style={{ color: 'var(--muted)', lineHeight: '1.7', margin: 0, fontSize: '14px' }}>
                    No te daremos consejos genéricos de marketing. Analizaremos tu modelo comercial para entregarte una hoja de ruta con retornos proyectables.
                  </p>
                </div>

                <div style={{ display: 'grid', gap: '14px', borderTop: '1px solid #1c2b21', paddingTop: '20px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--green)', fontSize: '18px', lineHeight: '1' }}>✓</span>
                    <div>
                      <strong style={{ fontSize: '14px', display: 'block', color: 'var(--text)' }}>Detección de Fugas de Leads</strong>
                      <small style={{ color: 'var(--muted)', fontSize: '12.5px', lineHeight: '1.5' }}>Descubre cuántos prospectos abandonan tu web o WhatsApp sin ser atendidos.</small>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--green)', fontSize: '18px', lineHeight: '1' }}>✓</span>
                    <div>
                      <strong style={{ fontSize: '14px', display: 'block', color: 'var(--text)' }}>Simulación de tu Agente de IA</strong>
                      <small style={{ color: 'var(--muted)', fontSize: '12.5px', lineHeight: '1.5' }}>Diseñaremos el flujo exacto con el que la IA calificará a tus clientes ideales 24/7.</small>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--green)', fontSize: '18px', lineHeight: '1' }}>✓</span>
                    <div>
                      <strong style={{ fontSize: '14px', display: 'block', color: 'var(--text)' }}>Proyección de Retorno (ROI)</strong>
                      <small style={{ color: 'var(--muted)', fontSize: '12.5px', lineHeight: '1.5' }}>Un cálculo claro de la facturación adicional que el sistema puede generar cada mes.</small>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#09120c', border: '1px solid #1a3020', borderRadius: '12px', padding: '16px', marginTop: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }}></span>
                    <strong style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--green)' }}>Garantía Hazlo Crecer</strong>
                  </div>
                  <p style={{ margin: 0, fontSize: '12px', color: 'var(--muted)', lineHeight: '1.6' }}>
                    100% Confidencial. Sin contratos forzosos ni presiones de venta. Solo datos e ingeniería comercial.
                  </p>
                </div>
              </div>
            </div>

            <AuditForm />
          </div>
        </section>
      </main>
    </>
  );
}

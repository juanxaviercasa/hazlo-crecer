import { Link } from 'react-router-dom';
import { Navigation } from '../../components/Navigation/Navigation.jsx';
import { ROICalculator } from '../../components/ROICalculator/ROICalculator.jsx';
import { Comparison } from '../../components/Comparison/Comparison.jsx';

export function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* HERO SECTION: Modelado de Flama Creators (Energía, IA, Diferenciación Radical) */}
        <section className="hero">
          <div className="container">
            <span className="eyebrow">Ecosistemas Digitales · Agentes de IA · Conversión Predecible</span>
            <h1>
              Tu competencia sigue haciendo páginas web estáticas. Nosotros creamos <span>máquinas de venta con IA.</span>
            </h1>
            <p>
              Diseñamos ecosistemas digitales B2B de alto impacto: desarrollo web ultrarrápido, agentes inteligentes que atienden y califican leads en segundos, y sistemas de captación predecibles.
            </p>
            <div className="actions">
              <Link className="button" to="/auditoria">
                Solicitar Auditoría de IA Gratuita
              </Link>
              <a 
                className="button ghost" 
                href="https://wa.me/51981808180?text=Hola%20Hazlo%20Crecer%2C%20quiero%20conocer%20c%C3%B3mo%20un%20agente%20de%20IA%20puede%20escalar%20mis%20ventas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablar por WhatsApp
              </a>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '24px', color: 'var(--muted)', fontSize: '12px' }}>
              <span>⭐ 5.0 en Google Maps</span>
              <span>⚡ Diagnóstico cuantitativo en 3 min</span>
              <span>🔒 Código 100% de tu propiedad</span>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION: Modelado de KOM y Flama Creators (Transparencia vs Tradición) */}
        <Comparison />

        {/* ROI CALCULATOR: Modelado de Staff Digital & Linklab (Impacto Financiero B2B) */}
        <ROICalculator />

        {/* METODOLOGÍA CORPORATIVA: Modelado de Staff Digital y Linklab (4 Fases Científicas) */}
        <section className="section band" id="metodologia">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Metodología de Alto Rendimiento</span>
              <h2>Cómo transformamos tu presencia digital en 4 fases</h2>
              <p style={{ maxWidth: '600px', margin: '12px auto 0', color: 'var(--muted)', lineHeight: '1.7' }}>
                Un proceso riguroso de ingeniería comercial probado en empresas de Lima para eliminar la incertidumbre.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '40px' }}>
              <div style={{ border: '1px solid var(--line)', background: 'var(--panel)', padding: '24px', borderRadius: '14px' }}>
                <span style={{ color: 'var(--green)', fontSize: '24px', fontWeight: '800' }}>01</span>
                <h3 style={{ margin: '12px 0 8px', fontSize: '18px' }}>Auditoría Cuantitativa</h3>
                <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                  Radiografía matemática de tus puntos de fuga de leads, tiempo de respuesta y posicionamiento frente a tus rivales en Lima.
                </p>
              </div>

              <div style={{ border: '1px solid var(--line)', background: 'var(--panel)', padding: '24px', borderRadius: '14px' }}>
                <span style={{ color: 'var(--green)', fontSize: '24px', fontWeight: '800' }}>02</span>
                <h3 style={{ margin: '12px 0 8px', fontSize: '18px' }}>Arquitectura de Conversión</h3>
                <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                  Diseño UX/UI a medida pensado para móvil, copy persuasivo de alto impacto y optimización para motores de IA (GEO).
                </p>
              </div>

              <div style={{ border: '1px solid var(--line)', background: 'var(--panel)', padding: '24px', borderRadius: '14px' }}>
                <span style={{ color: 'var(--green)', fontSize: '24px', fontWeight: '800' }}>03</span>
                <h3 style={{ margin: '12px 0 8px', fontSize: '18px' }}>Agentes de IA y Flujos</h3>
                <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                  Configuración de agentes autónomos en WhatsApp que responden, filtran y agendan llamadas con prospectos calificados en segundos.
                </p>
              </div>

              <div style={{ border: '1px solid var(--line)', background: 'var(--panel)', padding: '24px', borderRadius: '14px' }}>
                <span style={{ color: 'var(--green)', fontSize: '24px', fontWeight: '800' }}>04</span>
                <h3 style={{ margin: '12px 0 8px', fontSize: '18px' }}>Lanzamiento y Tráfico</h3>
                <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                  Activación del sistema completo en infraestructura Cloud veloz, sin ataduras a contratos forzosos ni comisiones ocultas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA: Modelado de TalentuPerú & Cybernova (Cierre Rápido y Directo) */}
        <section className="section" id="diagnostico-final">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Cupos Limitados por Mes</span>
              <h2>¿Listo para dejar de adivinar dónde se fugan tus ventas?</h2>
              <p style={{ maxWidth: '580px', margin: '14px auto 28px', color: 'var(--muted)', lineHeight: '1.7' }}>
                Agenda tu diagnóstico de 15 minutos o completa el formulario interactivo para obtener tu proyección cuantitativa.
              </p>
              <div className="actions">
                <Link className="button" to="/auditoria">
                  Comenzar Diagnóstico IA Ahora
                </Link>
                <Link className="button ghost" to="/resultados">
                  Ver Casos de Éxito
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

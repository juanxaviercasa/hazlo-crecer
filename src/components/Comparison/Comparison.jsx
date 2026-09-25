import { motion } from 'framer-motion';

export function Comparison() {
  const points = [
    {
      feature: 'Enfoque Principal',
      traditional: 'Diseño visual estático ("folleto digital")',
      hazloCrecer: 'Ecosistema de captación y conversión predecible con IA'
    },
    {
      feature: 'Atención al Cliente',
      traditional: 'Formulario pasivo que nadie revisa a tiempo',
      hazloCrecer: 'Agente autónomo de WhatsApp que califica y agenda en 5 seg'
    },
    {
      feature: 'Propiedad del Código',
      traditional: 'Atrapado en plataformas cerradas o plantillas con "candado"',
      hazloCrecer: 'Código y base de datos 100% tuyos (React + PocketBase)'
    },
    {
      feature: 'Posicionamiento y Tráfico',
      traditional: 'SEO básico anticuado (solo meta tags)',
      hazloCrecer: 'GEO + AIO (Optimizado para que Google, Gemini y ChatGPT te recomienden)'
    },
    {
      feature: 'Transparencia de Costos',
      traditional: 'Letras chicas, cobros sorpresa por cambios menores',
      hazloCrecer: 'Propuestas de inversión claras, sin contratos forzosos'
    }
  ];

  return (
    <section className="section band" id="comparativa">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Ingeniería vs. Tradición</span>
          <h2>¿Por qué las webs tradicionales ya no venden en Lima?</h2>
          <p style={{ maxWidth: '640px', margin: '14px auto 0', color: 'var(--muted)', lineHeight: '1.7' }}>
            Tu competencia sigue pagando por páginas web que funcionan como tarjetas de presentación muertas. 
            Nosotros construimos infraestructuras comerciales activas.
          </p>
        </div>

        <div className="comparison-table-wrapper" style={{ marginTop: '42px', overflowX: 'auto' }}>
          <table className="comparison-table" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line)', background: 'var(--panel)' }}>
            <thead>
              <tr style={{ background: '#111a14', textAlign: 'left' }}>
                <th style={{ padding: '18px 22px', borderBottom: '1px solid var(--line)', color: 'var(--muted)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Criterio</th>
                <th style={{ padding: '18px 22px', borderBottom: '1px solid var(--line)', color: '#ff9d72', fontSize: '14px', width: '38%' }}>Agencia Web Convencional</th>
                <th style={{ padding: '18px 22px', borderBottom: '1px solid var(--line)', color: 'var(--green)', fontSize: '14px', width: '38%', background: '#12251a' }}>Ecosistema Hazlo Crecer</th>
              </tr>
            </thead>
            <tbody>
              {points.map((p, index) => (
                <tr key={index} style={{ borderBottom: index < points.length - 1 ? '1px solid var(--line)' : 'none' }}>
                  <td style={{ padding: '16px 22px', borderBottom: '1px solid var(--line)', fontWeight: '600', fontSize: '14px', color: 'var(--text)' }}>{p.feature}</td>
                  <td style={{ padding: '16px 22px', borderBottom: '1px solid var(--line)', color: 'var(--muted)', fontSize: '13.5px', lineHeight: '1.6' }}>❌ {p.traditional}</td>
                  <td style={{ padding: '16px 22px', borderBottom: '1px solid var(--line)', color: 'var(--text)', fontSize: '13.5px', lineHeight: '1.6', background: '#0e1c14' }}>
                    <strong style={{ color: 'var(--green)' }}>✓</strong> {p.hazloCrecer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

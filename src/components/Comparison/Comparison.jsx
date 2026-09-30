import { useState } from 'react';

export function Comparison() {
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'hazlo', 'traditional'

  const points = [
    {
      feature: 'Enfoque Principal',
      category: 'Estrategia',
      traditional: 'Diseño visual estático ("folleto digital" que no genera prospectos)',
      hazloCrecer: 'Ecosistema de captación y conversión predecible con Agentes de IA'
    },
    {
      feature: 'Velocidad de Respuesta',
      category: 'Conversión',
      traditional: 'Formulario pasivo que se responde al día siguiente cuando el prospecto ya cotizó en otro lado',
      hazloCrecer: 'Agente autónomo en WhatsApp que responde, califica y agenda en menos de 5 segundos'
    },
    {
      feature: 'Propiedad del Código',
      category: 'Infraestructura',
      traditional: 'Atrapado en WordPress vulnerable o plataformas de suscripción con "candado"',
      hazloCrecer: 'Código propio en React + PocketBase/Vite, 100% de tu empresa y sin ataduras'
    },
    {
      feature: 'Posicionamiento y Tráfico',
      category: 'Visibilidad',
      traditional: 'SEO básico anticuado (solo meta tags y textos sin estrategia semántica)',
      hazloCrecer: 'GEO + AIO: Optimizado para que Google, ChatGPT, Gemini y Perplexity te recomienden'
    },
    {
      feature: 'Transparencia de Costos',
      category: 'Inversión',
      traditional: 'Letras chicas, costos sorpresa por hosting o mantenimiento no avisado',
      hazloCrecer: 'Inversión clara, entregables con métricas cuantitativas y sin contratos forzosos'
    }
  ];

  return (
    <section className="section band" id="comparativa">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Ingeniería vs. Tradición</span>
          <h2>¿Por qué las páginas web tradicionales ya no venden en Lima?</h2>
          <p className="section-subtitle">
            El 82% de las empresas en Perú pagan por páginas que funcionan como folletos mudos. 
            Nosotros construimos infraestructuras comerciales activas diseñadas para cerrar negocios.
          </p>
        </div>

        {/* Mobile Filter Toggle (Visible solo en pantallas pequeñas para máxima usabilidad) */}
        <div className="comparison-mobile-toggle">
          <button 
            type="button" 
            className={`toggle-pill ${filterMode === 'all' ? 'active' : ''}`}
            onClick={() => setFilterMode('all')}
          >
            Comparar Ambos
          </button>
          <button 
            type="button" 
            className={`toggle-pill highlight ${filterMode === 'hazlo' ? 'active' : ''}`}
            onClick={() => setFilterMode('hazlo')}
          >
            ⭐ Hazlo Crecer
          </button>
          <button 
            type="button" 
            className={`toggle-pill ${filterMode === 'traditional' ? 'active' : ''}`}
            onClick={() => setFilterMode('traditional')}
          >
            ❌ Tradicional
          </button>
        </div>

        {/* Desktop View: Tabla Open Design de Alta Fidelidad */}
        <div className="comparison-desktop-table">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="th-feature">Criterio Operativo</th>
                <th className="th-traditional">Agencia Web Tradicional</th>
                <th className="th-hazlo">
                  <div className="th-hazlo-badge">
                    <span>RECOMENDADO</span>
                  </div>
                  Ecosistema Hazlo Crecer
                </th>
              </tr>
            </thead>
            <tbody>
              {points.map((p, index) => (
                <tr key={index}>
                  <td className="td-feature">
                    <span className="feature-category">{p.category}</span>
                    <strong className="feature-title">{p.feature}</strong>
                  </td>
                  <td className="td-traditional">
                    <div className="comparison-val traditional">
                      <span className="icon-cross">✕</span>
                      <span>{p.traditional}</span>
                    </div>
                  </td>
                  <td className="td-hazlo">
                    <div className="comparison-val hazlo">
                      <span className="icon-check">✓</span>
                      <span>{p.hazloCrecer}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Tarjetas Open Design Fluidas y Legibles */}
        <div className="comparison-mobile-cards">
          {points.map((p, index) => (
            <div className="comparison-card" key={index}>
              <div className="comparison-card-header">
                <span className="feature-category">{p.category}</span>
                <h4>{p.feature}</h4>
              </div>

              {(filterMode === 'all' || filterMode === 'hazlo') && (
                <div className="comparison-card-block hazlo-block">
                  <div className="block-label">
                    <span className="icon-check">✓</span>
                    <strong>Ecosistema Hazlo Crecer</strong>
                  </div>
                  <p>{p.hazloCrecer}</p>
                </div>
              )}

              {(filterMode === 'all' || filterMode === 'traditional') && (
                <div className="comparison-card-block traditional-block">
                  <div className="block-label">
                    <span className="icon-cross">✕</span>
                    <strong>Agencia Tradicional</strong>
                  </div>
                  <p>{p.traditional}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Callout de Confianza */}
        <div className="comparison-callout">
          <div className="callout-icon">💡</div>
          <div className="callout-text">
            <strong>Dato de mercado en Lima:</strong> Un prospecto contactado en los primeros 5 minutos tiene 21 veces más probabilidades de entrar al proceso de ventas que uno contactado 30 minutos después.
          </div>
        </div>
      </div>
    </section>
  );
}

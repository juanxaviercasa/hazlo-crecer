import './ecosystem-diagram.css';

export function EcosystemDiagram() {
  const nodes = [
    {
      step: '01',
      badge: 'TRÁFICO & BÚSQUEDA',
      title: 'Google Maps & Campañas',
      tech: 'SEO Local · Meta Ads · 4G Lima',
      desc: 'Pacientes y clientes de alto valor buscan tu servicio en San Isidro, Surco o Miraflores.',
      status: 'Entrada Activa',
      icon: '📍'
    },
    {
      step: '02',
      badge: 'INFRAESTRUCTURA',
      title: 'Web Ultrarrápida React',
      tech: 'React 18 · Vite · Carga < 1.2s',
      desc: 'Carga instantánea en smartphones peruanos sin las esperas que provocan abandono.',
      status: 'Core Web Vitals 99/100',
      icon: '⚡'
    },
    {
      step: '03',
      badge: 'ATENCIÓN INTELIGENTE',
      title: 'Agente WhatsApp 24/7',
      tech: 'Meta Cloud API · IA en 15s',
      desc: 'Filtra el tratamiento deseado, resuelve dudas de precios base y ofrece turnos disponibles.',
      status: 'Sin "Visto" sin responder',
      icon: '🤖'
    },
    {
      step: '04',
      badge: 'OPERACIÓN & CIERRE',
      title: 'Agenda & Anti-NoShow',
      tech: 'Google Calendar · Yape/Niubiz',
      desc: 'Turno confirmado en tu sistema y recordatorios automáticos 24h antes para asegurar asistencia.',
      status: '+92% Tasa de Asistencia',
      icon: '🗓️'
    }
  ];

  return (
    <div className="ecosystem-container" role="region" aria-label="Arquitectura del Ecosistema Comercial">
      <div className="ecosystem-header">
        <div className="ecosystem-tag">ARQUITECTURA DE INGENIERÍA COMERCIAL</div>
        <h3>Ecosistema de Conversión de Extremo a Extremo</h3>
        <p>No pegamos herramientas aisladas. Construimos un flujo integrado y continuo para que ningún prospecto se quede sin atender.</p>
      </div>

      <div className="ecosystem-grid">
        {nodes.map((node, index) => (
          <div key={node.step} className="ecosystem-card">
            <div className="ecosystem-card-top">
              <span className="ecosystem-step">{node.step}</span>
              <span className="ecosystem-icon">{node.icon}</span>
              <span className="ecosystem-badge">{node.badge}</span>
            </div>
            <h4>{node.title}</h4>
            <div className="ecosystem-tech-pill">{node.tech}</div>
            <p className="ecosystem-desc">{node.desc}</p>
            <div className="ecosystem-footer">
              <span className="ecosystem-status-dot" />
              <span>{node.status}</span>
            </div>
            {index < nodes.length - 1 && <div className="ecosystem-connector" aria-hidden="true">→</div>}
          </div>
        ))}
      </div>

      <div className="ecosystem-kpi-bar">
        <div className="kpi-item">
          <strong>&lt; 15 segundos</strong>
          <span>Tiempo de primera respuesta</span>
        </div>
        <div className="kpi-divider" />
        <div className="kpi-item">
          <strong>100% Tuyo</strong>
          <span>Código sin dependencias mensuales forzosas</span>
        </div>
        <div className="kpi-divider" />
        <div className="kpi-item">
          <strong>10 - 14 Días</strong>
          <span>Plazo cerrado de entrega en producción</span>
        </div>
      </div>
    </div>
  );
}

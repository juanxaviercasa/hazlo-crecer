import './sector-live-metrics.css';

export function SectorLiveMetrics() {
  const treatments = [
    { name: 'Diseño de Sonrisa & Carillas', count: 42, pct: '88%', revenue: 'S/ 33,600' },
    { name: 'Ortodoncia Invisible', count: 28, pct: '74%', revenue: 'S/ 25,200' },
    { name: 'Implantes & Cirugía Oral', count: 16, pct: '62%', revenue: 'S/ 28,800' }
  ];

  return (
    <div className="sector-metrics-panel" role="region" aria-label="Tablero de Operación en Tiempo Real">
      <div className="metrics-panel-top">
        <div className="metrics-live-indicator">
          <span className="live-pulsing-dot" />
          <span>SISTEMA EN PRODUCCIÓN · SAN ISIDRO</span>
        </div>
        <span className="metrics-badge-sector">CLÍNICA ODONTOLÓGICA</span>
      </div>

      <div className="metrics-headline">
        <h4>Rendimiento Comercial Mensual</h4>
        <p>Métricas consolidadas de atención autónoma por WhatsApp</p>
      </div>

      <div className="metrics-kpi-row">
        <div className="metrics-kpi-box">
          <span className="kpi-num">14 seg</span>
          <span className="kpi-label">Tiempo medio de respuesta</span>
        </div>
        <div className="metrics-kpi-box win">
          <span className="kpi-num">94.2%</span>
          <span className="kpi-label">Asistencia (Anti-NoShow)</span>
        </div>
        <div className="metrics-kpi-box">
          <span className="kpi-num">86 citas</span>
          <span className="kpi-label">Agendadas automáticamente</span>
        </div>
      </div>

      <div className="metrics-treatment-bars">
        <span className="treatment-title">Tratamientos Filtrados & Agendados este mes:</span>
        {treatments.map((t) => (
          <div key={t.name} className="treatment-item">
            <div className="treatment-meta">
              <span className="t-name">{t.name}</span>
              <span className="t-val">{t.count} citas ({t.revenue})</span>
            </div>
            <div className="treatment-track">
              <div className="treatment-fill" style={{ width: t.pct }} />
            </div>
          </div>
        ))}
      </div>

      <div className="metrics-panel-footer">
        <span className="footer-sync-icon">⚡</span>
        <span>Sincronizado en tiempo real con Google Calendar + Notificaciones al Director Médico</span>
      </div>
    </div>
  );
}

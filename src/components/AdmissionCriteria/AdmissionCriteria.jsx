import './admission-criteria.css';

export function AdmissionCriteria() {
  const criteria = [
    {
      num: '01',
      title: 'Flujo Mínimo de Consultas',
      desc: 'Al menos 20 a 50+ mensajes mensuales en WhatsApp o campañas activas en Meta/Google. Si no hay tráfico, una automatización no tiene a quién responder.',
      tag: 'Volumen Comprobable'
    },
    {
      num: '02',
      title: 'Ticket Promedio S/ 500 – S/ 2,500+',
      desc: 'Clínicas dentales, medicina estética, firmas B2B y consultorías donde cerrar 2 o 3 clientes adicionales cubre con creces el costo del sistema.',
      tag: 'Alto Retorno de Inversión'
    },
    {
      num: '03',
      title: 'Capacidad de Atención en Lima',
      desc: 'Negocios con sede y especialistas listos para recibir pacientes y cerrar cotizaciones formales sin demoras.',
      tag: 'Operación Formal'
    }
  ];

  return (
    <div className="admission-card" role="region" aria-label="Criterios de Admisión">
      <div className="admission-top">
        <span className="admission-badge">POLÍTICA DE ADMISIÓN TÉCNICA</span>
        <h3>Por qué no hacemos diagnósticos a cualquier negocio</h3>
        <p>
          Construir una infraestructura de alta conversión requiere tiempo y precisión de ingeniería. Solo asignamos sesiones de arquitectura 1-a-1 a negocios donde nuestro sistema genera un retorno comprobable.
        </p>
      </div>

      <div className="admission-list">
        {criteria.map((c) => (
          <div key={c.num} className="admission-item">
            <div className="admission-item-header">
              <span className="admission-num">{c.num}</span>
              <h4>{c.title}</h4>
              <span className="admission-tag">{c.tag}</span>
            </div>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="admission-footer-box">
        <span className="admission-footer-icon">🛡️</span>
        <div>
          <strong>Compromiso de Honestidad Comercial:</strong>
          <span>
            Si tu negocio no cumple los criterios, te lo diremos de inmediato en el evaluador y te obsequiaremos una guía para no hacerte perder tiempo.
          </span>
        </div>
      </div>
    </div>
  );
}

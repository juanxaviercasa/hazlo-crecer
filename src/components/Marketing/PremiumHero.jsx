import { Link } from 'react-router-dom';
import { Arrow, Icon } from '../Brand/Brand.jsx';
import { WhatsAppSimulator } from '../WhatsAppSimulator/WhatsAppSimulator.jsx';

// Fases de aceleración comercial diseñadas para el mercado de Lima
const stages = [
  ['01', 'Diagnóstico de Fuga', 'Auditamos tu presencia web, ficha de Google Maps y velocidad de respuesta en WhatsApp.', 'chart'],
  ['02', 'Web Ultrarrápida', 'Arquitectura moderna en React que carga en menos de 2 segundos en redes móviles de Lima.', 'web'],
  ['03', 'Agente WhatsApp 24/7', 'Atiende al instante, resuelve dudas, califica prospectos y agenda citas en tu calendario.', 'chat'],
  ['04', 'Seguimiento Anti-NoShow', 'Recordatorios automáticos para reducir hasta 35% de inasistencias y rescatar cotizaciones.', 'check'],
];

export function PremiumHero() {
  return <div className="premium-opening">
    <section className="premium-hero" aria-labelledby="premium-title">
      <div className="container premium-hero-inner">
        <span className="kicker"><span className="tiny-dot" /> INGENIERÍA DIGITAL & AGENTES DE IA · LIMA, PERÚ</span>
        <h1 id="premium-title">Tu web debe cerrar clientes,<br /><span>no ser un adorno digital.</span></h1>
        <p className="premium-lead">En Lima, más del 80% de prospectos cotizan por celular y le compran al primero que responde. Diseñamos plataformas ultrarrápidas con agentes inteligentes de WhatsApp que atienden, filtran y agendan citas en menos de 60 segundos.</p>
        <div className="premium-actions">
          <Link className="button" to="/auditoria">Evaluar si mi negocio califica <Arrow diagonal /></Link>
          <a className="premium-secondary" href="#comparativa">Por qué las webs comunes fallan <Arrow /></a>
        </div>
        <p className="premium-assurance"><Icon type="check" /> Atención en &lt; 60s por WhatsApp · Facturación formal con RUC · Código 100% propio sin candados</p>
        <div className="premium-preview">
          <div className="premium-preview-copy">
            <span className="kicker">CONVERSIÓN ACTIVA 24/7</span>
            <h2>De mensaje en WhatsApp<br />a cita agendada en minutos.</h2>
            <p>Se acabaron los clientes dejados en "visto" y los formularios mudos que nadie revisa. Tu negocio responderá con información precisa y calificada mientras tú te enfocas en operar.</p>
            <Link to="/resultados" className="text-link">Ver casos y modelos de aplicación <Arrow diagonal /></Link>
          </div>
          <div className="premium-preview-simulator">
            <WhatsAppSimulator />
          </div>
        </div>
      </div>
    </section>
    <ol className="container premium-stage-grid" aria-label="Nuestro recorrido de trabajo">
      {stages.map(([number, title, text, icon]) => <li key={number}><div className="premium-stage-top"><span>{number}</span><Icon type={icon} /></div><h2>{title}</h2><p>{text}</p></li>)}
    </ol>
  </div>;
}

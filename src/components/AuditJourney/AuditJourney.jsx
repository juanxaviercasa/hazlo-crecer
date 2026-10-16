import {Link} from 'react-router-dom';
import './audit-journey.css';

const deliverables = [
  ['Lo que podemos comprobar', 'Revisamos la información disponible y distinguimos los hechos de las hipótesis y los datos que faltan.'],
  ['Qué conviene resolver primero', 'Ordenamos las oportunidades y las preguntas necesarias para elegir una primera mejora.'],
  ['Cómo comprobar el avance', 'Proponemos qué observar, de dónde obtener los datos y qué queda por validar antes de implementar.'],
];

export function AuditJourney(){return <>
  <section className="section audit-journey" aria-labelledby="audit-journey-title">
    <div className="container">
      <span className="kicker">TU PRIMER PASO</span>
      <h2 id="audit-journey-title">Una auditoría para saber<br/>qué mejorar primero.</h2>
      <p className="audit-journey-intro">Para negocios que quieren conectar su web, sus consultas y su seguimiento. Empezamos por entender tu situación y preparar un plan inicial gratuito.</p>
      <div className="audit-journey-cards">{deliverables.map(([title,text],index)=><article key={title}>
        <span className="kicker">0{index+1}</span><h3>{title}</h3><p>{text}</p>
      </article>)}</div>
      <div className="audit-journey-next"><div><h3>Después de enviar tu solicitud</h3><p>Conserva la referencia de recepción. El diagnóstico requiere revisión; el recibo confirma la solicitud, no una auditoría terminada. Si falta contexto, lo aclaramos contigo.</p></div>
        <Link className="button" to="/auditoria">Solicitar auditoría gratuita</Link></div>
      <p className="audit-journey-boundary">La implementación se acuerda por separado: alcance, presupuesto y forma de medir. No necesitas contratarla para solicitar la revisión inicial.</p>
    </div>
  </section>
  <section className="section owned-pilot" aria-labelledby="owned-pilot-title"><div className="container owned-pilot-grid">
    <div><span className="kicker">EMPEZAMOS POR CASA</span><h2 id="owned-pilot-title">Nuestro primer proyecto<br/>es Hazlo Crecer.</h2><p>Estamos aplicando este mismo proceso a nuestra web y a la recepción de solicitudes: aclarar la oferta, probar el recorrido y registrar qué funciona y qué falta.</p></div>
    <div className="owned-pilot-note"><h3>Qué significa para ti</h3><p>Una mejora de diseño necesita comprobarse junto al formulario y al siguiente paso. No presentamos nuestras pruebas internas como resultados de clientes ni como una garantía de ventas.</p><p>El propósito es sencillo: construir, comprobar y aprender antes de ampliar la automatización.</p></div>
  </div></section>
</>;}

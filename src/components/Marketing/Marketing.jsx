import {Link} from 'react-router-dom';
import {Arrow} from '../Brand/Brand.jsx';
export function SectionHeading({eyebrow,title,description}){return <div className="section-heading"><span className="kicker">{eyebrow}</span><h2>{title}</h2>{description&&<p>{description}</p>}</div>;}
export function FinalCTA(){return <section className="final-cta"><div className="container final-cta-inner"><div><span className="kicker">EL SIGUIENTE PASO ES CONVERSAR</span><h2>Tu negocio tiene potencial.<br/>Démosle dirección.</h2><p>Empezamos con una auditoría gratuita y un plan de prioridades. Tú decides cómo continuar.</p></div><Link to="/auditoria" className="button button-lime">Revisar mi negocio <Arrow diagonal/></Link></div></section>;}
export function PageIntro({eyebrow,title,description,children}){return <section className="page-intro"><div className="container"><span className="kicker">{eyebrow}</span><h1>{title}</h1><p>{description}</p>{children}</div></section>;}
export const services=[
 {id:'presencia',number:'01',icon:'web',name:'Presencia que representa tu negocio',short:'Sitios web y experiencias digitales',text:'Una web diseñada alrededor de lo que tu cliente necesita entender y hacer.',items:['Estructura y contenido por sector','Diseño adaptable a móvil','Solicitud, reserva o consulta con contexto']},
 {id:'contenido',number:'02',icon:'content',name:'Contenido con una dirección clara',short:'Estrategia y contenido',text:'Tu conocimiento se convierte en piezas útiles que acompañan la decisión de tus clientes.',items:['Temas y calendario con propósito','Video, clips, carruseles y artículos','Revisión de la voz y las afirmaciones de tu marca']},
 {id:'atencion',number:'03',icon:'chat',name:'Conversaciones que tienen continuidad',short:'Atención y automatización',text:'Organiza las consultas para que cada conversación tenga un responsable y un siguiente paso.',items:['Recorridos de atención y seguimiento','Automatización según alcance acordado','Derivación y revisión por personas']},
 {id:'medicion',number:'04',icon:'chart',name:'Decisiones con evidencia',short:'Medición y mejora',text:'Distingue actividad de oportunidades reales y encuentra qué conviene mejorar primero.',items:['Auditoría de tu situación actual','Consultas, citas y contratos diferenciados','Prioridades e indicadores acordados']}
];
export const verticals=[
 {slug:'dentistas',name:'Salud y bienestar',tag:'Confianza antes de una cita',icon:'shield',example:'Servicios claros, preguntas frecuentes y solicitudes de cita, con revisión profesional del contenido.'},
 {slug:'restaurantes',name:'Restaurantes',tag:'Del descubrimiento a la visita',icon:'content',example:'Carta, ambiente, ubicación y una forma sencilla de consultar o planificar una visita.'},
 {slug:'inmobiliarias',name:'Inmobiliarias',tag:'Información para decidir',icon:'web',example:'Propiedades, características y consultas organizadas para decisiones de mayor consideración.'},
 {slug:'abogados',name:'Servicios profesionales',tag:'Una consulta con contexto',icon:'chat',example:'Especialidades, alcance del servicio y una primera consulta que facilite la conversación.'},
 {slug:'salones-de-belleza',name:'Belleza y cuidado personal',tag:'Servicios y reservas',icon:'connect',example:'Tratamientos, experiencia y consultas de disponibilidad adaptadas a cada negocio.'},
 {slug:'gasfiteros',name:'Servicios para el hogar',tag:'Cobertura y cotización',icon:'check',example:'Servicios, zonas de atención y solicitudes con la información necesaria para cotizar.'}
];

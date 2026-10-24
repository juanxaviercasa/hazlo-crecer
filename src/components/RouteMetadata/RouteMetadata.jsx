import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import catalog from '../../data/directory-offers.json';
const pages={
 '/aviso-legal':['Aviso legal | Hazlo Crecer','Identificación del titular, contacto y alcance del sitio Hazlo Crecer.'],
 '/terminos':['Términos y condiciones | Hazlo Crecer','Condiciones de navegación, solicitudes y contratación de servicios.'],
 '/cookies':['Cookies y almacenamiento | Hazlo Crecer','Información del almacenamiento utilizado por el sitio y controles disponibles.'],
 '/libro-de-reclamaciones':['Libro de Reclamaciones | Hazlo Crecer','Canal formal de atención de quejas y reclamos en Lima, Perú.'],
 '/':['Hazlo Crecer | Infraestructura Digital y Agentes de IA en Lima','Webs ultrarrápidas en React y agentes autónomos de WhatsApp para clínicas y empresas en Lima. Cierre de citas en < 60 segundos.'],
 '/servicios':['Servicios de Ingeniería Comercial | Hazlo Crecer','Webs React de alta velocidad, agentes inteligentes de WhatsApp 24/7 y automatización de agendas en Lima.'],
 '/sectores':['Soluciones por Sector | Hazlo Crecer','Arquitecturas a medida para clínicas odontológicas, medicina estética, servicios B2B y estudios profesionales en Lima.'],
 '/resultados':['Modelos de Conversión y Resultados | Hazlo Crecer','Casos reales de aumento de facturación, respuesta en 15s y reducción de ausencias en citas para empresas de Lima.'],
 '/auditoria':['Evaluación de Elegibilidad Comercial | Hazlo Crecer','Comprueba si tu clínica o empresa califica para una sesión técnica de arquitectura 1-a-1 de 20 minutos.'],
 '/privacidad':['Protección de Datos y Privacidad | Hazlo Crecer','Política de tratamiento formal de datos personales y comerciales en Lima, Perú.']
};
export function RouteMetadata(){const {pathname,hash}=useLocation();useEffect(()=>{const category=catalog.categories.find(c=>c.path===pathname);const area=catalog.areas.find(a=>'/'+a.slug===pathname);const [title,description]=pages[pathname]||[`${category?.title||area?.title||'Tu negocio'} | Hazlo Crecer`,'Revisamos la presencia digital, captación y seguimiento de tu negocio para definir un plan de prioridades.'];document.title=title;function meta(attr,value,content){let tag=document.querySelector(`meta[${attr}="${value}"]`);if(!tag){tag=document.createElement('meta');tag.setAttribute(attr,value);document.head.appendChild(tag);}tag.content=content;}meta('name','description',description);meta('name','robots',category||area||pathname==='/admin'?'noindex,follow':'index,follow');meta('property','og:title',title);meta('property','og:description',description);meta('property','og:url','https://hazlocrecer.com'+pathname);let canonical=document.querySelector('link[rel="canonical"]');if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical);}canonical.href='https://hazlocrecer.com'+pathname;if(!hash)window.scrollTo({top:0,behavior:'instant'});else{requestAnimationFrame(()=>document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView());}},[pathname,hash]);return null;}

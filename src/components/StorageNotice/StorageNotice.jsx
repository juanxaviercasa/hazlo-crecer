import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
export const NOTICE_KEY='hazlo_storage_notice_v1';
const version='2026-10-14';
function remembered(){try{return JSON.parse(localStorage.getItem(NOTICE_KEY)||'null')?.version===version;}catch{return false;}}
export function openStorageNotice(){window.dispatchEvent(new Event('hazlo-open-storage-notice'));}
export function StorageNotice(){
 const [visible,setVisible]=useState(()=>!remembered());
 const [detail,setDetail]=useState(false);
 const [error,setError]=useState('');
 useEffect(()=>{const open=()=>{setDetail(true);setVisible(true);};window.addEventListener('hazlo-open-storage-notice',open);return()=>window.removeEventListener('hazlo-open-storage-notice',open);},[]);
 useEffect(()=>{document.body.classList.toggle('storage-notice-open',visible);return()=>document.body.classList.remove('storage-notice-open');},[visible]);
 function dismiss(){try{localStorage.setItem(NOTICE_KEY,JSON.stringify({version,necessary:true,analytics:false,advertising:false,acknowledgedAt:new Date().toISOString()}));}catch{setError('Tu navegador no permite guardar esta elección. El aviso podrá reaparecer.');return;}setVisible(false);setError('');}
 if(!visible)return null;
 return <section className="storage-notice" role="region" aria-label="Aviso de cookies y almacenamiento"><div className="storage-notice-copy"><h2>Tu privacidad, con claridad.</h2><p>Usamos almacenamiento necesario para controlar el envío de solicitudes y recordar este aviso. Esta web no incorpora analítica ni publicidad de seguimiento. <Link to="/cookies">Ver política de cookies</Link>.</p>{detail&&<div className="storage-details"><p><strong>Necesario:</strong> referencia de envío, borrador temporal y lectura de este aviso. <strong>Analítica y publicidad:</strong> no instaladas; no hay categorías opcionales que activar.</p><p>Los enlaces a WhatsApp y al portal abren servicios con políticas propias. Puedes reabrir este aviso desde el pie de página.</p></div>}{error&&<p role="status">{error} <button type="button" className="notice-inline" onClick={()=>setVisible(false)}>Cerrar por esta visita</button></p>}</div><div className="storage-notice-actions"><button type="button" className="notice-secondary" onClick={()=>setDetail(!detail)} aria-expanded={detail}>{detail?'Ocultar detalles':'Ver detalles'}</button><button type="button" className="notice-primary" onClick={dismiss}>Entendido, continuar</button></div></section>;
}

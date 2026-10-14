export async function createLead(lead,idempotencyKey){
 const base=import.meta.env.VITE_HAZLO_CORE_URL || (import.meta.env.PROD ? 'https://api.hazlocrecer.com' : '');
 if(!base)throw Object.assign(new Error('El backend todavía no está configurado.'),{status:503});
 const endpoint=new URL(base,window.location.origin);
 if(['localhost','127.0.0.1'].includes(endpoint.hostname)&&!['localhost','127.0.0.1'].includes(window.location.hostname))throw Object.assign(new Error('La conexión pública todavía no está disponible.'),{status:503});
 const response=await fetch(base.replace(/\/$/,'')+'/api/public-intake',{method:'POST',headers:{'Content-Type':'application/json','Idempotency-Key':idempotencyKey},body:JSON.stringify(lead),signal:AbortSignal.timeout(20000)});
 const data=await response.json();if(!response.ok)throw Object.assign(new Error(data.error||'Solicitud rechazada'),{status:response.status});
 if(!data.id||data.status!=='received')throw Error('No se pudo verificar la recepción');return data;
}

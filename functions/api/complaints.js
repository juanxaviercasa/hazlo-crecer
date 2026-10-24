import {complaintSchema} from '../../shared/complaint-schema.js';
const json=(body,status=200)=>new Response(JSON.stringify(body),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
const encode=bytes=>btoa(String.fromCharCode(...bytes));
async function limitedBody(request){const reader=request.body?.getReader();if(!reader)throw Error();let size=0,parts=[];while(true){const {value,done}=await reader.read();if(done)break;size+=value.length;if(size>20000){await reader.cancel();throw Error();}parts.push(value);}const all=new Uint8Array(size);let offset=0;for(const p of parts){all.set(p,offset);offset+=p.length;}return JSON.parse(new TextDecoder().decode(all));}
export async function onRequest({request,env}) {
  if(request.method!=='POST')return json({error:'method_not_allowed'},405);
  if(!env.COMPLAINTS_DB||!env.COMPLAINTS_KEY||!env.TURNSTILE_SECRET||!env.COMPLAINTS_ORIGIN)return json({error:'complaints_not_configured'},503);
  if(request.headers.get('Origin')!==env.COMPLAINTS_ORIGIN||new URL(request.url).origin!==env.COMPLAINTS_ORIGIN)return json({error:'invalid_origin'},403);
  if(!request.headers.get('Content-Type')?.startsWith('application/json'))return json({error:'json_required'},415);
  const key=request.headers.get('Idempotency-Key');
  if(!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(key||''))return json({error:'invalid_request_key'},400);
  let body;try{body=await limitedBody(request);}catch{return json({error:'invalid_body'},400);}
  const parsed=complaintSchema.safeParse(body?.complaint);
  if(!parsed.success)return json({error:'invalid_complaint'},422);
  try {
    const data=JSON.stringify(parsed.data);
    const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(data));
    const fingerprint=encode(new Uint8Array(digest));
    const prior=await env.COMPLAINTS_DB.prepare('SELECT reference, fingerprint, received_at FROM complaints WHERE request_key = ?').bind(key).first();
    if(prior)return prior.fingerprint===fingerprint?json({reference:prior.reference,receivedAt:prior.received_at,status:'received'}):json({error:'request_conflict'},409);
    if(typeof body.turnstileToken!=='string'||body.turnstileToken.length>2048)return json({error:'verification_required'},400);
    const verify=await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({secret:env.TURNSTILE_SECRET,response:body.turnstileToken}),signal:AbortSignal.timeout(10000)});
    const check=await verify.json();
    if(!check.success||check.hostname!==new URL(env.COMPLAINTS_ORIGIN).hostname||check.action!=='complaint')return json({error:'verification_failed'},403);
    const rawKey=Uint8Array.from(atob(env.COMPLAINTS_KEY),c=>c.charCodeAt(0));
    if(rawKey.length!==32)return json({error:'complaints_not_configured'},503);
    const encryptionKey=await crypto.subtle.importKey('raw',rawKey,'AES-GCM',false,['encrypt']);
    const iv=crypto.getRandomValues(new Uint8Array(12));
    const reference='HC-'+crypto.randomUUID();
    const receivedAt=new Date().toISOString();
    const encrypted=await crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:new TextEncoder().encode(reference)},encryptionKey,new TextEncoder().encode(data));
    const provider={name:'Juan Cabello',brand:'Hazlo Crecer',ruc:'10760184450',address:'Horacio Zeballos G., Ate, Lima, Perú',email:'contacto@cabellosalirrosas.com'};
    await env.COMPLAINTS_DB.prepare('INSERT OR IGNORE INTO complaints (reference, request_key, fingerprint, received_at, provider_json, encrypted_payload) VALUES (?, ?, ?, ?, ?, ?)').bind(reference,key,fingerprint,receivedAt,JSON.stringify(provider),JSON.stringify({version:1,iv:encode(iv),data:encode(new Uint8Array(encrypted))})).run();
    const saved=await env.COMPLAINTS_DB.prepare('SELECT reference, fingerprint, received_at FROM complaints WHERE request_key = ?').bind(key).first();
    if(!saved)return json({error:'receipt_not_confirmed'},503);
    if(saved.fingerprint!==fingerprint)return json({error:'request_conflict'},409);
    return json({reference:saved.reference,receivedAt:saved.received_at,status:'received'});
  }catch{return json({error:'receipt_not_confirmed'},503);}
}

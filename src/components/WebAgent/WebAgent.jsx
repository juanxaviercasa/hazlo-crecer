import {useEffect,useRef,useState} from 'react';
import {Link} from 'react-router-dom';
import './web-agent.css';
const storage='hazlo_chat_session_v1';
const endpoint=(import.meta.env.VITE_HAZLO_CHAT_URL|| (import.meta.env.PROD?'https://panel.hazlocrecer.com':''))+'/api/public-chat';
export function WebAgent(){
 const [open,setOpen]=useState(false),[session,setSession]=useState(''),[turns,setTurns]=useState([]),[message,setMessage]=useState(''),[busy,setBusy]=useState(false),[error,setError]=useState(''),[pending,setPending]=useState(null);
 const input=useRef(null),trigger=useRef(null),sending=useRef(false);
 useEffect(()=>{if(open)input.current?.focus();},[open]);
 async function send(e){e.preventDefault();if(sending.current||!message.trim()&&!pending)return;sending.current=true;setBusy(true);setError('');
  const text=pending?.message||message.trim(),requestId=pending?.requestId||crypto.randomUUID();setPending({message:text,requestId});
  try{
   let token=session; if(!token){try{token=sessionStorage.getItem(storage)||'';}catch{} }
   if(!token){const r=await fetch(endpoint,{headers:{Accept:'application/json'},signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error('unavailable');token=(await r.json()).session;if(typeof token!=='string')throw Error('invalid');setSession(token);try{sessionStorage.setItem(storage,token);}catch{}}
   const r=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({session:token,requestId,message:text}),signal:AbortSignal.timeout(35000)});
   if(!r.ok){if(r.status===401){setSession('');try{sessionStorage.removeItem(storage);}catch{}setPending(null);}throw Error(r.status===429?'limit':'unavailable');}
   const data=await r.json();if(typeof data.answer!=='string'||!['ai','guide'].includes(data.mode))throw Error('invalid');
   setTurns(v=>[...v,{question:text,answer:data.answer,mode:data.mode,notice:data.notice}].slice(-20));setMessage('');setPending(null);
  }catch(e){setError(e.message==='limit'?'Alcanzamos el límite de consultas. Puedes usar el formulario o escribirnos por WhatsApp.':'No podemos responder en este momento. Puedes reintentar o continuar por el formulario.');}
  finally{sending.current=false;setBusy(false);input.current?.focus();}
 }
 function close(){setOpen(false);trigger.current?.focus();}
 return <aside className="hc-web-agent" aria-label="Asistente de Hazlo Crecer">
  <button ref={trigger} className="hc-chat-trigger" aria-expanded={open} aria-controls="hc-chat-panel" onClick={()=>open?close():setOpen(true)}>Consultar al asistente</button>
  {open&&<section id="hc-chat-panel" aria-labelledby="hc-chat-title" onKeyDown={e=>{if(e.key==='Escape')close();}}>
   <header><h2 id="hc-chat-title">Asistente de Hazlo Crecer</h2><button onClick={close} aria-label="Cerrar asistente">Cerrar</button></header>
   <p className="hc-chat-help">Resolvemos dudas sobre la auditoría y nuestros servicios. No envíes contraseñas ni datos de pacientes. Guardamos las respuestas de esta sesión para controlar reintentos.</p>
   <div className="hc-chat-turns" aria-live="polite" aria-relevant="additions">{turns.length===0&&<p>¿En qué podemos orientarte?</p>}{turns.map((t,i)=><article key={i}><p><strong>Tú:</strong> {t.question}</p><p><strong>{t.mode==='ai'?'Asistente IA':'Guía de Hazlo Crecer'}:</strong> {t.answer}</p>{t.notice&&<p className="hc-chat-help">{t.notice}</p>}</article>)}</div>
   <form onSubmit={send}><label htmlFor="hc-chat-message">Tu consulta</label><textarea ref={input} id="hc-chat-message" maxLength={1000} rows={2} value={message} disabled={busy||Boolean(pending)} onChange={e=>setMessage(e.target.value)}/><p role="alert">{error}</p><button type="submit" disabled={busy||!message.trim()&&!pending}>{busy?'Consultando…':pending?'Reintentar consulta':'Enviar consulta'}</button></form>
   <nav aria-label="Continuar con Hazlo Crecer"><Link to="/auditoria" onClick={close}>Solicitar auditoría gratuita</Link><a href="https://wa.me/51925475034" target="_blank" rel="noopener noreferrer">Hablar con una persona</a><Link to="/privacidad">Uso de tus datos</Link></nav>
  </section>}
 </aside>;
}

import test from 'node:test';
import assert from 'node:assert/strict';
import {onRequest} from '../functions/api/complaints.js';
import {complaintSchema} from '../shared/complaint-schema.js';

const complaint={name:'Consumidor de prueba',documentType:'Otro',documentNumber:'TEST000',address:'Domicilio ficticio de prueba',email:'consumer@example.com',phone:'999000000',isMinor:false,representative:'',itemType:'servicio',description:'Servicio ficticio',amount:'0',type:'reclamo',details:'Detalle ficticio para verificación',requestedResolution:'Solicitud ficticia',responseChannel:'email',websiteTrap:''};
function request(body=complaint,key=crypto.randomUUID(),origin='https://hazlocrecer.com'){return new Request('https://hazlocrecer.com/api/complaints',{method:'POST',headers:{Origin:origin,'Content-Type':'application/json','Idempotency-Key':key},body:JSON.stringify({complaint:body,turnstileToken:'test-token'})});}
test('unconfigured endpoint never produces a receipt',async()=>{const r=await onRequest({request:request(),env:{}});assert.equal(r.status,503);assert.equal((await r.json()).reference,undefined);});
test('minor requires a representative and unexpected fields are rejected',()=>{assert.equal(complaintSchema.safeParse({...complaint,isMinor:true}).success,false);assert.equal(complaintSchema.safeParse({...complaint,admin:true}).success,false);});
test('stores encrypted data, confirms persistence, retries once and rejects conflicting keys',async()=>{
 const records=new Map();const keyBytes=crypto.getRandomValues(new Uint8Array(32));
 const db={prepare(sql){return {bind(...values){return {async first(){return records.get(values[0])||null;},async run(){const [reference,key,fingerprint,received_at,provider_json,encrypted_payload]=values;if(!records.has(key))records.set(key,{reference,fingerprint,received_at,provider_json,encrypted_payload});return {success:true};}};}};}};
 const env={COMPLAINTS_DB:db,COMPLAINTS_KEY:Buffer.from(keyBytes).toString('base64'),TURNSTILE_SECRET:'test-secret',COMPLAINTS_ORIGIN:'https://hazlocrecer.com'};
 const previousFetch=globalThis.fetch;globalThis.fetch=async()=>Response.json({success:true,hostname:'hazlocrecer.com',action:'complaint'});
 try{const key=crypto.randomUUID();const first=await onRequest({request:request(complaint,key),env});assert.equal(first.status,200);const receipt=await first.json();assert.equal(receipt.status,'received');assert.equal(records.size,1);
  const stored=records.get(key);assert.equal(stored.encrypted_payload.includes(complaint.email),false);const encrypted=JSON.parse(stored.encrypted_payload);const encryptionKey=await crypto.subtle.importKey('raw',keyBytes,'AES-GCM',false,['decrypt']);const plaintext=await crypto.subtle.decrypt({name:'AES-GCM',iv:Buffer.from(encrypted.iv,'base64'),additionalData:new TextEncoder().encode(receipt.reference)},encryptionKey,Buffer.from(encrypted.data,'base64'));assert.equal(JSON.parse(new TextDecoder().decode(plaintext)).email,complaint.email);
  const retry=await onRequest({request:request(complaint,key),env});assert.equal((await retry.json()).reference,receipt.reference);assert.equal(records.size,1);
  assert.equal((await onRequest({request:request({...complaint,details:'Different test details'},key),env})).status,409);
  assert.equal((await onRequest({request:request(complaint,crypto.randomUUID(),'https://example.com'),env})).status,403);
 }finally{globalThis.fetch=previousFetch;}
});
test('database outage never creates an apparent receipt',async()=>{const env={COMPLAINTS_DB:{prepare(){throw Error('offline');}},COMPLAINTS_KEY:'key',TURNSTILE_SECRET:'secret',COMPLAINTS_ORIGIN:'https://hazlocrecer.com'};const r=await onRequest({request:request(),env});assert.equal(r.status,503);assert.equal((await r.json()).reference,undefined);});

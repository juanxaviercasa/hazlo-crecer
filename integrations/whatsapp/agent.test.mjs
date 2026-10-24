import test from 'node:test';
import assert from 'node:assert/strict';
import {respond} from './agent.mjs';
test('pricing never invents tariffs and requests human review',()=>{const r=respond('¿Cuánto cuesta?');assert.equal(r.intent,'pricing');assert.equal(r.handoff,true);});
test('opt-out takes precedence over selling',()=>assert.equal(respond('BAJA quiero una auditoría').intent,'opt_out'));
test('complaints do not produce a fake registration',()=>assert.equal(respond('Quiero un reclamo').handoff,true));
test('audit points to the approved intake',()=>assert.match(respond('Auditoría').reply,/https:\/\/hazlocrecer.com\/auditoria/));

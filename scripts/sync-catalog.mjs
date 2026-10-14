import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';import {createHash} from 'node:crypto';import {execFileSync} from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const core=process.env.TODO_CRECER_ROOT||path.resolve(root,'../../Music/todo_crecer');
const source=path.join(core,'scripts/sync-ecosystem.mjs');
if(!process.env.CF_PAGES&&fs.existsSync(source))execFileSync(process.execPath,[source],{stdio:'inherit',env:{...process.env,HAZLO_CRECER_ROOT:root}});
const catalog=JSON.parse(fs.readFileSync(path.join(root,'src/data/directory-offers.json'),'utf8'));
const {content_sha256,...body}=catalog;
const canonical=v=>Array.isArray(v)?v.map(canonical):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])])):v;
if(createHash('sha256').update(JSON.stringify(canonical(body))).digest('hex')!==content_sha256)throw Error('Invalid catalog integrity');
if(body.source!=='todo_lima_supabase_public_projection'||body.schema_version!=='1.0')throw Error('Invalid catalog source');
const areas=new Set(body.areas.map(a=>a.slug)),categories=new Set();
for(const category of body.categories){if(!areas.has(category.area_slug)||categories.has(category.slug)||category.path!==`/${category.area_slug}/${category.slug}`)throw Error('Invalid catalog reference');categories.add(category.slug);}
console.log(JSON.stringify({status:'validated_build_catalog',revision:content_sha256,areas:areas.size,categories:categories.size,source_mode:process.env.CF_PAGES?'versioned_cloud_build':'local'}));

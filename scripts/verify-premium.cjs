const {chromium}=require('C:/Users/cabel/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 await context.addInitScript(()=>localStorage.setItem('hazlo_storage_notice_v1',JSON.stringify({version:'2026-10-14'})));
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 // No test submission is allowed to reach a real backend.
 let calls=0,mode='error',keys=[];
 await context.route('**/api/public-intake',async route=>{calls++;keys.push(route.request().headers()['idempotency-key']);await route.fulfill({status:mode==='error'?503:200,contentType:'application/json',body:JSON.stringify(mode==='error'?{error:'test unavailable'}:{id:'LOCAL-QA-ONLY',status:'received'})});});
 const results=[];
 try{
 for(const width of [1440,768,375,320,812]){
  await page.setViewportSize({width,height:width===812?375:1000});
  for(const path of ['/','/servicios','/sectores','/resultados','/auditoria','/privacidad','/libro-de-reclamaciones']){
   await page.goto('http://127.0.0.1:5180'+path);await page.locator('main').waitFor();
   const dims=await page.evaluate(()=>({viewport:innerWidth,scroll:document.documentElement.scrollWidth}));
   results.push({width,path,...dims});
   if(dims.scroll>width+1)console.log('OVERFLOW',width,path,dims.scroll);
   if(path==='/'&&[1440,375].includes(width))await page.screenshot({path:`docs/brand/previews/verified-${width}.png`,fullPage:true});
  }
 }
 await page.setViewportSize({width:375,height:812});await page.goto('http://127.0.0.1:5180/');
 const toggle=page.getByRole('button',{name:'Abrir menú',exact:true});await toggle.click();assert.equal(await page.getByRole('button',{name:'Cerrar menú'}).getAttribute('aria-expanded'),'true');await page.keyboard.press('Escape');assert.equal(await toggle.evaluate(e=>e===document.activeElement),true);
 const faq=page.locator('.faq-list summary').first();await faq.focus();await page.keyboard.press('Enter');assert.equal(await page.locator('.faq-list details').first().getAttribute('open'),'');
 await page.goto('http://127.0.0.1:5180/auditoria');
 const submit=page.getByRole('button',{name:'Solicitar auditoría gratuita',exact:true});await submit.click();assert.equal(calls,0);assert.equal(await page.locator('#audit-name').evaluate(e=>e.validity.valueMissing),true);
 for(const [id,val] of Object.entries({name:'Prueba local',company:'Empresa ficticia',email:'qa@example.com',phone:'999000000',bottleneck:'Prueba local sin envío real'}))await page.locator('#audit-'+id).fill(val);
 await page.locator('#audit-niche').selectOption('other');await page.locator('#audit-website-status').selectOption('has_website');assert.equal(await page.locator('#audit-website-url').isVisible(),true);await page.locator('#audit-website-status').selectOption('no_website');await page.locator('[name=processing]').check();
 await submit.click();await page.getByRole('alert').waitFor();assert.equal(calls,1);mode='success';await page.getByRole('button',{name:'Reintentar el mismo envío'}).click();await page.getByRole('heading',{name:'Solicitud recibida',exact:true}).waitFor();assert.equal(keys[0],keys[1]);await page.reload();await page.getByRole('heading',{name:'Solicitud recibida',exact:true}).waitFor();
 await page.setViewportSize({width:1440,height:1000});await page.goto('http://127.0.0.1:5180/');
 await page.evaluate(()=>{document.documentElement.style.zoom='2';});
 await page.screenshot({path:'docs/brand/previews/verified-200-percent.png'});
 const zoom=await page.evaluate(()=>({width:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth,zoom:getComputedStyle(document.documentElement).zoom}));
 assert.ok(zoom.scroll<=zoom.width+1,'200% CSS zoom overflow');
 await page.evaluate(()=>{document.documentElement.style.zoom='';});
 await page.keyboard.press('Tab');const keyboard=await page.evaluate(()=>({name:document.activeElement.textContent,outline:getComputedStyle(document.activeElement).outlineStyle}));assert.ok(keyboard.name.includes('Saltar'));assert.notEqual(keyboard.outline,'none');
 const contrast=await page.evaluate(()=>{
  const luminance=c=>{const rgb=c.match(/[\d.]+/g).slice(0,3).map(Number).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4});return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;};
  return ['.premium-hero h1','.premium-hero h1 span','.premium-lead','.premium-assurance','.premium-actions .button','.premium-secondary','.premium-preview p'].map(selector=>{const e=document.querySelector(selector),s=getComputedStyle(e);let b=e;while(b&&getComputedStyle(b).backgroundColor==='rgba(0, 0, 0, 0)')b=b.parentElement;const bg=getComputedStyle(b).backgroundColor,a=luminance(s.color),z=luminance(bg);return {selector,foreground:s.color,background:bg,ratio:(Math.max(a,z)+.05)/(Math.min(a,z)+.05)};});
 });assert.ok(contrast.every(c=>c.ratio>=4.5));
 assert.deepEqual(errors,[]);assert.ok(results.every(x=>x.scroll<=x.width+1));fs.writeFileSync('docs/brand/previews/verification.json',JSON.stringify({results,errors,zoom,contrast,keyboard,form:'mocked error, retry, stable idempotency key, success and reload verified',mobileMenu:'Escape returns focus',faq:'Enter expands',overflow:results.filter(x=>x.scroll>x.width+1)},null,2));console.log('CHECKS COMPLETE',results.length,'route/viewports; zoom and contrast',JSON.stringify({zoom,contrast}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});


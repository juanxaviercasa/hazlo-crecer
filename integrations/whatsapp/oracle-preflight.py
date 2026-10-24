import json, subprocess, shutil, pathlib

root=pathlib.Path('/home/ubuntu/hazlo-whatsapp-pilot')
root.mkdir(mode=0o700,exist_ok=True)
images={}
for name in ['chatwoot/chatwoot:latest','evoapicloud/evolution-api:latest','pgvector/pgvector:pg16','postgres:16-alpine','redis:7-alpine']:
    raw=json.loads(subprocess.check_output(['docker','manifest','inspect',name,'--verbose'],text=True))
    manifests=raw if isinstance(raw,list) else [raw]
    candidates=[m for m in manifests if m.get('Descriptor',{}).get('platform',{}).get('architecture')=='arm64' and m.get('Descriptor',{}).get('platform',{}).get('os')=='linux']
    if not candidates:
        raise SystemExit('No verified ARM64 manifest: '+name)
    images[name]=name.split(':')[0]+'@'+candidates[0]['Descriptor']['digest']
(root/'images.json').write_text(json.dumps(images,indent=2))
print(json.dumps({'arm64_images':images,'free_gb':round(shutil.disk_usage(root).free/1024**3,1)}))

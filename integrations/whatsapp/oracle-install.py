"""Isolated pilot only. No WhatsApp instance, credentials for Meta or outbound sends."""
import json, pathlib, secrets, subprocess, os
root=pathlib.Path('/home/ubuntu/hazlo-whatsapp-pilot')
images=json.loads((root/'images.json').read_text())
config=root/'compose.json'
if config.exists():
    raise SystemExit('Pilot already prepared; refusing to overwrite configuration or secrets.')
os.umask(0o077)
secret={k:secrets.token_hex(32) for k in ['chatwoot_db','evolution_db','redis','rails','evolution_api']}
(root/'secrets.json').write_text(json.dumps(secret))
def base(image,volumes=None):
    return {'image':images[image],'restart':'unless-stopped','mem_limit':'1g','cpus':'0.5','logging':{'driver':'json-file','options':{'max-size':'10m','max-file':'3'}},**({'volumes':volumes} if volumes else {})}
cwenv={'RAILS_ENV':'production','NODE_ENV':'production','INSTALLATION_ENV':'docker','FRONTEND_URL':'http://localhost:3300','SECRET_KEY_BASE':secret['rails'],'ENABLE_ACCOUNT_SIGNUP':'false','POSTGRES_HOST':'chatwoot-db','POSTGRES_DATABASE':'chatwoot','POSTGRES_USERNAME':'chatwoot','POSTGRES_PASSWORD':secret['chatwoot_db'],'REDIS_URL':'redis://redis:6379','REDIS_PASSWORD':secret['redis'],'ACTIVE_STORAGE_SERVICE':'local','RAILS_LOG_TO_STDOUT':'true','RAILS_MAX_THREADS':'2','WEB_CONCURRENCY':'1','ENABLE_TELEMETRY':'false'}
rails={**base('chatwoot/chatwoot:latest',['chatwoot-storage:/app/storage']),'mem_limit':'3g','cpus':'1.0','environment':cwenv,'entrypoint':'docker/entrypoints/rails.sh','command':['bundle','exec','rails','s','-p','3000','-b','0.0.0.0'],'ports':['127.0.0.1:3300:3000'],'depends_on':{'chatwoot-db':{'condition':'service_healthy'},'redis':{'condition':'service_healthy'}}}
services={
 'chatwoot-db':{**base('pgvector/pgvector:pg16',['chatwoot-db:/var/lib/postgresql/data']),'environment':{'POSTGRES_DB':'chatwoot','POSTGRES_USER':'chatwoot','POSTGRES_PASSWORD':secret['chatwoot_db']},'healthcheck':{'test':['CMD-SHELL','pg_isready -U chatwoot -d chatwoot'],'interval':'10s','timeout':'5s','retries':12}},
 'evolution-db':{**base('postgres:16-alpine',['evolution-db:/var/lib/postgresql/data']),'environment':{'POSTGRES_DB':'evolution','POSTGRES_USER':'evolution','POSTGRES_PASSWORD':secret['evolution_db']},'healthcheck':{'test':['CMD-SHELL','pg_isready -U evolution -d evolution'],'interval':'10s','timeout':'5s','retries':12}},
 'redis':{**base('redis:7-alpine',['redis-data:/data']),'mem_limit':'256m','command':['redis-server','--appendonly','yes','--requirepass',secret['redis']],'healthcheck':{'test':['CMD','redis-cli','-a',secret['redis'],'ping'],'interval':'10s','timeout':'5s','retries':12}},
 'chatwoot':rails,
 'chatwoot-worker':{**rails,'mem_limit':'2g','ports':[],'entrypoint':[],'command':['bundle','exec','sidekiq','-C','config/sidekiq.yml']},
 'evolution':{**base('evoapicloud/evolution-api:latest',['evolution-instances:/evolution/instances']),'mem_limit':'2g','cpus':'1.0','ports':['127.0.0.1:8380:8080'],'environment':{'SERVER_PORT':'8080','SERVER_URL':'http://localhost:8380','AUTHENTICATION_API_KEY':secret['evolution_api'],'AUTHENTICATION_EXPOSE_IN_FETCH_INSTANCES':'false','DATABASE_PROVIDER':'postgresql','DATABASE_CONNECTION_URI':'postgresql://evolution:'+secret['evolution_db']+'@evolution-db:5432/evolution?schema=evolution_api','CACHE_REDIS_ENABLED':'true','CACHE_REDIS_URI':'redis://:'+secret['redis']+'@redis:6379/6','CHATWOOT_ENABLED':'true','OPENAI_ENABLED':'false','TYPEBOT_ENABLED':'false','TELEMETRY_ENABLED':'false','DATABASE_SAVE_DATA_HISTORIC':'false'},'depends_on':{'evolution-db':{'condition':'service_healthy'},'redis':{'condition':'service_healthy'}}}
}
config.write_text(json.dumps({'name':'hazlo-whatsapp-pilot','services':services,'volumes':{k:{} for k in ['chatwoot-db','evolution-db','redis-data','chatwoot-storage','evolution-instances']}},indent=2))
cmd=['docker','compose','-f',str(config)]
subprocess.run(cmd+['config','--quiet'],check=True)
subprocess.run(cmd+['pull'],check=True)
subprocess.run(cmd+['up','-d','chatwoot-db','evolution-db','redis'],check=True)
subprocess.run(cmd+['run','--rm','chatwoot','bundle','exec','rails','db:chatwoot_prepare'],check=True)
subprocess.run(cmd+['up','-d'],check=True)
print('Pilot started. Chatwoot loopback 3300; Evolution loopback 8380. No WhatsApp instance created.')

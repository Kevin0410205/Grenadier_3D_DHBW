/* Grenadier V40 · GitHub Pages V6
   Relative URLs + registration scope make this work both at /REPOSITORY/ and at a custom-domain root.
   GitHub Actions replaces __GRENADIER_BUILD_ID__ in the deployed copy on every push, making every
   deployment a detectable PWA update without requiring a reinstall. */
const BUILD_TOKEN='__GRENADIER_BUILD_ID__';
const BUILD_ID=BUILD_TOKEN.startsWith('__')?'local-github-v6':BUILD_TOKEN;
const SHELL_PREFIX='grenadier-shell-';
const VERSION=SHELL_PREFIX+BUILD_ID;
const MEDIA_CACHE='grenadier-media-v10-audit2';
const SCOPE=self.registration.scope;
const HOME=new URL('./index.html',SCOPE).href;
const CORE=['./manifest.webmanifest','./build-info.json','./install.html','./404.html','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png'];
const MEDIA=['./media/intro-wide.mp4','./media/intro-portrait.mp4'];
const HQ_MEDIA=['./media/intro-wide-hq-v10.mp4','./media/intro-portrait-hq-v10.mp4'];
const urlFor=p=>new URL(p,SCOPE).href;
const coreURLs=new Set([HOME,...CORE.map(urlFor)]);
const mediaURLs=new Set([...MEDIA,...HQ_MEDIA].map(urlFor));

async function mediaStatus(){const c=await caches.open(MEDIA_CACHE);return Promise.all(MEDIA.map(async p=>({name:p,ready:!!(await c.match(urlFor(p)))})));}
async function cacheMedia(force=false,client=null,includeHQ=false){const cache=await caches.open(MEDIA_CACHE);let stored=0,done=0;const errors=[];
 const selected=includeHQ?[...MEDIA,...HQ_MEDIA]:MEDIA;
 for(const p of selected){const u=urlFor(p);if(!force&&await cache.match(u)){done++;client?.postMessage({type:'CACHE_MEDIA_PROGRESS',done,total:selected.length});continue;}
  try{const response=await fetch(u,{cache:'no-cache'});if(!response.ok||response.status===206||response.type==='opaque')throw Error('Ungültige Antwort');
   await cache.put(u,response.clone());stored++;}catch(e){errors.push(p+': '+String(e));}finally{done++;client?.postMessage({type:'CACHE_MEDIA_PROGRESS',done,total:selected.length});}}
 return {stored,errors,media:await mediaStatus(),version:VERSION};}

self.addEventListener('install',event=>event.waitUntil((async()=>{
 try{const cache=await caches.open(VERSION);
  const shell=await fetch(new Request(HOME,{cache:'reload'}));
  if(!shell.ok||!shell.headers.get('content-type')?.includes('text/html'))throw Error('App-Startdatei nicht verfügbar');
  await cache.put(HOME,shell.clone());
  await Promise.all(CORE.map(async p=>{const u=urlFor(p),r=await fetch(new Request(u,{cache:'reload'}));if(!r.ok)throw Error('PWA-Datei fehlt: '+p);await cache.put(u,r.clone());}));
 }catch(error){await caches.delete(VERSION);throw error;}
})()));

self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 // Keep the currently activated shell and one predecessor as rollback safety. Remove legacy shells after migration.
 const shells=keys.filter(k=>k.startsWith(SHELL_PREFIX)&&k!==VERSION);
 const keep=shells.slice(-1);
 await Promise.all(keys.filter(k=>(k.startsWith(SHELL_PREFIX)&&k!==VERSION&&!keep.includes(k))||k.startsWith('grenadier-v40-stabil-')||k.startsWith('grenadier-media-v40')).map(k=>caches.delete(k)));
 await self.clients.claim();
})()));

async function serveMedia(req,url){
 // Online playback: preserve native HTTP byte-range streaming; avoid reading full cached MP4 into memory.
 if(req.headers.has('range')){
  try{const live=await fetch(req);if(live.ok)return live;}catch(_){/* Offline fallback below. */}
 }
 const cache=await caches.open(MEDIA_CACHE);const cached=await cache.match(url.href);
 if(cached){const range=req.headers.get('range');if(range){const match=/^bytes=(\d*)-(\d*)$/.exec(range.trim());
  if(match){const data=await cached.blob(),total=data.size;let start=match[1]?Number(match[1]):null,end=match[2]?Number(match[2]):null;
   if(start===null&&end!==null){start=Math.max(0,total-end);end=total-1;}else{start=start??0;end=end??total-1;}
   if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start>=total||start<0||end<start)return new Response(null,{status:416,headers:{'Content-Range':'bytes */'+total}});
   end=Math.min(end,total-1);return new Response(data.slice(start,end+1),{status:206,headers:{'Content-Type':'video/mp4','Content-Range':`bytes ${start}-${end}/${total}`,'Content-Length':String(end-start+1),'Accept-Ranges':'bytes'}});
  }}return cached;}
 try{return await fetch(req);}catch{return new Response('Video offline nicht gespeichert',{status:503});}
}

self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET')return;
 const url=new URL(req.url);if(url.origin!==self.location.origin||!url.href.startsWith(SCOPE))return;
 if(req.mode==='navigate'){event.respondWith((async()=>{const c=await caches.open(VERSION);const target=coreURLs.has(url.href)?url.href:HOME;const saved=await c.match(target);if(saved)return saved;try{return await fetch(req);}catch{const keys=(await caches.keys()).filter(k=>k.startsWith(SHELL_PREFIX)&&k!==VERSION).reverse();for(const key of keys){const old=await caches.open(key),fallback=await old.match(HOME);if(fallback)return fallback;}return new Response('App offline nicht verfügbar',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});}})());return;}
 if(mediaURLs.has(url.href)){event.respondWith(serveMedia(req,url));return;}
 if(coreURLs.has(url.href)){event.respondWith((async()=>{const c=await caches.open(VERSION);return await c.match(url.href)||await fetch(req);})());}
});

self.addEventListener('message',event=>{
 if(!event.source?.url || new URL(event.source.url).origin!==self.location.origin || !event.source.url.startsWith(SCOPE))return;
 const msg=event.data||{};
 if(msg.type==='SKIP_WAITING')self.skipWaiting();
 if(msg.type==='OFFLINE_STATUS')event.waitUntil((async()=>{const c=await caches.open(VERSION);event.source?.postMessage({type:'OFFLINE_STATUS',ready:!!(await c.match(HOME)),version:VERSION,buildId:BUILD_ID,media:await mediaStatus(),requestId:msg.requestId});})());
 if(msg.type==='CACHE_MEDIA')event.waitUntil((async()=>{const result=await cacheMedia(!!msg.force,event.source,!!msg.includeHQ);event.source?.postMessage({type:'CACHE_MEDIA_RESULT',...result});})());
});

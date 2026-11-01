 const CACHE='escala-marshall-v1';
  const ASSETS=['./','./index.html','./style.css','./manifest.json','./icon.svg'];
  self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.s
  kipWaiting();});
  self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=
  >k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
  self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).
  then(fr=>{if(fr.ok)caches.open(CACHE).then(c=>c.put(e.request,fr.clone()));return
  fr;}).catch(()=>caches.match('./index.html'))));});

  ---
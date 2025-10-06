// sw.js
const CACHE = 'trolling-depth-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});

self.addEventListener('activate', (e)=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
});

self.addEventListener('fetch', (e)=>{
  const req = e.request;
  e.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res=>{
      // Optional: Runtime-Caching nur für GET
      if (req.method==='GET' && res.status===200 && res.type==='basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c=>c.put(req, copy));
      }
      return res;
    }).catch(()=> cached || new Response('Offline', {status:503})))
  );
});

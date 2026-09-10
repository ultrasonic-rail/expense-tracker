self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(k => Promise.all(k.map(c => caches.delete(c)))));
  self.clients.claim();
});


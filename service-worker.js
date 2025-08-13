self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('clock-store').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/manifest.json',
      '/icon.png'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

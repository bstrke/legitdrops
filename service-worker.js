self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('app-cache').then((cache) => {
      return cache.addAll([
        '/',
        'https://github.com/bstrke/legitdrops/blob/main/path-to-icon-192x192.png',
        'https://github.com/bstrke/legitdrops/blob/main/path-to-icon-512x512.png',
        // Add more static assets if needed
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

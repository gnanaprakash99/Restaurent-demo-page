const CACHE_NAME = 'restaurant-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/img/bg-img.jpg',
  '/img/menu-1.jpg',
  '/img/menu-2.jpg',
  '/img/menu-3.jpg',
  '/img/menu-4.jpg',
  '/img/menu-5.jpg',
  '/img/menu-6.jpg',
  '/img/menu-7.jpg',
  '/img/menu-8.jpg',
  '/img/table-img.jpg',
  '/img/icon-192x192.png',
  '/img/icon-512x512.png'
];

// Install Service Worker and Cache Assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Fetch Assets from Cache when Offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Register service worker to make the website work offline
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('restaurant-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/hero-image.jpg', // Replace with your actual images
                '/menu-image.jpg', // Replace with your actual images
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

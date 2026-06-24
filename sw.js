const CACHE_NAME = "mario-js-v1";
const assets = [
    './',
  './index.html',
  './game.html',
  './css/style.css',
  './js/script.js',
  './sprites/pipe.png',
  './sprites/clouds.png',
  './sprites/mario.gif',
  './sprites/game-over.png'
];


self.addEventListener('install', e =>{
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assets);
        })
    );
});


self.addEventListener('fetch', e =>{
    e.respondWith(
        caches.match(e.request).then(response => {
         return response || fetch(e.request);
     })
    );
});
var staticCacheName = 'piggy-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/Pig-Game/jquery-3.2.1.js',
        '/Pig-Game/PigGame.js',
        '/Pig-Game/PigGameCss.css',
        '/Pig-Game/back.png',
        '/Pig-Game/Pig-Game-Dice-Images/dice-5.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});


self.addEventListener('activate', function(event) {
event.waitUntil( 
  caches.keys().then( function(cacheNames) {
    return Promise.all( cacheNames.filter(function(cache) {
      return cache.startsWith('piggy') && cache!= staticCacheName }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
    );
  })
 );
});

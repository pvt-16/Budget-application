var staticCacheName = 'piggy-v3';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
       cache.add('PigGame.js')
                          cache.add('PigGameCss.css')
                          cache.add('back.jpg')
                          cache.add('../Pig-Game-Dice-Images/dice-5.png') 
      return;
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

self.addEventListener('notificationclose', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});

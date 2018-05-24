var CACHE_NAME = 'ble-cache-v1';
var urlsToCache = [
  '/',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
  'https://d33wubrfki0l68.cloudfront.net/css/37f58c2668ae65fbfe1132d9505859f6261a14ce/css/app.css',
  'https://code.jquery.com/jquery-3.2.1.slim.min.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
  'https://d33wubrfki0l68.cloudfront.net/js/158a44e0bc59abfaf9d7dac473ff0c4f44753a3a/js/app.js',
  'https://unpkg.com/lunr/lunr.js',
  'https://d33wubrfki0l68.cloudfront.net/bundles/2639a19f1670d311559eb51171a47278f2730e9e.js',
  '/index.html',
  '/about.html',
  '/people.html',
  '/search.html'
];

self.addEventListener('install', function(event) {
  console.log("[Servicework] Install");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log("[ServiceWorker] Fetch");
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                //cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('activate', function(event) {
  console.log("[Servicework] Activate");
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

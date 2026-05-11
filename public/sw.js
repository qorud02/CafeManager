const CACHE_NAME = 'unicup-company-v2';
const urlsToCache = [
  '/',
  '/images/logo-uc-company.png',
  '/images/logo-unicup-coffee.png',
  '/images/slogan.jpg'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.log('Cache install failed:', error);
      })
  );
  self.skipWaiting();
});

// Fetch event - keep pages fresh, use cache as an offline fallback
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('/'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(() => {
        // Fallback for navigation requests when offline
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Background sync for offline form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(
      // Handle offline form submissions when back online
      syncContactForms()
    );
  }
});

async function syncContactForms() {
  // Implement offline form sync logic if needed
  console.log('Syncing offline form submissions...');
}

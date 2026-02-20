const CACHE_NAME = "my-app-cache-v1";

const urlsToCache = [
  "/",
  "index.html",
  "manifest.json",
  "icon-192.png",
  "vocab.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("Caching files...");
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// [EDIT] Nâng cấp phần fetch để tự động lưu những gì chưa có trong cache
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // 1. Nếu có file trong cache (do đã khai báo ở trên), lấy ra dùng ngay
      if (response) {
        return response;
      }

      // 2. Nếu chưa có, tải từ mạng về
      return fetch(event.request).then(networkResponse => {
        // Kiểm tra xem phản hồi có hợp lệ không
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // 3. [MỚI] Tải được file nào từ mạng thì copy và nhét ngay vào Cache
        // Để lần sau mất mạng vẫn có cái dùng
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      });
    })
  );
});
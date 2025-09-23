const CACHE_NAME = "dynamic-cache-v1";

// ไฟล์หลักที่ต้อง cache ตั้งแต่ติดตั้ง
const CORE_ASSETS = [
  "/",                // หน้าแรก
  "/index.html",
  "/app.js",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

// ติดตั้ง service worker → cache ไฟล์หลัก
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate service worker
self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// ดักการโหลด (fetch)
self.addEventListener("fetch", event => {
  const request = event.request;

  // ถ้าเป็นรูป (jpg, png, webp) → runtime cache
  if (request.destination === "image") {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;  // ถ้ามี cache → ส่งกลับ
        return fetch(request).then(response => {
          // ถ้า fetch สำเร็จ → cache ไว้
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
          return response;
        }).catch(() => cached); // offline → ส่ง cache ถ้ามี
      })
    );
    return;
  }

  // request อื่นๆ → network first fallback to cache
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});


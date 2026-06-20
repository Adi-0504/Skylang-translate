<<<<<<< HEAD
const CACHE_NAME = "skylang-v1";

const FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./engine.js",
  "./validator.js",
  "./syllable.js",
  "./glyphMap.js",
  "./i18n.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
=======
const CACHE_NAME = "skylang-v1";

const FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./engine.js",
  "./validator.js",
  "./syllable.js",
  "./glyphMap.js",
  "./i18n.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
>>>>>>> be29b5d36a7a3799c3ce96a645aaa06373de72f4
});
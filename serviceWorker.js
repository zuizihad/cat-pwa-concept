const catPussy = "zed-pwa-site-v1";
const assets = [
  "/",
  "/index.html",
  "css/style.css",
  "js/app.js",
  "images/cat1.jpg",
  "images/cat2.jpg",
  "images/cat3.jpg",
  "images/cat4.png",
  "images/cat5.jpg",
  "images/cat6.jpg",
  "images/cat7.jpg",
  "images/cat8.jpg",
  "images/cat9.jpg",
  "images/cat10.webp",
  "images/cat11.jpg",
  "images/cat12.png",
  "images/cat13.jpeg",
  "images/cat14.jpg",
  "images/cat15.jpg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.withUntil(
    caches.open(catPussy).then((cache) => {
      cache.addAll(assets);
    })
  );
});

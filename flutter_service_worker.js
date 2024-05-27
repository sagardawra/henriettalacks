'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "181af1899bb9f313d4c45933d63f66ad",
"index.html": "bb727fb8bf6eefd0e5196e9c35e9512e",
"/": "bb727fb8bf6eefd0e5196e9c35e9512e",
"main.dart.js": "86c76f31a1d42e0bdd992f5536baf437",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "096b78077535ceae85fc2c3b1d0d9bfb",
"assets/AssetManifest.json": "1d51785c1474d70d201f77d3bd463db1",
"assets/NOTICES": "e8a85164a4de89f33caf179f14fda2db",
"assets/FontManifest.json": "437548be9ae88edad827b1671b3ce2bf",
"assets/AssetManifest.bin.json": "9eecf39737ccfd728cc1e816e0a053a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "68a5cc6ff6dc56d983521bd662af9359",
"assets/fonts/vultures/Taken-by-Vultures-Demo.otf": "dd13e484ac9bd1243711699de6f330b4",
"assets/fonts/WixMadeforDisplay-VariableFont_wght.ttf": "cab86c06fcb5cf83a07812446c575af1",
"assets/fonts/MaterialIcons-Regular.otf": "fd36a16819423120fc17ce4e8e081d88",
"assets/fonts/operetta/Operetta12-Regular.otf": "2fdb73c396909063e43204b782cf88ea",
"assets/assets/helaforeground.png": "95e86e5203d981ca7d62ad278d9be4a4",
"assets/assets/filmImage1.png": "b691094a94d23ab0a01c7479691f9cae",
"assets/assets/producImg1.png": "71ae1e2f0d476d9715da47411d58eb0d",
"assets/assets/helaVert.png": "dc93120ba0c73242b61cc03e953f33a9",
"assets/assets/filmImage2.png": "aedf757015ffc577fc91e822aa0c2990",
"assets/assets/consortTxt.png": "d2e2d3c34135033da7e97d6dc07bec4a",
"assets/assets/banner.png": "458f5427f85a5bb309aa0429c1ca88af",
"assets/assets/drawer.png": "4993ace32005ea58005271c1d8898bbd",
"assets/assets/horizontalListRect.png": "5dd0cb6bb8ddff6ff9ca5f5e5a5b5061",
"assets/assets/clinicalResearch.png": "e65479fa68c06d2736a014334d9be869",
"assets/assets/community.png": "59bde996211fe50f7ea7c5ffecf3ca1a",
"assets/assets/helablackwhite.png": "1069b1a0adba35413541bd774398b34c",
"assets/assets/videoBanne.png": "964d4654a127cbbba39ec3db2c906399",
"assets/assets/videoBack.png": "b19c4284dba0779d08a8599224488793",
"assets/assets/joinusMobile.png": "c8fdcb9f09e00d5532a83d9b6be3228a",
"assets/assets/joinus.png": "0d9c635c4145b88998d09f09f26d91e8",
"assets/assets/pressImg1.png": "98e5aa8519e006923254cd1ca33330cd",
"assets/assets/scientist.png": "c67bf23163baaa91c82866efaa0e3f1f",
"assets/assets/pressImg2.png": "fb3d0b5ebbadc0d7dcec983fae0fd84b",
"assets/assets/pressImg3.png": "bd0cd1c8d1d0ef034bbe117c3a748d63",
"assets/assets/logo.png": "e9a093771400d577840131b5fad8eb3d",
"assets/assets/socialFeed.png": "d30073e5f59ec32836811658410301c1",
"assets/assets/logonew.png": "40e623f8cf8aca36e6bccf922b8406e0",
"assets/assets/pressImg4.png": "7f367c759341ec0fdb4c67320e864702",
"assets/assets/helaVideo.mp4": "95f19255f670b0b9625366f7f67da31f",
"assets/assets/hela.png": "43ba9deaefe1d0bbe4a18bf69f006992",
"assets/assets/pressImg5.png": "6a33f0d355866ad87c0dbf282e1c73df",
"assets/assets/backImg.png": "69205126cc3bd9a711b32d71921f054f",
"assets/assets/education.png": "9495109a6423005a8b689fca2e23e489",
"assets/assets/consort.png": "953c087defc03c20731fc87bc6988da1",
"assets/assets/socialFeedMobilImg.png": "9b59749693037b1bc9da7cd5fe05f9f2",
"assets/assets/productImg2.png": "b19e39f2788ca0308fe43278f15d0334",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "181af1899bb9f313d4c45933d63f66ad",
"index.html": "c389d950a3b59e806acac395166e5913",
"/": "c389d950a3b59e806acac395166e5913",
"main.dart.js": "fc0328d8c1fdf5add61cfdb59e590e62",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "096b78077535ceae85fc2c3b1d0d9bfb",
"assets/AssetManifest.json": "03fe15c4900762aa91e0d84502920dec",
"assets/NOTICES": "4908f1de1ac4a6b08aba13305d79f37c",
"assets/FontManifest.json": "437548be9ae88edad827b1671b3ce2bf",
"assets/AssetManifest.bin.json": "87ae70d5501217f50067e2944f6303b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4c4befa3a387d55a200b847c68ff8994",
"assets/fonts/vultures/Taken-by-Vultures-Demo.otf": "dd13e484ac9bd1243711699de6f330b4",
"assets/fonts/WixMadeforDisplay-VariableFont_wght.ttf": "cab86c06fcb5cf83a07812446c575af1",
"assets/fonts/MaterialIcons-Regular.otf": "9e623aee84bfc924faf686363927beb8",
"assets/fonts/operetta/Operetta12-Regular.otf": "2fdb73c396909063e43204b782cf88ea",
"assets/assets/filmImage1.png": "195f87bb3d35aaf54cb3dc7b44f574c3",
"assets/assets/producImg1.png": "1272e35409bee6b5404269664012ea00",
"assets/assets/helaVert.png": "dc93120ba0c73242b61cc03e953f33a9",
"assets/assets/filmImage2.png": "0c1ac3256dee1c6dafc00e10ad02b96e",
"assets/assets/banner.png": "2bb5287ca9a588bf9e3a0862464ba5e9",
"assets/assets/clinicalResearch.png": "d404a9cd0493857f2a9f243ef306c7f3",
"assets/assets/community.png": "a1b26491bf33dab04451035647911456",
"assets/assets/helablackwhite.png": "a27011b78fa6be6659ebde4d5f5b3199",
"assets/assets/pressImg1.png": "d0b3d26b6774c61746d35987eab36a5a",
"assets/assets/scientist.png": "8addcd0f8e5649df6e603459274d29d9",
"assets/assets/pressImg2.png": "a6756c66513489903c01fef9683dc86d",
"assets/assets/pressImg3.png": "c256fe4831c93501618194c0abb8fb76",
"assets/assets/logo.png": "e5bd1a059f984793917d1f007a53bf3c",
"assets/assets/socialFeed.png": "740355c56149a952dee2cc79f0875bc4",
"assets/assets/logonew.png": "4d6c2c91359590e14b8870072a2f6859",
"assets/assets/pressImg4.png": "2c5e4a8f5ac77872650215966dd18e7b",
"assets/assets/helaVideo.mp4": "945af6e8dc62fff8a88f9e85a214c386",
"assets/assets/pressImg5.png": "72b25507a0fc8bb6795325610f18775b",
"assets/assets/playBtn.png": "328118a55bfdebc287ad3c7d73919fd5",
"assets/assets/cellsVideoCover.png": "0f87bd25e79a7d59e0e398fa6fa1ab00",
"assets/assets/backImg.png": "11e64b81f917b70f02fe80c7aa87c30f",
"assets/assets/education.png": "8dd8988458030f5f88387de0965aa3a6",
"assets/assets/consort.png": "92afdd94eed5f4194d067c87b545ca79",
"assets/assets/helaImgWithTxt.png": "682cc971d8091ce89b1ced6203bb75bc",
"assets/assets/socialFeedMobilImg.png": "24e76cef10f533401354e26c744cbfe3",
"assets/assets/productImg2.png": "2e1c47144505c7d9ed46ccc644b308a4",
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

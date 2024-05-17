const CACHE_VERSION = "1.0.0.3",
    CURRENT_CACHES = {
        assets: "assets-cache-v1.0.0.3",
        static: "static-cache-v1.0.0.3"
    };
self.addEventListener("install", (e => {
    e.waitUntil(caches.open(CURRENT_CACHES.static).then((function(e) {
        return e.addAll(["../../vendor.bundle.js", "../../app.bundle.js", "../../app.css", "../video/hero.mp4", "../video/hero_mobile.mp4", "../mp3/audio-site.mp3", "../draco/draco_decoder.wasm", "../draco/gltf/draco_decoder.wasm", "../glb/coffee.min.gltf", "../glb/globe.min.gltf", "../glb/mouse.min.gltf"])
    })))
})), self.addEventListener("activate", (e => {
    const t = new Set(Object.values(CURRENT_CACHES));
    e.waitUntil(caches.keys().then((e => Promise.all(e.map((e => {
        if (!t.has(e)) return caches.delete(e)
    }))))))
})), self.addEventListener("fetch", (e => {
    e.respondWith(caches.open(CURRENT_CACHES.assets).then((t => t.match(e.request).then((s => s || fetch(e.request.clone()).then((s => (s.status < 400 && s.headers.has("content-type") && (s.headers.get("content-type").match(/^font\//i) || s.headers.get("content-type").match(/^image\//i)) && t.put(e.request, s.clone()), s))))).catch((e => {
        throw e
    })))))
}));
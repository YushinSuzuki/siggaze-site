// ネットのないところでも開くための Service Worker。npm run publish が版と一覧を書き込んで置く。
// 開くものは「ネットを先に試して、つながらない・遅いときは手元の控え」。つながっていれば常に最新が出る。
const VERSION = 'dfc4532733c9';
const FILES = ["/blog","/blog/fonts.css","/blog/img/a1-colors.jpg","/blog/img/a2-boxes.jpg","/blog/img/a2-boxes.mp4","/blog/img/a4-zoom.jpg","/blog/img/a4-zoom.mp4","/blog/img/b1-slots.jpg","/blog/img/b1-slots.mp4","/blog/img/b2-caged-penta.jpg","/blog/img/c0-scalemix.jpg","/blog/img/c1-eye.jpg","/blog/img/c1-eye.mp4","/blog/img/c2-order.jpg","/blog/img/c2-order.mp4","/blog/img/c3-rings.jpg","/blog/img/d1-dia.jpg","/blog/img/d1-dia.mp4","/blog/img/d2-chordmix.jpg","/blog/img/d2-chordmix.mp4","/blog/img/e1-prog.jpg","/blog/img/e1-prog.mp4","/blog/img/e3-link.jpg","/blog/img/e3-link.mp4","/blog/img/e4-popup.jpg","/blog/img/f1-secdom.jpg","/blog/img/f1-secdom.mp4","/blog/img/f2-borrowed.jpg","/blog/img/f2-borrowed.mp4","/blog/img/f3-note.jpg","/blog/img/g1-add.jpg","/blog/img/g1-add.mp4","/blog/img/h1-cards.jpg","/blog/img/h2-swap.jpg","/blog/img/h2-swap.mp4","/blog/img/h3-bar.jpg","/blog/img/h3-bar.mp4","/blog/img/h4-circle.jpg","/blog/img/h4-circle.mp4","/blog/img/h5-settings.jpg","/blog/img/s1-key.jpg","/blog/img/s1-key.mp4","/manifest.webmanifest","/icon-180.png","/icon-192.png","/icon-512.png"];
const CACHE = `fretform-${VERSION}`;
const WAIT_MS = 2500;
const BASE = new URL(self.registration.scope).pathname.replace(/\/$/, '');

/** …/a190ab17fe と …/a190ab17fe/ と …/index.html は同じページ */
const keyOf = (url) => {
  const u = new URL(url);
  return u.origin + u.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '');
};

const store = async (cache, path) => {
  const res = await fetch(new Request(BASE + path, { cache: 'reload' }));
  if (!res.ok || res.redirected) throw new Error(`${path}: ${res.status}`);
  await cache.put(keyOf(new URL(BASE + path, self.location.href)), res);
};

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // アプリ本体が取れなければ入れ替えない（古い版のまま動く）。ブログの動画は取れた分だけでよい
    await store(cache, '');
    await Promise.allSettled(FILES.map((p) => store(cache, p)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('fretform-') && k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

/** 動画は Safari が範囲を指定して取りに来るので、控えから切り出して返す */
const ranged = async (req) => {
  const hit = await caches.match(keyOf(req.url), { cacheName: CACHE });
  if (!hit) return fetch(req);
  const buf = await hit.arrayBuffer();
  const m = /bytes=(\d*)-(\d*)/.exec(req.headers.get('range') ?? '');
  const size = buf.byteLength;
  const start = m?.[1] ? Number(m[1]) : m?.[2] ? Math.max(0, size - Number(m[2])) : 0;
  const end = m?.[1] && m[2] ? Math.min(size - 1, Number(m[2])) : size - 1;
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      'Content-Type': hit.headers.get('Content-Type') ?? 'video/mp4',
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes',
    },
  });
};

const netFirst = (e) => new Promise((resolve, reject) => {
  const key = keyOf(e.request.url);
  const local = () => caches.match(key, { cacheName: CACHE });
  const net = fetch(e.request).then(async (res) => {
    // 転送（…/ → 末尾なし）は控えない。控えた転送をページの表示に使うと Safari がエラーにする
    if (res.ok && !res.redirected) await (await caches.open(CACHE)).put(key, res.clone());
    return res;
  });
  e.waitUntil(net.catch(() => undefined));   // 控えを先に返しても、最新の取得は最後まで続ける
  const timer = setTimeout(async () => { const hit = await local(); if (hit) resolve(hit); }, WAIT_MS);
  net.then((res) => { clearTimeout(timer); resolve(res); }, async (err) => {
    clearTimeout(timer);
    const hit = await local();
    if (hit) resolve(hit); else reject(err);
  });
});

self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin || !u.pathname.startsWith(BASE)) return;
  if (u.pathname.endsWith('/sw.js')) return;
  e.respondWith(e.request.headers.has('range') ? ranged(e.request) : netFirst(e));
});

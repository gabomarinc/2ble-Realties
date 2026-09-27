// Pre-renderiza cada página (home, blog y artículos, en español e inglés) a HTML estático después de `vite build`.
// Así buscadores y asistentes de IA leen todo el contenido sin ejecutar JavaScript,
// y el navegador pinta la página antes de que cargue React.
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist';
const SITE_URL = 'https://2ble.realty';

const template = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');
const { render, routes } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);

// CSS en línea: elimina la petición que bloquea el renderizado
const cssMatch = template.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (!cssMatch) throw new Error('No se encontró el CSS en dist/index.html');
const css = await fs.readFile(path.join(DIST, cssMatch[1]), 'utf8');

// El HTML ya trae todo el contenido: React (hidratación) se carga justo después del primer pintado
// para no competir con él. El SW se registra más tarde aún.
const jsMatch = template.match(/<script type="module" crossorigin src="(\/assets\/[^"]+\.js)"><\/script>/);
if (!jsMatch) throw new Error('No se encontró el JS en dist/index.html');
const swMatch = template.match(/<script id="vite-plugin-pwa:register-sw"[^>]*><\/script>/);
const deferredJs = `<script>requestAnimationFrame(function(){setTimeout(function(){var s=document.createElement('script');s.type='module';s.src='${jsMatch[1]}';document.head.appendChild(s)},0)});addEventListener('load',function(){setTimeout(function(){var s=document.createElement('script');s.src='/registerSW.js';document.head.appendChild(s)},3000)})</script>`;

const pages = routes();
for (const { route, path: urlPath, lang } of pages) {
  const { html, head } = render(route);
  const page = template
    .replace('<html lang="es">', `<html lang="${lang}">`)
    .replace('<!--app-head-->', () => head)
    .replace(cssMatch[0], () => `<style>${css}</style>`)
    .replace('<!--app-html-->', () => html)
    .replace(swMatch ? swMatch[0] : '', '')
    .replace(jsMatch[0], () => deferredJs);

  const outDir = path.join(DIST, urlPath);
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, 'index.html'), page);
  console.log(`prerender: ${urlPath} (${Math.round(page.length / 1024)} KB)`);
}

// Sitemap con hreflang: cada página enlaza su versión en el otro idioma
const today = new Date().toISOString().slice(0, 10);
const urls = pages.map(({ path: p, alt, lang, lastmod }) => {
  const es = lang === 'es' ? p : alt;
  const en = lang === 'en' ? p : alt;
  return `  <url>
    <loc>${SITE_URL}${p}</loc>
    <lastmod>${lastmod ?? today}</lastmod>
    <xhtml:link rel="alternate" hreflang="es" href="${SITE_URL}${es}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${es}"/>
  </url>`;
});
await fs.writeFile(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`);

await fs.rm('dist-ssr', { recursive: true, force: true });

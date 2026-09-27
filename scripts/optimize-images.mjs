// Convierte las imágenes originales de images-src/ a WebP optimizado en public/img/
// y genera image-meta.ts con las dimensiones (para width/height y srcset).
// Uso: npm run images
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const SRC = 'images-src';
const OUT = 'public/img';
const SMALL_WIDTH = 640;
const MEDIUM_WIDTH = 1024;

// Reglas especiales por archivo (el resto usa maxWidth 1600 + variante pequeña)
const RULES = {
  'logo-blanco.png': { height: 76, small: false },
  'logo-negro.png': { height: 76, small: false },
  'logo-davivienda.png': { height: 352, small: false },
  'logos-aliados-2.jpg': { width: 1000, small: false },
  'foto-interior-2.jpg': { width: 800, small: false },
  'foto-interior-3.jpg': { width: 480, small: false },
  'foto-interior-4.jpg': { width: 560, small: false },
  'foto-jonathan.jpg': { width: 800 },
  'foto-yiniva.jpg': { width: 800 },
  'liriola.jpg': { width: 800 },
  'foto-prospero.jpg': { width: 800 },
};
const SKIP = new Set(['logo.png', 'logos.png']);

const slug = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[^a-z0-9.]+/g, '-').replace(/^-|-$/g, '');

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(jpe?g|png)$/i.test(e.name)) out.push(p);
  }
  return out;
}

const meta = {};
await fs.rm(OUT, { recursive: true, force: true });

for (const file of await walk(SRC)) {
  const name = path.basename(file);
  if (SKIP.has(name)) continue;
  const rule = RULES[name] ?? { width: 1600 };
  const rel = path.relative(SRC, file).replace(/^fotos-2bleweb/, 'zonas');
  const outRel = rel.split(path.sep).map(slug).join('/').replace(/\.(jpe?g|png)$/i, '.webp');
  const outPath = path.join(OUT, outRel);
  await fs.mkdir(path.dirname(outPath), { recursive: true });

  const resize = rule.height
    ? { height: rule.height, withoutEnlargement: true }
    : { width: rule.width, withoutEnlargement: true };
  const info = await sharp(file).rotate().resize(resize).webp({ quality: 72, effort: 6 }).toFile(outPath);

  const key = `img/${outRel}`;
  meta[key] = { w: info.width, h: info.height };

  if (rule.small !== false && info.width > SMALL_WIDTH) {
    await sharp(file).rotate().resize({ width: SMALL_WIDTH }).webp({ quality: 70, effort: 6 })
      .toFile(outPath.replace(/\.webp$/, '-sm.webp'));
    meta[key].sm = true;
  }
  if (rule.small !== false && info.width > MEDIUM_WIDTH + 200) {
    await sharp(file).rotate().resize({ width: MEDIUM_WIDTH }).webp({ quality: 70, effort: 6 })
      .toFile(outPath.replace(/\.webp$/, '-md.webp'));
    meta[key].md = true;
  }
  console.log(`${file} -> ${key} (${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB)`);
}

// Imagen para compartir en redes (Open Graph) 1200x630
await sharp(path.join(SRC, 'fotos-2bleweb/Ciudad/portada.jpg'))
  .resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 78, mozjpeg: true })
  .toFile('public/og-image.jpg');



// Avatares de autores del blog (160x160, recorte desde arriba)
for (const [name, src] of [['jonathan', 'foto-jonathan.jpg'], ['yiniva', 'foto-yiniva.jpg'], ['liriola', 'liriola.jpg']]) {
  const out = `img/avatar-${name}.webp`;
  await sharp(path.join(SRC, src)).rotate().resize(160, 160, { fit: 'cover', position: 'top' })
    .webp({ quality: 75 }).toFile(path.join('public', out));
  meta[out] = { w: 160, h: 160 };
}

// Imágenes para redes (Open Graph 1200x630) de cada artículo del blog
await fs.mkdir('public/og', { recursive: true });
for (const [out, src] of [
  ['comprar-propiedad-extranjero', 'fotos-2bleweb/Ciudad/ocean-reef-the-palms-1350.jpg'],
  ['mejores-zonas-invertir', 'fotos-2bleweb/Ciudad/portada.jpg'],
]) {
  await sharp(path.join(SRC, src)).rotate().resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 78, mozjpeg: true }).toFile(`public/og/${out}.jpg`);
}

// Íconos (favicon, apple-touch, PWA): "2BLE" dorado sobre fondo navy
const logoMeta = await sharp(path.join(SRC, 'logo-negro.png')).metadata();
const mark = await sharp(path.join(SRC, 'logo-negro.png'))
  .extract({ left: 0, top: 0, width: logoMeta.width, height: Math.round(logoMeta.height * 0.62) })
  .trim().toBuffer();
for (const size of [48, 180, 192, 512]) {
  const inner = await sharp(mark).resize({ width: Math.round(size * 0.78) }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: '#0B1221' } })
    .composite([{ input: inner, gravity: 'center' }]).png()
    .toFile(`public/${size === 180 ? 'apple-touch-icon' : `icon-${size}`}.png`);
}

const sorted = Object.fromEntries(Object.entries(meta).sort(([a], [b]) => a.localeCompare(b)));
await fs.writeFile('image-meta.ts',
  '// Generado por scripts/optimize-images.mjs — no editar a mano.\n' +
  'export const IMAGE_META: Record<string, { w: number; h: number; sm?: boolean; md?: boolean }> = ' +
  JSON.stringify(sorted, null, 2) + ';\n');

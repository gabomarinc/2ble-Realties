# Instrucciones de Despliegue en Hostinger

Este proyecto ha sido preparado para funcionar en servidores de hosting compartido (como Hostinger) utilizando un servidor web Apache.

## Archivos para subir
Debes subir ÚNICAMENTE el contenido de la carpeta `dist/`. No subas todo el proyecto, solo lo que está dentro de `dist`.

Normalmente, en Hostinger, el lugar donde debes subir estos archivos es la carpeta `public_html`.

## Pasos para subir el proyecto:
1.  **Generar la carpeta dist**: corre `npm run build`. Esto compila y además **pre-renderiza** el HTML de `/` (español) y `/en/` (inglés), y genera `sitemap.xml`. Si agregas o cambias fotos, ponlas en `images-src/` y corre antes `npm run images` (las convierte a WebP en `public/img/`).
2.  Accede a tu panel de Hostinger -> **Administrador de Archivos**.
3.  Navega hasta la carpeta `public_html`.
4.  Sube todos los archivos y carpetas que están dentro de la carpeta `dist` de este proyecto.
5.  Asegúrate de que el archivo `.htaccess` también se haya subido (está incluido en la carpeta `dist`).

## ¿Qué incluimos para Hostinger?
*   **Configuración de Rutas (.htaccess):** Permite que si el usuario recarga la página, el servidor sepa que debe cargar el `index.html`.
*   **Optimización de Caché:** Reglas añadidas al `.htaccess` para que las imágenes y archivos estáticos carguen más rápido en Hostinger.
*   **Archivos Optimizados:** El código ha sido minificado y transformado para producción.

## Estructura final sugerida en Hostinger:
```
public_html/
├── assets/
├── en/index.html        ← versión en inglés
├── img/                 ← fotos optimizadas (WebP)
├── .htaccess
├── index.html           ← versión en español
├── robots.txt
├── sitemap.xml
├── llms.txt             ← resumen para ChatGPT, Gemini, etc.
├── og-image.jpg
├── icon-*.png, apple-touch-icon.png
└── manifest.webmanifest, sw.js, registerSW.js, workbox-*.js
```

**Importante:** antes de subir, borra de `public_html` las carpetas/archivos viejos (`fotos-2bleweb/`, `*.jpg`, `*.png` sueltos, `pwa-*.svg`) para que no queden duplicados.

## Después de publicar
1. En Google Search Console, verifica `https://2ble.realty` y envía `https://2ble.realty/sitemap.xml`.
2. Prueba los datos estructurados en https://search.google.com/test/rich-results.
3. Mide en https://pagespeed.web.dev/.

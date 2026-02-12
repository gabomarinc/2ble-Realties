# Instrucciones de Despliegue en Hostinger

Este proyecto ha sido preparado para funcionar en servidores de hosting compartido (como Hostinger) utilizando un servidor web Apache.

## Archivos para subir
Debes subir ÚNICAMENTE el contenido de la carpeta `dist/`. No subas todo el proyecto, solo lo que está dentro de `dist`.

Normalmente, en Hostinger, el lugar donde debes subir estos archivos es la carpeta `public_html`.

## Pasos para subir el proyecto:
1.  **Generar la carpeta dist** (Ya lo hice por ti, pero si haces cambios futuros, corre `npm run build`).
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
├── fotos-2bleweb/
├── .htaccess
├── index.html
├── manifest.webmanifest
└── ... (otros archivos de imagen)
```

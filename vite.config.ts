import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// @ts-ignore
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    // Rutas absolutas: el sitio vive en la raíz del dominio y tiene la versión /en/
    base: '/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'script-defer',
        manifest: {
          name: '2Ble Realty',
          short_name: '2Ble',
          description: 'Bienes raíces e inversión inmobiliaria en Panamá',
          lang: 'es',
          start_url: '/',
          theme_color: '#0B1221',
          background_color: '#0B1221',
          display: 'standalone',
          icons: [
            { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
            { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
          ]
        },
        workbox: {
          // El HTML se pre-renderiza después del build: no se precachea, siempre viene de la red
          globPatterns: ['assets/*.{js,css}', 'assets/*-latin-wght-*.woff2'],
          navigateFallback: null
        }
      })
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});

// Entrada para el pre-renderizado (scripts/prerender.mjs): genera el HTML estático de cada página.
import React from 'react';
import { renderToString } from 'react-dom/server';
import Root from './components/Root';
import { allRoutes, Route } from './routes';
import { renderHead } from './seo';
import { blogIndexHead, postHead } from './blog';

function headFor(route: Route) {
  if (route.kind === 'post') return postHead(route.post);
  if (route.kind === 'blog') return blogIndexHead(route.lang);
  return renderHead(route.lang);
}

export function render(route: Route) {
  return {
    html: renderToString(<React.StrictMode><Root route={route} /></React.StrictMode>),
    head: headFor(route),
  };
}

/** Rutas a pre-renderizar, con su fecha (para el sitemap) */
export function routes() {
  return allRoutes().map((route) => ({
    route,
    path: route.path,
    alt: route.alt,
    lang: route.lang,
    lastmod: route.kind === 'post' ? route.post.dateModified : undefined,
  }));
}

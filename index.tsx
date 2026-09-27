import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/Root';
import { matchRoute } from './routes';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// La página (home, blog o artículo) y el idioma salen de la URL
const route = matchRoute(window.location.pathname);
const app = (
  <React.StrictMode>
    <Root route={route} />
  </React.StrictMode>
);

// En producción el HTML viene pre-renderizado: se hidrata. En desarrollo se monta desde cero.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}

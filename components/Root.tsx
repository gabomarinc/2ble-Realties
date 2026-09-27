import React from 'react';
import App from '../App';
import { Route } from '../routes';
import BlogIndex from './blog/BlogIndex';
import BlogPost from './blog/BlogPost';

/** Elige la página según la ruta (misma lógica en el pre-renderizado y en el navegador) */
const Root: React.FC<{ route: Route }> = ({ route }) => {
    switch (route.kind) {
        case 'blog':
            return <BlogIndex lang={route.lang} altHref={route.alt} />;
        case 'post':
            return <BlogPost post={route.post} altHref={route.alt} />;
        default:
            return <App lang={route.lang} />;
    }
};

export default Root;

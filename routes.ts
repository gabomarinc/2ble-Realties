import { Language } from './types';
import { Post } from './blog/types';
import { allPosts, translationOf } from './blog';
import { blogPath, homePath, postPath } from './blog/paths';

export type Route =
    | { kind: 'home'; path: string; lang: Language; alt: string }
    | { kind: 'blog'; path: string; lang: Language; alt: string }
    | { kind: 'post'; path: string; lang: Language; alt: string; post: Post };

/** Todas las páginas del sitio (se pre-renderizan una por una) */
export function allRoutes(): Route[] {
    const routes: Route[] = [];
    for (const lang of ['es', 'en'] as Language[]) {
        const other: Language = lang === 'es' ? 'en' : 'es';
        routes.push({ kind: 'home', path: homePath(lang), lang, alt: homePath(other) });
        routes.push({ kind: 'blog', path: blogPath(lang), lang, alt: blogPath(other) });
    }
    for (const post of allPosts()) {
        const other: Language = post.lang === 'es' ? 'en' : 'es';
        const translation = translationOf(post, other);
        routes.push({
            kind: 'post',
            path: postPath(post.lang, post.slug),
            lang: post.lang,
            alt: translation ? postPath(other, translation.slug) : blogPath(other),
            post,
        });
    }
    return routes;
}

/** Ruta para una URL; si no existe, la home del idioma (así el 404 se ve como la home) */
export function matchRoute(pathname: string): Route {
    const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
    const routes = allRoutes();
    return (
        routes.find((r) => r.path === path) ??
        routes.find((r) => r.kind === 'home' && r.lang === (path.startsWith('/en/') ? 'en' : 'es'))!
    );
}

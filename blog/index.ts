import { Language } from '../types';
import { SITE_URL, ORG_ID, orgNode, websiteNode, faqNode, breadcrumbNode, headTags } from '../seo';
import { Post } from './types';
import { AUTHORS } from './authors';
import { blogPath, homePath, postPath } from './paths';
import * as comprarExtranjero from './posts/comprar-propiedad-extranjero';
import * as mejoresZonas from './posts/mejores-zonas-invertir';

// Orden: el más reciente primero. Para publicar un artículo nuevo, agrégalo aquí.
const ALL: Post[] = [mejoresZonas.es, comprarExtranjero.es, mejoresZonas.en, comprarExtranjero.en];

export const postsFor = (lang: Language) => ALL.filter((p) => p.lang === lang);
export const allPosts = () => ALL;

/** La misma nota en el otro idioma */
export const translationOf = (post: Post, lang: Language) => ALL.find((p) => p.key === post.key && p.lang === lang);

export const BLOG_TEXT = {
    es: {
        blog: 'Blog',
        home: 'Inicio',
        indexTitle: 'Guías para comprar e invertir en bienes raíces en Panamá',
        indexSeoTitle: 'Blog de bienes raíces e inversión en Panamá | 2Ble Realty',
        indexDescription:
            'Guías y análisis de nuestros asesores para comprar e invertir en bienes raíces en Panamá: proceso de compra, mejores zonas, proyectos y consejos.',
        indexIntro:
            'Información clara y práctica de nuestros asesores para que tomes mejores decisiones al comprar o invertir en Panamá.',
        readMore: 'Leer artículo',
        minRead: 'min de lectura',
        published: 'Publicado',
        updated: 'Actualizado',
        by: 'Por',
        answer: 'Respuesta rápida',
        takeaways: 'Puntos clave',
        toc: 'En este artículo',
        faq: 'Preguntas frecuentes',
        writtenBy: 'Escrito por',
        talkTo: 'Hablar con',
        related: 'Sigue leyendo',
        ctaTitle: '¿Estás pensando en invertir en Panamá?',
        ctaText: 'Cuéntanos qué buscas y te ayudamos a encontrar la opción que encaja con tu objetivo y presupuesto.',
        ctaButton: 'Escríbenos por WhatsApp',
        disclaimer:
            'Este artículo es informativo y no constituye asesoría legal, fiscal ni financiera. Los precios mencionados son referenciales, están sujetos a cambios y disponibilidad, y no incluyen gastos de cierre. Antes de comprar, consulta con un abogado idóneo en Panamá.',
        teaserLabel: 'Blog',
        teaserTitle: 'Guías para invertir en Panamá',
        teaserAll: 'Ver todos los artículos',
    },
    en: {
        blog: 'Blog',
        home: 'Home',
        indexTitle: 'Guides to buying and investing in Panama real estate',
        indexSeoTitle: 'Panama Real Estate & Investment Blog | 2Ble Realty',
        indexDescription:
            'Guides and insights from our advisors on buying and investing in Panama real estate: the buying process, best areas, projects and practical tips.',
        indexIntro: 'Clear, practical information from our advisors to help you make better decisions when buying or investing in Panama.',
        readMore: 'Read article',
        minRead: 'min read',
        published: 'Published',
        updated: 'Updated',
        by: 'By',
        answer: 'Quick answer',
        takeaways: 'Key takeaways',
        toc: 'In this article',
        faq: 'Frequently asked questions',
        writtenBy: 'Written by',
        talkTo: 'Talk to',
        related: 'Keep reading',
        ctaTitle: 'Thinking about investing in Panama?',
        ctaText: 'Tell us what you are looking for and we will help you find the option that fits your goal and budget.',
        ctaButton: 'Message us on WhatsApp',
        disclaimer:
            'This article is for information only and does not constitute legal, tax or financial advice. Prices mentioned are indicative, subject to change and availability, and exclude closing costs. Before buying, consult a licensed attorney in Panama.',
        teaserLabel: 'Blog',
        teaserTitle: 'Guides to investing in Panama',
        teaserAll: 'View all articles',
    },
} as const;

const MONTHS = {
    es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};

/** Formato fijo (igual en servidor y navegador, sin depender de Intl) */
export function formatDate(iso: string, lang: Language) {
    const [y, m, d] = iso.split('-').map(Number);
    return lang === 'es' ? `${d} de ${MONTHS.es[m - 1]} de ${y}` : `${MONTHS.en[m - 1]} ${d}, ${y}`;
}

const abs = (path: string) => `${SITE_URL}${path}`;

function personNode(post: Post) {
    const a = AUTHORS[post.author];
    return {
        '@type': 'Person',
        '@id': `${SITE_URL}/#${post.author}`,
        name: a.name,
        jobTitle: a.role[post.lang],
        description: a.bio[post.lang],
        image: abs(`/${a.image}`),
        url: `${abs(homePath(post.lang))}#team`,
        worksFor: { '@id': ORG_ID },
        knowsLanguage: ['es', 'en'],
    };
}

export function postHead(post: Post): string {
    const t = BLOG_TEXT[post.lang];
    const url = abs(postPath(post.lang, post.slug));
    const other = translationOf(post, post.lang === 'es' ? 'en' : 'es');
    const alternates = {
        es: abs(postPath('es', post.lang === 'es' ? post.slug : other!.slug)),
        en: abs(postPath('en', post.lang === 'en' ? post.slug : other!.slug)),
    };
    const image = abs(`/${post.ogImage}`);
    const author = personNode(post);

    const article = {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.description,
        image: [image, abs(`/${post.image}`)],
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        inLanguage: post.lang,
        author: { '@id': author['@id'] },
        publisher: { '@id': ORG_ID },
        mainEntityOfPage: url,
        articleSection: post.category,
        keywords: post.keywords.join(', '),
        about: { '@type': 'Place', name: 'Panamá' },
        isPartOf: { '@type': 'Blog', '@id': `${abs(blogPath(post.lang))}#blog` },
    };

    return headTags({
        lang: post.lang,
        title: `${post.seoTitle} | 2Ble Realty`,
        description: post.description,
        url,
        alternates,
        image,
        type: 'article',
        extra: [
            `<meta property="article:published_time" content="${post.datePublished}">`,
            `<meta property="article:modified_time" content="${post.dateModified}">`,
            `<meta property="article:section" content="${post.category}">`,
            `<meta name="author" content="${AUTHORS[post.author].name}">`,
        ],
        graph: [
            orgNode(post.lang),
            websiteNode(),
            author,
            article,
            breadcrumbNode([
                { name: t.home, url: abs(homePath(post.lang)) },
                { name: t.blog, url: abs(blogPath(post.lang)) },
                { name: post.title, url },
            ]),
            faqNode(post.lang, post.faq),
        ],
    });
}

export function blogIndexHead(lang: Language): string {
    const t = BLOG_TEXT[lang];
    const url = abs(blogPath(lang));
    return headTags({
        lang,
        title: t.indexSeoTitle,
        description: t.indexDescription,
        url,
        alternates: { es: abs(blogPath('es')), en: abs(blogPath('en')) },
        graph: [
            orgNode(lang),
            websiteNode(),
            {
                '@type': 'Blog',
                '@id': `${url}#blog`,
                name: t.indexSeoTitle,
                description: t.indexDescription,
                url,
                inLanguage: lang,
                publisher: { '@id': ORG_ID },
                blogPost: postsFor(lang).map((p) => ({
                    '@type': 'BlogPosting',
                    headline: p.title,
                    url: abs(postPath(lang, p.slug)),
                    datePublished: p.datePublished,
                    author: { '@type': 'Person', name: AUTHORS[p.author].name },
                })),
            },
            breadcrumbNode([
                { name: t.home, url: abs(homePath(lang)) },
                { name: t.blog, url },
            ]),
        ],
    });
}

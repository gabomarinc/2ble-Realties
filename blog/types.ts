import React from 'react';
import { Language } from '../types';
import { Faq } from '../seo';

export type AuthorId = 'jonathan' | 'yiniva';

export interface PostSection {
    /** id del ancla (tabla de contenido) */
    id: string;
    title: string;
    content: React.ReactNode;
}

export interface Post {
    /** Igual en ambos idiomas: une la versión ES con la EN (hreflang) */
    key: string;
    lang: Language;
    slug: string;
    /** H1 de la página */
    title: string;
    /** <title> para Google (más corto, con la búsqueda principal) */
    seoTitle: string;
    description: string;
    category: string;
    keywords: string[];
    datePublished: string;
    dateModified: string;
    author: AuthorId;
    /** Ruta en public/ (img/...) */
    image: string;
    imageAlt: string;
    /** Imagen 1200x630 para redes (public/og/...) */
    ogImage: string;
    readingMinutes: number;
    /** Respuesta directa de 2–3 frases (AEO: lo que citan Google y los asistentes de IA) */
    answer: string;
    takeaways: string[];
    sections: PostSection[];
    faq: Faq[];
}

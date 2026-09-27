import { Language } from '../types';

export const homePath = (lang: Language) => (lang === 'en' ? '/en/' : '/');
export const blogPath = (lang: Language) => (lang === 'en' ? '/en/blog/' : '/blog/');
export const postPath = (lang: Language, slug: string) => `${blogPath(lang)}${slug}/`;

// Slugs por idioma (se usan para enlazar artículos entre sí)
export const SLUGS = {
    comprarExtranjero: { es: 'comprar-propiedad-en-panama-siendo-extranjero', en: 'buying-property-in-panama-as-a-foreigner' },
    mejoresZonas: { es: 'mejores-zonas-para-invertir-en-panama', en: 'best-areas-to-invest-in-panama-real-estate' },
} as const;

import { Language } from './types';

export const SITE_URL = 'https://2ble.realty';
export const PHONE = '+50763145710';
export const PHONE_DISPLAY = '+507 6314-5710';
export const WHATSAPP_URL = 'https://wa.me/50763145710';
export const INSTAGRAM_URL = 'https://www.instagram.com/2blerealty/';
export const ADDRESS = {
  street: 'Calle 51 y Federico Boyd, Edificio Scotia Plaza, Piso 7, Oficina 21',
  line1: 'Bella Vista, Federico Boyd y Calle 51',
  line2: 'Edificio Scotiaplaza, Piso 7, Oficina 21',
  locality: 'Ciudad de Panamá',
  region: 'Panamá',
  country: 'PA',
};

export const PAGE_URL: Record<Language, string> = { es: `${SITE_URL}/`, en: `${SITE_URL}/en/` };

export const META: Record<Language, { title: string; description: string; ogLocale: string }> = {
  es: {
    title: '2Ble Realty | Bienes raíces e inversión inmobiliaria en Panamá',
    description:
      'Agencia inmobiliaria en Panamá con más de 10 años de experiencia. Compra, venta e inversión en apartamentos, casas y lotes en Panamá Pacífico, Santa María, Costa del Este, Ocean Reef y Ciudad de Panamá.',
    ogLocale: 'es_PA',
  },
  en: {
    title: '2Ble Realty | Panama Real Estate & Property Investment',
    description:
      'Real estate agency in Panama with 10+ years of experience. Buy and invest in apartments, homes and lots in Panama Pacifico, Santa Maria, Costa del Este, Ocean Reef and Panama City.',
    ogLocale: 'en_US',
  },
};

export interface Faq { q: string; a: string }

export const FAQ: Record<Language, { title: string; subtitle: string; items: Faq[] }> = {
  es: {
    title: 'Preguntas frecuentes',
    subtitle: 'Lo que más nos preguntan antes de invertir en Panamá.',
    items: [
      {
        q: '¿Qué es 2Ble Realty?',
        a: '2Ble Realty es una agencia de bienes raíces en Ciudad de Panamá con más de 10 años de experiencia, más de $75 millones en ventas y más de 250 viviendas vendidas. Asesoramos la compra, venta, alquiler e inversión en propiedades residenciales en Panamá.',
      },
      {
        q: '¿En qué zonas de Panamá tienen propiedades?',
        a: 'Trabajamos en las zonas más exclusivas del país: Panamá Pacífico (Panamá Oeste), Santa María y Costa del Este, Ciudad de Panamá (Costanera, Ocean Reef y más) y oportunidades de inversión en el interior como Boquete. Hay proyectos desde $188,000 hasta más de $1,300,000.',
      },
      {
        q: '¿Qué es el método de Compra Inversa?',
        a: 'Es nuestro método para que tú descanses mientras nosotros trabajamos: definimos tus objetivos y presupuesto, buscamos en el mercado (incluyendo preventas e inventario exclusivo) y te acompañamos en la negociación y el proceso legal hasta el cierre.',
      },
      {
        q: '¿Pueden comprar propiedades los extranjeros en Panamá?',
        a: 'Sí. En Panamá los extranjeros pueden comprar propiedades con los mismos derechos que los nacionales. Asesoramos a inversionistas internacionales y a personas que desean mudarse o retirarse en Panamá durante todo el proceso.',
      },
      {
        q: '¿Por qué invertir en bienes raíces en Panamá?',
        a: 'Panamá tiene una economía estable y dolarizada, es un centro financiero y logístico con conectividad global, y su mercado inmobiliario tiene alta demanda y plusvalía, lo que lo convierte en uno de los mejores países para invertir y retirarse.',
      },
      {
        q: '¿Ayudan con el financiamiento hipotecario?',
        a: 'Sí. Trabajamos con aliados bancarios como Davivienda y en nuestra web puedes usar la calculadora hipotecaria para pre-evaluar tu crédito antes de comprar.',
      },
      {
        q: '¿Dónde están ubicados y cómo los contacto?',
        a: 'Nuestra oficina está en Bella Vista, Federico Boyd y Calle 51, Edificio Scotia Plaza, piso 7, oficina 21, Ciudad de Panamá. Puedes escribirnos por WhatsApp al +507 6314-5710.',
      },
    ],
  },
  en: {
    title: 'Frequently asked questions',
    subtitle: 'What people ask us most before investing in Panama.',
    items: [
      {
        q: 'What is 2Ble Realty?',
        a: '2Ble Realty is a real estate agency in Panama City with more than 10 years of experience, over $75 million in sales and more than 250 homes sold. We advise on buying, selling, renting and investing in residential property in Panama.',
      },
      {
        q: 'Which areas of Panama do you cover?',
        a: 'We work in the most exclusive areas of the country: Panama Pacifico (Panama West), Santa Maria and Costa del Este, Panama City (Costanera, Ocean Reef and more) and investment opportunities outside the city such as Boquete. Projects range from $188,000 to over $1,300,000.',
      },
      {
        q: 'What is the Reverse Purchase method?',
        a: 'It is our method so you can rest while we do the work: we define your goals and budget, search the market (including pre-sales and exclusive inventory) and guide you through negotiation and the legal process until closing.',
      },
      {
        q: 'Can foreigners buy property in Panama?',
        a: 'Yes. In Panama, foreigners can buy property with the same rights as nationals. We guide international investors and people relocating or retiring to Panama through the entire process.',
      },
      {
        q: 'Why invest in Panama real estate?',
        a: 'Panama has a stable, dollarized economy, is a financial and logistics hub with global connectivity, and its real estate market has high demand and appreciation, making it one of the best countries to invest and retire.',
      },
      {
        q: 'Do you help with mortgage financing?',
        a: 'Yes. We work with banking partners such as Davivienda, and you can use the mortgage calculator on our website to pre-qualify before buying.',
      },
      {
        q: 'Where are you located and how can I contact you?',
        a: 'Our office is in Bella Vista, Federico Boyd and 51st Street, Scotia Plaza Building, 7th floor, office 21, Panama City. You can message us on WhatsApp at +507 6314-5710.',
      },
    ],
  },
};

export const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const ORG_ID = `${SITE_URL}/#organization`;

export function orgNode(lang: Language) {
  return {
    '@type': 'RealEstateAgent',
    '@id': ORG_ID,
    name: '2Ble Realty',
    alternateName: '2Ble',
    slogan: 'Double the Standard',
    description: META[lang].description,
    url: PAGE_URL[lang],
    logo: `${SITE_URL}/icon-512.png`,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: PHONE,
    priceRange: '$188,000 - $1,350,000+',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      addressCountry: ADDRESS.country,
    },
    areaServed: [
      'Panamá', 'Ciudad de Panamá', 'Panamá Pacífico', 'Panamá Oeste',
      'Santa María', 'Costa del Este', 'Ocean Reef', 'Punta Pacífica', 'Boquete',
    ].map((name) => ({ '@type': 'Place', name })),
    knowsLanguage: ['es', 'en'],
    sameAs: [INSTAGRAM_URL],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'sales',
      availableLanguage: ['Spanish', 'English'],
    },
    employee: [
      { name: 'Jonathan Valverde', telephone: '+50763145710' },
      { name: 'Yiniva Cedeño', telephone: '+50767635522' },
      { name: 'Liriola Cedeño', telephone: '+50762622115' },
    ].map((p) => ({ '@type': 'Person', jobTitle: 'Real Estate Agent', worksFor: { '@id': ORG_ID }, ...p })),
  };
}

export const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: '2Ble Realty',
  inLanguage: ['es', 'en'],
  publisher: { '@id': ORG_ID },
});

export const faqNode = (lang: Language, items: Faq[]) => ({
  '@type': 'FAQPage',
  inLanguage: lang,
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbNode = (items: { name: string; url: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
});

export interface HeadOptions {
  lang: Language;
  title: string;
  description: string;
  /** URL absoluta de esta página */
  url: string;
  /** URL absoluta de la misma página en cada idioma (hreflang) */
  alternates: Record<Language, string>;
  image?: string;
  type?: 'website' | 'article';
  /** Etiquetas extra (p. ej. article:published_time) */
  extra?: string[];
  graph: object[];
}

/** Etiquetas <head> de una página (se insertan en el HTML pre-renderizado). */
export function headTags(o: HeadOptions): string {
  const image = o.image ?? `${SITE_URL}/og-image.jpg`;
  const ld = JSON.stringify({ '@context': 'https://schema.org', '@graph': o.graph }).replace(/</g, '\\u003c');
  return [
    `<title>${esc(o.title)}</title>`,
    `<meta name="description" content="${esc(o.description)}">`,
    `<link rel="canonical" href="${o.url}">`,
    `<link rel="alternate" hreflang="es" href="${o.alternates.es}">`,
    `<link rel="alternate" hreflang="en" href="${o.alternates.en}">`,
    `<link rel="alternate" hreflang="x-default" href="${o.alternates.es}">`,
    `<meta property="og:type" content="${o.type ?? 'website'}">`,
    `<meta property="og:site_name" content="2Ble Realty">`,
    `<meta property="og:title" content="${esc(o.title)}">`,
    `<meta property="og:description" content="${esc(o.description)}">`,
    `<meta property="og:url" content="${o.url}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:locale" content="${META[o.lang].ogLocale}">`,
    ...(o.extra ?? []),
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(o.title)}">`,
    `<meta name="twitter:description" content="${esc(o.description)}">`,
    `<meta name="twitter:image" content="${image}">`,
    `<meta name="geo.region" content="PA-8">`,
    `<meta name="geo.placename" content="Ciudad de Panamá">`,
    `<script type="application/ld+json">${ld}</script>`,
  ].join('\n    ');
}

/** <head> de la página de inicio */
export function renderHead(lang: Language): string {
  return headTags({
    lang,
    title: META[lang].title,
    description: META[lang].description,
    url: PAGE_URL[lang],
    alternates: PAGE_URL,
    graph: [orgNode(lang), websiteNode(), faqNode(lang, FAQ[lang].items)],
  });
}

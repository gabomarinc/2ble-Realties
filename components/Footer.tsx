import React from 'react';
import { Language } from '../types';
import { ADDRESS, INSTAGRAM_URL, PHONE, PHONE_DISPLAY, WHATSAPP_URL } from '../seo';
import { blogPath, homePath } from '../blog/paths';

interface FooterProps {
    lang: Language;
    navContent: Record<string, string>;
    isHome?: boolean;
}

// Nombre, dirección y teléfono (NAP) idénticos al Perfil de Negocio de Google: ayuda al SEO local.
const Footer: React.FC<FooterProps> = ({ lang, navContent, isHome = true }) => {
    const es = lang === 'es';
    const sectionHref = (key: string) => (isHome ? `#${key}` : `${homePath(lang)}#${key}`);

    return (
        <footer className="bg-deep-charcoal text-white/70 border-t border-white/10">
            <div className="container mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
                <div>
                    <img src="/img/logo-negro.webp" alt="2Ble Realty" width={87} height={38} loading="lazy" decoding="async" className="h-[38px] w-auto mb-6" />
                    <p className="text-sm font-light leading-relaxed max-w-xs">
                        {es
                            ? 'Agencia de bienes raíces en Panamá: compra, venta, alquiler e inversión inmobiliaria.'
                            : 'Real estate agency in Panama: buying, selling, renting and property investment.'}
                    </p>
                </div>

                <nav aria-label={es ? 'Secciones' : 'Sections'}>
                    <h2 className="text-champagne text-[11px] uppercase tracking-[0.3em] font-black mb-6">{es ? 'Explora' : 'Explore'}</h2>
                    <ul className="space-y-3 text-sm">
                        {Object.entries(navContent).map(([key, value]) => (
                            <li key={key}><a href={sectionHref(key)} className="hover:text-champagne transition-colors">{value}</a></li>
                        ))}
                        <li><a href={sectionHref('faq')} className="hover:text-champagne transition-colors">{es ? 'Preguntas frecuentes' : 'FAQ'}</a></li>
                        <li><a href={blogPath(lang)} className="hover:text-champagne transition-colors">Blog</a></li>
                    </ul>
                </nav>

                <div>
                    <h2 className="text-champagne text-[11px] uppercase tracking-[0.3em] font-black mb-6">{es ? 'Contacto' : 'Contact'}</h2>
                    <address className="not-italic text-sm font-light leading-relaxed space-y-3">
                        <p>
                            2Ble Realty<br />
                            {ADDRESS.line1}<br />
                            {ADDRESS.line2}<br />
                            {ADDRESS.locality}, Panamá
                        </p>
                        <p><a href={`tel:${PHONE}`} className="hover:text-champagne transition-colors">{PHONE_DISPLAY}</a></p>
                        <p className="flex gap-6">
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">WhatsApp</a>
                            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">Instagram</a>
                        </p>
                    </address>
                </div>
            </div>
            <div className="border-t border-white/10">
                <p className="container mx-auto px-6 lg:px-10 py-6 text-xs">
                    © {new Date().getFullYear()} 2Ble Realty · Double the Standard
                </p>
            </div>
        </footer>
    );
};

export default Footer;

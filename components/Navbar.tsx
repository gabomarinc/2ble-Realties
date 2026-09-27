import React, { useState, useEffect, memo } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../types';
import { blogPath, homePath } from '../blog/paths';

interface NavbarProps {
    lang: Language;
    navContent: Record<string, string>;
    /** false en páginas que no son la home: los enlaces de sección apuntan a la home */
    isHome?: boolean;
    /** URL de esta misma página en el otro idioma */
    altHref?: string;
}

const Navbar: React.FC<NavbarProps> = ({ lang, navContent, isHome = true, altHref }) => {
    // El cambio de idioma es un enlace real a la otra versión pre-renderizada
    const otherLang = lang === 'es' ? 'en' : 'es';
    const otherLangHref = altHref ?? homePath(otherLang);
    const home = homePath(lang);
    const sectionHref = (key: string) => (isHome ? `#${key}` : `${home}#${key}`);
    const otherLangLabel = otherLang === 'en' ? 'View site in English' : 'Ver sitio en español';
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 40;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${home}#${id}`;
        }
    };

    return (
        <>
            <div className="fixed top-6 w-full z-50 flex justify-center px-4 pointer-events-none">
                <nav className={`
            pointer-events-auto flex items-center justify-between px-6 py-3 w-full transition-all duration-300
            ${scrolled
                        ? 'bg-white shadow-2xl max-w-4xl rounded-full'
                        : 'bg-[#0B1221]/40 backdrop-blur-lg border border-white/10 max-w-7xl rounded-full'}
          `}>
                    <div className="flex items-center gap-4">
                        <a href={home} aria-label="2Ble Realty">
                            <img
                                src={scrolled ? "/img/logo-blanco.webp" : "/img/logo-negro.webp"}
                                alt="2Ble Realty"
                                width={87}
                                height={38}
                                className="h-[38px] w-auto object-contain transition-all duration-300"
                            />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8" aria-label={lang === 'es' ? 'Navegación principal' : 'Main navigation'}>
                        {Object.entries(navContent).filter(([key]) => key !== 'contact').map(([key, value]) => (
                            <a
                                key={key}
                                href={sectionHref(key)}
                                className={`text-[9px] uppercase tracking-[0.3em] font-black transition-colors hover:text-[#C5A059] ${scrolled ? 'text-[#0B1221]/75' : 'text-white/75'}`}
                            >
                                {value as string}
                            </a>
                        ))}
                        <a
                            href={blogPath(lang)}
                            className={`text-[9px] uppercase tracking-[0.3em] font-black transition-colors hover:text-[#C5A059] ${scrolled ? 'text-[#0B1221]/75' : 'text-white/75'}`}
                        >
                            Blog
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href={otherLangHref}
                            hrefLang={otherLang}
                            lang={otherLang}
                            aria-label={otherLangLabel}
                            className={`text-[10px] font-black tracking-widest px-2 py-3 ${scrolled ? 'text-[#0B1221]/75 hover:text-[#0B1221]' : 'text-white/75 hover:text-white'}`}
                        >
                            {otherLang.toUpperCase()}
                        </a>
                        <a
                            href={sectionHref('contact')}
                            className={`
                  hidden lg:block px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all
                  ${scrolled ? 'bg-[#0B1221] text-white hover:bg-[#C5A059]' : 'bg-white text-[#0B1221] hover:bg-[#C5A059] hover:text-white'}
                `}
                        >
                            {navContent.contact}
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label={lang === 'es' ? 'Abrir menú' : 'Open menu'}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-menu"
                            className={`lg:hidden p-2 ${scrolled ? 'text-[#0B1221]' : 'text-white'}`}
                        >
                            <Menu size={24} aria-hidden="true" />
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div id="mobile-menu" inert={!mobileMenuOpen} className={`fixed inset-0 bg-[#0B1221] z-[60] transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-10">
                    <div className="flex justify-between items-center mb-20">
                        <img src="/img/logo-negro.webp" alt="2Ble Realty" width={87} height={38} loading="lazy" className="h-[38px] w-auto object-contain" />
                        <button onClick={() => setMobileMenuOpen(false)} aria-label={lang === 'es' ? 'Cerrar menú' : 'Close menu'} className="text-white">
                            <X size={32} aria-hidden="true" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-10">
                        {Object.entries(navContent).map(([key, value]) => (
                            <a
                                key={key}
                                href={sectionHref(key)}
                                onClick={(e) => { e.preventDefault(); scrollToSection(key); }}
                                className="text-4xl font-serif text-white text-left hover:text-champagne transition-colors"
                            >
                                {value as string}
                            </a>
                        ))}
                        <a href={blogPath(lang)} className="text-4xl font-serif text-white text-left hover:text-champagne transition-colors">
                            Blog
                        </a>
                    </div>

                    <div className="mt-auto">
                        <div className="w-12 h-[1px] bg-champagne mb-8"></div>
                        <p className="text-white/70 text-sm font-light">
                            Double the Standard.<br />
                            Panama City, Panama
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Navbar);

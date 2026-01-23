import React, { useState, useEffect, memo } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
    lang: Language;
    toggleLang: () => void;
    navContent: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang, navContent }) => {
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
                        <img
                            src={scrolled ? "/logo-blanco.png" : "/logo-negro.png"}
                            alt="Panama Elite"
                            className="h-[38px] w-auto object-contain transition-all duration-300"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {Object.entries(navContent).filter(([key]) => key !== 'contact').map(([key, value]) => (
                            <a
                                key={key}
                                href={`#${key}`}
                                className={`text-[9px] uppercase tracking-[0.3em] font-black transition-colors hover:text-[#C5A059] ${scrolled ? 'text-[#0B1221]/60' : 'text-white/60'}`}
                            >
                                {value as string}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLang}
                            className={`text-[10px] font-black tracking-widest px-2 ${scrolled ? 'text-[#0B1221]/40 hover:text-[#0B1221]' : 'text-white/40 hover:text-white'}`}
                        >
                            {lang.toUpperCase()}
                        </button>
                        <a
                            href="#contact"
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
                            className={`lg:hidden p-2 ${scrolled ? 'text-[#0B1221]' : 'text-white'}`}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#0B1221] z-[60] transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-10">
                    <div className="flex justify-between items-center mb-20">
                        <img src="/logo-blanco.png" alt="Panama Elite" className="h-[38px] w-auto object-contain" />
                        <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                            <X size={32} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-10">
                        {Object.entries(navContent).map(([key, value]) => (
                            <button
                                key={key}
                                onClick={() => scrollToSection(key)}
                                className="text-4xl font-serif text-white text-left hover:text-champagne transition-colors"
                            >
                                {value as string}
                            </button>
                        ))}
                    </div>

                    <div className="mt-auto">
                        <div className="w-12 h-[1px] bg-champagne mb-8"></div>
                        <p className="text-white/40 text-sm font-light">
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

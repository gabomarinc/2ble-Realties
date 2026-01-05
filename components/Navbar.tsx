import React, { useState, useEffect, memo } from 'react';
import { Language } from '../types';

interface NavbarProps {
    lang: Language;
    toggleLang: () => void;
    navContent: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang, navContent }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 40;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        // Slight optimization: passive listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <div className="fixed top-6 w-full z-50 flex justify-center px-4 pointer-events-none">
            <nav className={`
        pointer-events-auto flex items-center justify-between px-6 py-3 w-full transition-all duration-300
        ${scrolled
                    ? 'bg-white shadow-2xl max-w-4xl rounded-full'
                    : 'bg-[#0B1221]/40 backdrop-blur-lg border border-white/10 max-w-7xl rounded-full'}
      `}>
                <div className="flex items-center gap-4">
                    <div className={`font-serif font-black text-2xl tracking-tighter transition-colors ${scrolled ? 'text-[#0B1221]' : 'text-white'}`}>
                        PE
                    </div>
                    <div className="hidden sm:block">
                        <span className={`font-serif tracking-[0.4em] text-[8px] uppercase font-bold block ${scrolled ? 'text-[#0B1221]' : 'text-white'}`}>Panama</span>
                        <span className={`font-serif tracking-[0.4em] text-[8px] uppercase block opacity-60 ${scrolled ? 'text-[#0B1221]' : 'text-white'}`}>Elite</span>
                    </div>
                </div>

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
              px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all
              ${scrolled ? 'bg-[#0B1221] text-white hover:bg-[#C5A059]' : 'bg-white text-[#0B1221] hover:bg-[#C5A059] hover:text-white'}
            `}
                    >
                        {navContent.contact}
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default memo(Navbar);

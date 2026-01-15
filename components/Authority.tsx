import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CONTENT } from '../constants';
import { Language } from '../types';

interface AuthorityProps {
    lang: Language;
}

const Authority: React.FC<AuthorityProps> = ({ lang }) => {
    const content = CONTENT[lang].authority;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % content.slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + content.slides.length) % content.slides.length);
    };

    const currentSlide = content.slides[currentIndex];

    // Reset loop when language changes to avoid index out of bounds if arrays differed (unlikely here but good practice)
    useEffect(() => {
        setCurrentIndex(0);
    }, [lang]);

    return (
        <section id="about" className="py-24 lg:py-40 bg-white border-t border-slate-50 relative group/section">
            {/* Navigation Buttons - Visible on hover/always on mobile */}
            <button
                onClick={prevSlide}
                className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all border border-slate-100 text-navy hidden group-hover/section:block lg:group-hover/section:block"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all border border-slate-100 text-navy hidden group-hover/section:block lg:group-hover/section:block"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>


            <div className="container mx-auto px-6 lg:px-10">
                <div key={currentIndex} className="animate-in fade-in slide-in-from-right-8 duration-700 ease-out fill-mode-both grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="reveal order-2 lg:order-1 parallax-container reveal-active">
                        <div className="rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl aspect-[4/5] mx-auto lg:mx-0 max-w-md lg:max-w-none relative">
                            {/* Image Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent z-10"></div>
                            <img
                                src={currentSlide.image}
                                className="w-full h-full object-cover grayscale brightness-90 contrast-[1.1] transition-transform duration-[1.5s]"
                                loading="lazy"
                                alt={currentSlide.title}
                            />
                        </div>
                    </div>
                    <div className="reveal order-1 lg:order-2 reveal-active">
                        <span className="inline-block text-champagne font-black tracking-[0.5em] uppercase text-[10px] lg:text-[11px] mb-8 lg:mb-10 block">
                            {currentSlide.title}
                        </span>
                        <h3 className="text-5xl md:text-8xl font-serif text-navy leading-none mb-8 lg:mb-12">
                            {currentSlide.mainTitle}
                        </h3>
                        <p className="text-slate-500 text-lg lg:text-2xl leading-relaxed font-light italic border-l-4 border-champagne pl-6 lg:pl-10 mb-10 lg:mb-16">
                            {currentSlide.description}
                        </p>
                        <div className="flex gap-12 lg:gap-20">
                            {currentSlide.stats.map((stat, idx) => (
                                <div key={idx}>
                                    <p className="text-4xl lg:text-5xl font-serif text-navy">{stat.value}</p>
                                    <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                        {/* Slide Indicators */}
                        <div className="flex gap-3 mt-12">
                            {content.slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-1 duration-300 transition-all ${idx === currentIndex ? 'w-12 bg-champagne' : 'w-4 bg-slate-200 hover:bg-slate-300'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Authority;

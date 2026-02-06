import React, { useEffect, useState } from 'react';
import { CONTENT } from '../constants';
import { Language } from '../types';

interface HeroProps {
    lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
    const [heroReady, setHeroReady] = useState(false);
    const content = CONTENT[lang].hero;

    useEffect(() => {
        setHeroReady(true);
    }, []);

    return (
        <section className={`relative h-screen flex items-center overflow-hidden ${heroReady ? 'hero-active' : ''}`}>
            {/* Background Image with HEAVY Dark Overlay to match design solid look but keep texture */}
            <div className="absolute inset-0 bg-navy">
                <img
                    src="https://images.unsplash.com/photo-1549413289-408f654060cc?auto=format&fit=crop&q=70&w=2000"
                    alt="Hero"
                    className="w-full h-full object-cover opacity-20"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-[#0B1221]/90"></div> {/* Almost solid dark navy */}
            </div>

            <div className="container mx-auto px-6 lg:px-10 relative z-10 h-full flex flex-col justify-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="max-w-4xl pt-20 lg:pt-12">
                        <span className="hero-title inline-block text-champagne tracking-[0.4em] uppercase text-[9px] lg:text-[10px] mb-8 font-bold block pl-1" style={{ transitionDelay: '0.1s' }}>
                            {content.slogan}
                        </span>

                        {/* Main Title with Layout Handling */}
                        <h1 className="hero-title text-5xl md:text-[6.5rem] text-white font-serif mb-8 lg:mb-10 leading-[0.95] tracking-tight" style={{ transitionDelay: '0.2s' }}>
                            {content.title}
                        </h1>

                        <p className="hero-title text-white/40 text-base md:text-xl max-w-lg mb-12 lg:mb-16 leading-relaxed font-light mt-6 lg:mt-8" style={{ transitionDelay: '0.3s' }}>
                            {content.subtitle}
                        </p>

                        <div className="hero-title" style={{ transitionDelay: '0.4s' }}>
                            <a href="#developments" className="inline-flex items-center justify-between w-auto gap-8 lg:gap-12 border border-slate-700/50 px-6 py-4 lg:px-8 lg:py-5 hover:border-champagne hover:bg-champagne/10 transition-all duration-500 group">
                                <span className="uppercase tracking-[0.3em] text-[9px] lg:text-[10px] font-bold text-white group-hover:text-champagne transition-colors">{content.cta}</span>
                                <div className="w-6 lg:w-8 h-[1px] bg-champagne"></div>
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Floating Collage */}
                    <div className="hidden lg:block relative h-[600px] w-full perspective-1000 hero-title" style={{ transitionDelay: '0.5s' }}>

                        {/* Image 1: Small Top Right (Detail) */}
                        <div className="absolute top-0 right-10 w-48 h-64 rounded-t-[100px] rounded-b-[20px] overflow-hidden border-4 border-white/5 shadow-2xl z-10 animate-float-slow">
                            <img src="/foto-interior-3.jpg" className="w-full h-full object-cover" alt="Detail" />
                        </div>

                        {/* Image 2: Main Center (Facade/Hero) */}
                        <div className="absolute top-20 left-10 w-80 h-[500px] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] z-20">
                            {/* Updated URL: Verified high quality building facade */}
                            {/* Updated URL: Verified high quality building facade */}
                            <img src="/foto-interior-2.jpg" className="w-full h-full object-cover" alt="Main" />
                        </div>

                        {/* Image 3: Small Bottom Right (Lifestyle) */}
                        <div className="absolute bottom-20 -right-4 w-56 h-40 rounded-[30px] overflow-hidden border-4 border-white/5 shadow-2xl z-30 animate-float-delayed">
                            {/* Updated URL: Verified reliable lifestyle/pool image */}
                            {/* Updated URL: Verified reliable lifestyle/pool image */}
                            <img src="/foto-interior-4.jpg" className="w-full h-full object-cover" alt="Lifestyle" />
                        </div>

                    </div>

                </div>

                {/* Bottom Chevron */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;

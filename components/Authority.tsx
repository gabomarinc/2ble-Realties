import React from 'react';
import { CONTENT } from '../constants';
import { Language } from '../types';

interface AuthorityProps {
    lang: Language;
}

const Authority: React.FC<AuthorityProps> = ({ lang }) => {
    const content = CONTENT[lang].authority;

    return (
        <section id="about" className="py-24 lg:py-40 bg-white border-t border-slate-50">
            <div className="container mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="reveal order-2 lg:order-1 parallax-container">
                        <div className="rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl aspect-[4/5] mx-auto lg:mx-0 max-w-md lg:max-w-none">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200"
                                className="w-full h-full object-cover grayscale brightness-90"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="reveal order-1 lg:order-2">
                        <span className="apple-reveal inline-block text-champagne font-black tracking-[0.5em] uppercase text-[10px] lg:text-[11px] mb-8 lg:mb-10 block" style={{ transitionDelay: '0.1s' }}>{content.title}</span>
                        <h3 className="apple-reveal text-5xl md:text-8xl font-serif text-navy leading-none mb-8 lg:mb-12" style={{ transitionDelay: '0.2s' }}>
                            Double <span className="italic font-extralight text-slate-300">the Standard</span>
                        </h3>
                        <p className="apple-reveal text-slate-500 text-lg lg:text-2xl leading-relaxed font-light italic border-l-4 border-champagne pl-6 lg:pl-10 mb-10 lg:mb-16" style={{ transitionDelay: '0.3s' }}>
                            {content.team[0].desc}
                        </p>
                        <div className="flex gap-12 lg:gap-20 apple-reveal" style={{ transitionDelay: '0.4s' }}>
                            <div>
                                <p className="text-4xl lg:text-5xl font-serif text-navy">$450M+</p>
                                <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black">Advisory</p>
                            </div>
                            <div>
                                <p className="text-4xl lg:text-5xl font-serif text-navy">15+</p>
                                <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black">Market Cycles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Authority;

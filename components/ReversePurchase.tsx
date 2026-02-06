import React from 'react';
import { Search } from 'lucide-react';
import { ContentData } from '../types';

interface ReversePurchaseProps {
    lang: 'en' | 'es';
    content: ContentData['reversePurchase'];
}

import { CONTENT } from '../constants';

const ReversePurchase: React.FC<ReversePurchaseProps> = ({ lang, content }) => {
    const ui = CONTENT[lang].ui;
    return (
        <section id="invest" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <div className="reveal">
                            <span className="apple-reveal inline-block text-champagne font-black tracking-[0.4em] uppercase text-[10px] lg:text-[11px] mb-6 lg:mb-8 block" style={{ transitionDelay: '0.1s' }}>
                                {content.title}
                            </span>
                            <h2 className="apple-reveal text-5xl md:text-7xl font-serif text-navy leading-[1.1] mb-8 lg:mb-10" style={{ transitionDelay: '0.2s' }}>
                                {content.subtitle.includes(',') ? (
                                    content.subtitle.split(',').map((part, i, arr) => (
                                        <span key={i} className="block">
                                            {part.trim()}{i < arr.length - 1 ? ',' : '.'}
                                        </span>
                                    ))
                                ) : (
                                    content.subtitle
                                )}
                            </h2>
                            <p className="apple-reveal text-slate-500 text-lg md:text-2xl font-light italic leading-relaxed max-w-xl" style={{ transitionDelay: '0.3s' }}>
                                {content.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 lg:order-2 relative reveal">
                        <div className="apple-reveal relative rounded-[40px] lg:rounded-[50px] overflow-hidden shadow-2xl h-[400px] lg:h-[600px] w-full" style={{ transitionDelay: '0.2s' }}>
                            <img
                                src="/foto-interior.jpg"
                                alt="Concierge"
                                className="w-full h-full object-cover object-top"
                            />

                            {/* Floating Card */}
                            <div className="absolute -bottom-1 -right-1 bg-navy p-6 lg:p-10 rounded-tl-[30px] lg:rounded-tl-[40px] shadow-2xl z-10 apple-reveal" style={{ transitionDelay: '0.5s' }}>
                                <div className="flex flex-col items-center gap-2 lg:gap-4 text-center">
                                    <Search className="text-champagne w-6 h-6 lg:w-8 lg:h-8" strokeWidth={2} />
                                    <span className="text-white font-serif text-lg lg:text-xl italic">{ui.curated}</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background element if needed, clean for now to match image */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ReversePurchase;

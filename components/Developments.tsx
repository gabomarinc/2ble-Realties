import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { CONTENT } from '../constants';
import { Language } from '../types';

interface DevelopmentsProps {
    lang: Language;
}

const Developments: React.FC<DevelopmentsProps> = ({ lang }) => {
    const content = CONTENT[lang].developments;

    return (
        <section id="developments" className="bg-white py-24 lg:py-40 reveal text-navy">
            <div className="container mx-auto px-6 lg:px-10 mb-12 lg:mb-20">
                <div className="reveal">
                    <h2 className="text-4xl md:text-8xl font-serif leading-none mb-6 lg:mb-8 font-black tracking-tight">
                        {content.title}
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-400 font-light max-w-2xl italic leading-relaxed">
                        {content.subtitle}
                    </p>
                </div>
            </div>

            <div className="gallery-container">
                {content.items.map((item) => (
                    <div key={item.id} className="gallery-item group">
                        <img src={item.image} alt={item.title} loading="lazy" />
                        <div className="gallery-content">
                            <span className="text-champagne text-[9px] uppercase tracking-[0.6em] font-black mb-2 block">Premium Asset</span>
                            <h3 className="text-white text-3xl lg:text-4xl font-serif mb-4 leading-none">{item.title}</h3>
                            <div className="flex items-center gap-3 text-white/60 mb-6">
                                <MapPin size={14} className="text-champagne" />
                                <span className="text-[10px] uppercase tracking-widest font-bold">{item.location}</span>
                            </div>
                            <p className="text-white/70 font-light text-sm mb-8 max-w-xs">{item.description}</p>
                            <div className="flex items-center gap-3 text-white text-[9px] uppercase tracking-widest font-black">
                                Discover More <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Developments;

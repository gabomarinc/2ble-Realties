import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { CONTENT } from '../constants';
import { Language } from '../types';

interface PropertiesProps {
    lang: Language;
}

const Properties: React.FC<PropertiesProps> = ({ lang }) => {
    const content = CONTENT[lang].properties;

    return (
        <section id="properties" className="bg-white py-40 reveal border-t border-slate-50">
            <div className="container mx-auto px-10">
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-champagne"></div>
                        <span className="text-champagne font-black tracking-[0.5em] uppercase text-[10px] apple-reveal" style={{ transitionDelay: '0.1s' }}>Private Portfolio</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-serif text-navy leading-none mb-6 apple-reveal" style={{ transitionDelay: '0.2s' }}>
                        {content.title}
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                    {content.items.map((property, idx) => (
                        <div
                            key={property.id}
                            className={`apple-reveal group cursor-pointer transition-transform duration-500`}
                            style={{ transitionDelay: `${idx * 200}ms` }}
                        >
                            <div className="aspect-[3/4] overflow-hidden rounded-[50px] relative mb-10 shadow-2xl">
                                <img src={property.image} alt={property.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                                    <p className="text-champagne text-[9px] uppercase tracking-[0.5em] font-black mb-4">Click for inquiry</p>
                                    <h4 className="text-white text-3xl font-serif">{property.price}</h4>
                                </div>
                                <div className="absolute top-8 left-8">
                                    <span className="bg-white text-navy text-[9px] font-black px-6 py-3 rounded-full uppercase tracking-widest">
                                        {property.tag}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-serif text-navy mb-2">{property.title}</h3>
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <MapPin size={14} />
                                        <span className="text-[10px] uppercase font-bold tracking-widest">{property.location}</span>
                                    </div>
                                </div>
                                <ArrowRight size={24} className="text-slate-200 group-hover:text-champagne group-hover:translate-x-3 transition-all" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Properties;

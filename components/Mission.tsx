import React from 'react';
import { Star, Quote } from 'lucide-react';
import { ContentData, Language } from '../types';

interface MissionProps {
    lang: Language;
}

// Importing content directly or via props? App.tsx passes only lang usually, but we need content. 
// App.tsx was passing lang only: <Mission lang={lang} />
// We need to access CONTENT inside.

import { CONTENT } from '../constants';

const Mission: React.FC<MissionProps> = ({ lang }) => {
    const content = CONTENT[lang].missionVision;

    return (
        <section id="about" className="bg-navy py-24 lg:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-10">

                {/* Header */}
                <div className="mb-16 lg:mb-24 reveal">
                    <span className="apple-reveal inline-block text-champagne font-black tracking-[0.4em] uppercase text-[10px] lg:text-[11px] mb-6 lg:mb-8 block" style={{ transitionDelay: '0.1s' }}>
                        {content.subTitle}
                    </span>
                    <h2 className="apple-reveal text-5xl md:text-8xl font-serif text-white leading-none" style={{ transitionDelay: '0.2s' }}>
                        {content.title}
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-start">

                    {/* Dark Card - Manifesto */}
                    <div className="reveal relative h-[500px] lg:h-[700px] rounded-[40px] lg:rounded-[50px] overflow-hidden group">
                        <img
                            src="foto-interior-6.jpeg"
                            alt="Office"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/50 transition-colors duration-500"></div>

                        <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                            <Quote size={48} className="text-champagne/20 mb-auto transform -scale-x-100 lg:w-16 lg:h-16" />

                            <div className="apple-reveal" style={{ transitionDelay: '0.2s' }}>
                                <h3 className="text-3xl lg:text-5xl font-serif text-white mb-6 lg:mb-8">{content.mission.title}</h3>
                                <p className="text-lg lg:text-xl text-white/80 font-light italic leading-relaxed border-l-4 border-champagne pl-6 lg:pl-8">
                                    "{content.mission.desc}"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* White Card - Vision */}
                    <div className="reveal relative bg-white rounded-[40px] lg:rounded-[50px] p-8 md:p-12 lg:p-16 mt-0 lg:mt-0 lg:-ml-20 z-10 shadow-2xl">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-4 lg:gap-6 mb-8 lg:mb-12 apple-reveal" style={{ transitionDelay: '0.1s' }}>
                                <div className="bg-navy p-3 lg:p-4 rounded-full">
                                    <Star className="text-champagne w-6 h-6 lg:w-8 lg:h-8 fill-current" />
                                </div>
                                <h3 className="text-3xl lg:text-5xl font-serif text-navy">{content.vision.title}</h3>
                            </div>

                            <p className="apple-reveal text-xl lg:text-2xl text-slate-500 font-light italic leading-relaxed mb-8 lg:mb-12" style={{ transitionDelay: '0.2s' }}>
                                "{content.vision.desc}"
                            </p>

                            <div className="h-48 lg:h-64 rounded-3xl overflow-hidden mt-auto apple-reveal" style={{ transitionDelay: '0.3s' }}>
                                <img
                                    src="foto-interior-5.jpeg"
                                    alt="Interior"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute -right-4 -bottom-4 lg:-right-8 lg:-bottom-8 w-24 h-24 lg:w-32 lg:h-32 bg-champagne rounded-full flex items-center justify-center shadow-lg">
                            <Quote size={24} className="text-white fill-current lg:w-8 lg:h-8" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Mission;

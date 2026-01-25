import React from 'react';
import { CONTENT } from '../constants';
import { Language } from '../types';

interface AuthorityProps {
    lang: Language;
}

const Authority: React.FC<AuthorityProps> = ({ lang }) => {
    const content = CONTENT[lang].authority;
    const ui = CONTENT[lang].ui;

    // Separate the first slide (Header/Intro) from the rest (Team Members)
    const [intro, ...teamMembers] = content.slides;

    return (
        <section
            id="team"
            className="py-24 lg:py-40 bg-white border-t border-slate-50 relative"
        >
            <div className="container mx-auto px-6 lg:px-10">
                {/* Intro Section - "Double the Standard" */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20 lg:mb-32">
                    <div className="reveal order-2 lg:order-1 parallax-container reveal-active">
                        <div className="rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl aspect-[4/5] mx-auto lg:mx-0 max-w-md lg:max-w-none relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent z-10"></div>
                            <div className="w-full h-full bg-white p-12 flex items-center justify-center">
                                <img
                                    src={intro.image}
                                    className="w-full h-auto rounded-[30px] shadow-sm object-contain"
                                    loading="lazy"
                                    alt={intro.title}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="reveal order-1 lg:order-2 reveal-active">
                        <span className="inline-block text-champagne font-black tracking-[0.5em] uppercase text-[10px] lg:text-[11px] mb-8 lg:mb-10 block">
                            {intro.title}
                        </span>
                        <h3 className="text-5xl md:text-8xl font-serif text-navy leading-none mb-8 lg:mb-12">
                            {intro.mainTitle}
                        </h3>
                        <p className="text-slate-500 text-lg lg:text-2xl leading-relaxed font-light italic border-l-4 border-champagne pl-6 lg:pl-10 mb-10 lg:mb-16">
                            {intro.description}
                        </p>
                        <div className="flex gap-12 lg:gap-20">
                            {intro.stats.map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-4xl lg:text-5xl font-serif text-navy mb-3">{stat.value}</div>
                                    {stat.label && <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black">{stat.label}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group bg-slate-50 rounded-[40px] p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="rounded-[30px] overflow-hidden aspect-[4/5] mb-8 relative">
                                <img
                                    src={member.image}
                                    alt={member.title} // Ideally this should be the name if available as string, but title serves as alt text for now
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="px-2">
                                <span className="text-champagne font-bold tracking-widest uppercase text-[10px] mb-3 block">
                                    {member.title}
                                </span>
                                <h4 className="text-3xl font-serif text-navy mb-4 leading-tight">
                                    {member.mainTitle}
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed font-light mb-6 border-l-2 border-slate-200 pl-4">
                                    {member.description}
                                </p>

                                <div className="pt-4 border-t border-slate-200/50">
                                    {member.stats.map((stat, idx) => (
                                        <div key={idx} className="text-navy">
                                            {stat.value}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Authority;

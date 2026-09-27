import React from 'react';
import { Plus } from 'lucide-react';
import { Language } from '../types';
import { FAQ } from '../seo';

interface FaqProps {
    lang: Language;
}

// Las mismas preguntas van en el JSON-LD FAQPage (seo.ts), para Google y asistentes de IA.
const Faq: React.FC<FaqProps> = ({ lang }) => {
    const content = FAQ[lang];

    return (
        <section id="faq" className="bg-white text-navy py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-10 max-w-5xl">
                <div className="mb-12 lg:mb-16 reveal">
                    <h2 className="text-4xl md:text-7xl font-serif leading-none mb-6 tracking-tight">
                        {content.title}
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-500 font-light italic">{content.subtitle}</p>
                </div>

                <div className="divide-y divide-slate-200 border-y border-slate-200">
                    {content.items.map((item) => (
                        <details key={item.q} className="group py-6 lg:py-8">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left [&::-webkit-details-marker]:hidden">
                                <h3 className="text-xl lg:text-2xl font-serif">{item.q}</h3>
                                <Plus
                                    aria-hidden="true"
                                    className="w-6 h-6 shrink-0 text-champagne-dark transition-transform duration-300 group-open:rotate-45"
                                />
                            </summary>
                            <p className="mt-4 text-slate-600 text-base lg:text-lg font-light leading-relaxed max-w-3xl">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;

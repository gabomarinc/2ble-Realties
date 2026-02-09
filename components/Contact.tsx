import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTENT } from '../constants';
import { Language } from '../types';

interface ContactProps {
    lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
    const content = CONTENT[lang].contact;

    return (
        <section id="contact" className="py-24 lg:py-40 bg-navy text-white">
            <div className="container mx-auto px-6 lg:px-10">
                <div className="max-w-4xl mx-auto text-center reveal">
                    <h2 className="text-6xl md:text-9xl font-serif mb-8 lg:mb-12 tracking-tighter">Connect <span className="text-champagne">Now.</span></h2>
                    <p className="text-xl lg:text-2xl text-white/30 italic font-light mb-12 lg:mb-16">{content.subtitle}</p>
                    <a
                        href="https://wa.me/50763145710"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 lg:px-12 py-4 lg:py-6 rounded-full uppercase tracking-[0.3em] font-black text-[10px] lg:text-[11px] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" />
                        {content.whatsappButton}
                    </a>
                    <div className="mt-12 lg:mt-16">
                        <p className="text-white/40 text-base lg:text-lg font-light leading-relaxed">
                            Bella Vista, Federico Boyd y Calle 51<br />
                            Edificio Scotiaplaza, Piso 7, Oficina 21
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

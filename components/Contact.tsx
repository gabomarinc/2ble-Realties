import React from 'react';
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
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 reveal">
                    <div>
                        <h2 className="text-6xl md:text-9xl font-serif mb-8 lg:mb-12 tracking-tighter">Connect <span className="text-champagne">Now.</span></h2>
                        <p className="text-xl lg:text-2xl text-white/30 italic font-light max-w-md">{content.subtitle}</p>
                    </div>
                    <div className="bg-[#070B14] p-8 md:p-12 lg:p-20 rounded-[30px] lg:rounded-[40px] border border-white/5">
                        <form className="space-y-8 lg:space-y-12" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                                <input type="text" placeholder={content.name} className="bg-transparent border-b border-white/10 py-4 lg:py-6 outline-none focus:border-champagne transition-colors w-full uppercase tracking-widest text-[10px] font-black" />
                                <input type="email" placeholder={content.email} className="bg-transparent border-b border-white/10 py-4 lg:py-6 outline-none focus:border-champagne transition-colors w-full uppercase tracking-widest text-[10px] font-black" />
                            </div>
                            <textarea placeholder={content.message} className="bg-transparent border-b border-white/10 py-4 lg:py-6 outline-none focus:border-champagne transition-colors w-full uppercase tracking-widest text-[10px] font-black resize-none" rows={2}></textarea>
                            <button className="w-full bg-white text-navy py-4 lg:py-6 rounded-full uppercase tracking-[0.5em] font-black text-[10px] lg:text-[11px] hover:bg-champagne hover:text-white transition-all">
                                {content.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

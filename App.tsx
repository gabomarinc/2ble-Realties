
import React, { useState, useEffect, Suspense } from 'react';
import {
  ArrowRight,
  MapPin,
  Quote,
  MessageCircle,
} from 'lucide-react';
import { CONTENT } from './constants';
import { Language } from './types';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const [heroReady, setHeroReady] = useState(false);

  const content = CONTENT[lang];

  useEffect(() => {
    // Fast initial load
    setHeroReady(true);

    // Snappier Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          // Once animated, stop observing for performance
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: "0px 0px 50px 0px"
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [lang]);

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'es' : 'en'));

  return (
    <div className="min-h-screen bg-navy text-white">

      <Navbar lang={lang} toggleLang={toggleLang} navContent={content.nav} />

      {/* Hero Section - Pre-rendered Ready */}
      <section className={`relative h-screen flex items-center overflow-hidden ${heroReady ? 'hero-active' : ''}`}>
        <div className="absolute inset-0 bg-navy">
          <img
            src="https://images.unsplash.com/photo-1549413289-408f654060cc?auto=format&fit=crop&q=80&w=2000"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/60"></div>
        </div>

        <div className="container mx-auto px-10 relative z-10">
          <div className="max-w-6xl">
            <span className="hero-title inline-block text-champagne tracking-[0.7em] uppercase text-[11px] mb-6 font-black block" style={{ transitionDelay: '0.1s' }}>
              {content.hero.slogan}
            </span>
            <h1 className="hero-title text-5xl md:text-[7rem] text-white font-serif mb-10 leading-[0.9] tracking-tight" style={{ transitionDelay: '0.2s' }}>
              {content.hero.title}
            </h1>
            <p className="hero-title text-white/50 text-xl md:text-2xl max-w-xl mb-12 leading-relaxed font-light" style={{ transitionDelay: '0.3s' }}>
              {content.hero.subtitle}
            </p>
            <div className="hero-title" style={{ transitionDelay: '0.4s' }}>
              <a href="#developments" className="inline-flex items-center gap-8 border border-white/20 px-12 py-6 hover:bg-white hover:text-navy transition-all duration-500 uppercase tracking-[0.4em] text-[10px] font-black">
                {content.hero.cta}
                <div className="w-12 h-[1px] bg-champagne"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENTS GALLERY - BORDES REDONDEADOS + OPTIMIZED */}
      <section id="developments" className="bg-white py-40 reveal text-navy">
        <div className="container mx-auto px-10 mb-20">
          <div className="reveal">
            <h2 className="text-5xl md:text-8xl font-serif leading-none mb-8 font-black tracking-tight">
              {content.developments.title}
            </h2>
            <p className="text-xl text-slate-400 font-light max-w-2xl italic leading-relaxed">
              {content.developments.subtitle}
            </p>
          </div>
        </div>

        <div className="gallery-container">
          {content.developments.items.map((item) => (
            <div key={item.id} className="gallery-item group">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-content">
                <span className="text-champagne text-[9px] uppercase tracking-[0.6em] font-black mb-2 block">Premium Asset</span>
                <h3 className="text-white text-4xl font-serif mb-4 leading-none">{item.title}</h3>
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

      {/* Properties Grid - Snappy Reveal */}
      <section id="properties" className="bg-white py-40 reveal border-t border-slate-50">
        <div className="container mx-auto px-10">
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-champagne"></div>
              <span className="text-champagne font-black tracking-[0.5em] uppercase text-[10px]">Private Portfolio</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif text-navy leading-none mb-6">
              {content.properties.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {content.properties.items.map((property, idx) => (
              <div
                key={property.id}
                className={`reveal group cursor-pointer transition-transform duration-500`}
                style={{ transitionDelay: `${idx * 100}ms` }}
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

      {/* AUTHORITY SECTION - Restored */}
      <section id="about" className="py-40 bg-white border-t border-slate-50">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="reveal order-2 lg:order-1 parallax-container">
              <div className="rounded-[60px] overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200"
                  className="w-full h-full object-cover grayscale brightness-90"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="reveal order-1 lg:order-2">
              <span className="text-champagne font-black tracking-[0.5em] uppercase text-[11px] mb-10 block">{content.authority.title}</span>
              <h3 className="text-6xl md:text-8xl font-serif text-navy leading-none mb-12">
                Double <span className="italic font-extralight text-slate-300">the Standard</span>
              </h3>
              <p className="text-slate-500 text-2xl leading-relaxed font-light italic border-l-4 border-champagne pl-10 mb-16">
                {content.authority.team[0].desc}
              </p>
              <div className="flex gap-20">
                <div>
                  <p className="text-5xl font-serif text-navy">$450M+</p>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black">Advisory</p>
                </div>
                <div>
                  <p className="text-5xl font-serif text-navy">15+</p>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black">Market Cycles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-40 bg-navy text-white overflow-hidden">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="reveal">
              <span className="text-champagne font-black tracking-[0.7em] uppercase text-[11px] mb-8 block">Manifest</span>
              <h3 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">{content.missionVision.mission.title}</h3>
              <p className="text-2xl font-light text-white/60 italic leading-relaxed">
                {content.missionVision.mission.desc}
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white p-16 md:p-24 rounded-[60px] text-navy shadow-2xl">
                <Quote size={40} className="text-champagne mb-10" />
                <h3 className="text-4xl font-serif mb-8">{content.missionVision.vision.title}</h3>
                <p className="text-xl font-light text-navy/60 italic leading-relaxed">
                  {content.missionVision.vision.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT - Fast Form */}
      <section id="contact" className="py-40 bg-navy text-white">
        <div className="container mx-auto px-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 reveal">
            <div>
              <h2 className="text-6xl md:text-9xl font-serif mb-12 tracking-tighter">Connect <span className="text-champagne">Now.</span></h2>
              <p className="text-2xl text-white/30 italic font-light max-w-md">{content.contact.subtitle}</p>
            </div>
            <div className="bg-[#070B14] p-12 md:p-20 rounded-[40px] border border-white/5">
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-10">
                  <input type="text" placeholder={content.contact.name} className="bg-transparent border-b border-white/10 py-6 outline-none focus:border-champagne transition-colors w-full uppercase tracking-widest text-[10px] font-black" />
                  <input type="email" placeholder={content.contact.email} className="bg-transparent border-b border-white/10 py-6 outline-none focus:border-champagne transition-colors w-full uppercase tracking-widest text-[10px] font-black" />
                </div>
                <textarea placeholder={content.contact.message} className="bg-transparent border-b border-white/10 py-6 outline-none focus:border-champagne transition-colors w-full uppercase tracking-widest text-[10px] font-black resize-none" rows={2}></textarea>
                <button className="w-full bg-white text-navy py-6 rounded-full uppercase tracking-[0.5em] font-black text-[11px] hover:bg-champagne hover:text-white transition-all">
                  {content.contact.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/50700000000"
        target="_blank"
        className="fixed bottom-10 right-10 z-[70] bg-champagne text-white p-6 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTENT } from './constants';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Developments from './components/Developments';
import Properties from './components/Properties';
import Authority from './components/Authority';
import Mission from './components/Mission';
import Contact from './components/Contact';

import ReversePurchase from './components/ReversePurchase';
import MortgageCalculator from './components/MortgageCalculator';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');

  const content = CONTENT[lang];

  useEffect(() => {
    // Persistent Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // Wait for 10% visibility
      rootMargin: "0px 0px -50px 0px" // Trigger ONLY when element is 50px INSIDE the viewport
    });

    // Observe all initial elements
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    // We can keep the MutationObserver just in case, but static imports usually don't need it 
    // unless content changes dynamically. For now, it's safer to leave it or remove it?
    // Let's keep it simple: simpler is faster. Remove MutationObserver as we are static now.

    return () => {
      observer.disconnect();
    };
  }, [lang]); // Re-run when lang changes to re-bind if DOM changes drastically (though React reconciler handles it)

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'es' : 'en'));

  return (
    <div className="min-h-screen bg-navy text-white">

      <Navbar lang={lang} toggleLang={toggleLang} navContent={content.nav} />

      <Hero lang={lang} />
      <Developments lang={lang} />
      {/* <Properties lang={lang} /> */}
      <Authority lang={lang} />
      <ReversePurchase lang={lang} content={content.reversePurchase} />
      <MortgageCalculator lang={lang} />
      <Mission lang={lang} />
      <Contact lang={lang} />

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

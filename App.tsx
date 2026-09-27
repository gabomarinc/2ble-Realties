import React, { useEffect } from 'react';
import { CONTENT } from './constants';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Developments from './components/Developments';
import Authority from './components/Authority';
import Mission from './components/Mission';
import Contact from './components/Contact';
import ReversePurchase from './components/ReversePurchase';
import MortgageCalculator from './components/MortgageCalculator';
import Faq from './components/Faq';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BlogTeaser from './components/blog/BlogTeaser';

interface AppProps {
  lang: Language;
}

const App: React.FC<AppProps> = ({ lang }) => {
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

    return () => {
      observer.disconnect();
    };
  }, [lang]);

  return (
    <div className="min-h-screen bg-navy text-white">

      <Navbar lang={lang} navContent={content.nav} />

      <main>
        <Hero lang={lang} />
        <Developments lang={lang} />
        <Authority lang={lang} />
        <ReversePurchase lang={lang} content={content.reversePurchase} />
        <MortgageCalculator lang={lang} />
        <Mission lang={lang} />
        <BlogTeaser lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} navContent={content.nav} />

      <WhatsAppButton lang={lang} />
    </div>
  );
};

export default App;

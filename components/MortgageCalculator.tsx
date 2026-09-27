import React from 'react';
import { Language } from '../types';

interface MortgageCalculatorProps {
    lang: Language;
}

const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ lang }) => {
    return (
        <section id="calculator" className="bg-white py-24 lg:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-10 reveal">
                <h2 className="sr-only">{lang === 'es' ? 'Calculadora hipotecaria con Davivienda' : 'Mortgage calculator with Davivienda'}</h2>
                <div className="flex flex-col items-center justify-center w-full mx-auto">
                    {/* Davivienda Logo */}
                    <div className="mb-12 apple-reveal" style={{ transitionDelay: '0.1s' }}>
                        <img
                            src="/img/logo-davivienda.webp"
                            alt="Davivienda"
                            width={270}
                            height={88}
                            loading="lazy"
                            decoding="async"
                            className="h-[72px] lg:h-[88px] w-auto object-contain"
                        />
                    </div>

                    {/* Kredit Iframe */}
                    <div className="w-full apple-reveal" style={{ transitionDelay: '0.2s' }}>
                        <iframe
                            src="https://kredit.konsul.digital/?mode=embed&company_id=d71c8697-c123-487f-b1f1-9852d01186b4&form_id=76e605b2-d7de-463a-acdd-bb8ec1082225"
                            width="100%"
                            height="1400"
                            frameBorder="0"
                            loading="lazy"
                            style={{
                                borderRadius: '20px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                            title={lang === 'es' ? 'Calculadora hipotecaria Davivienda' : 'Davivienda mortgage calculator'}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MortgageCalculator;

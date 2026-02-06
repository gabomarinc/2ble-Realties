import React from 'react';
import { Language } from '../types';

interface MortgageCalculatorProps {
    lang: Language;
}

const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ lang }) => {
    return (
        <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-10 reveal">
                <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
                    {/* Davivienda Logo */}
                    <div className="mb-12 apple-reveal" style={{ transitionDelay: '0.1s' }}>
                        <img
                            src="/logo-davivienda.png"
                            alt="Davivienda"
                            className="h-16 lg:h-20 object-contain"
                        />
                    </div>

                    {/* Kredit Iframe */}
                    <div className="w-full apple-reveal" style={{ transitionDelay: '0.2s' }}>
                        <iframe
                            src="https://kredit.konsul.digital/?mode=embed&company_id=d71c8697-c123-487f-b1f1-9852d01186b4&form_id=76e605b2-d7de-463a-acdd-bb8ec1082225"
                            width="100%"
                            height="800"
                            frameBorder="0"
                            style={{
                                borderRadius: '20px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                            title="Mortgage Calculator"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MortgageCalculator;

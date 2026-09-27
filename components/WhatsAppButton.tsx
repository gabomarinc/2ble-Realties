import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { WHATSAPP_URL } from '../seo';

const WhatsAppButton: React.FC<{ lang: Language; href?: string }> = ({ lang, href = WHATSAPP_URL }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={lang === 'es' ? 'Escríbenos por WhatsApp' : 'Message us on WhatsApp'}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[70] bg-champagne text-white p-4 lg:p-6 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform"
    >
        <MessageCircle size={32} aria-hidden="true" />
    </a>
);

export default WhatsAppButton;

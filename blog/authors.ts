import { Language } from '../types';
import { AuthorId } from './types';

export interface Author {
    name: string;
    image: string;
    /** 160x160 para avatares */
    avatar: string;
    whatsapp: string;
    phoneDisplay: string;
    role: Record<Language, string>;
    bio: Record<Language, string>;
}

export const AUTHORS: Record<AuthorId, Author> = {
    jonathan: {
        name: 'Jonathan Valverde',
        image: 'img/foto-jonathan.webp',
        avatar: 'img/avatar-jonathan.webp',
        whatsapp: 'https://wa.me/50763145710',
        phoneDisplay: '+507 6314-5710',
        role: { es: 'Asesor inmobiliario en 2Ble Realty', en: 'Real estate advisor at 2Ble Realty' },
        bio: {
            es: 'Acompaña a compradores e inversionistas locales e internacionales en la búsqueda, negociación y cierre de propiedades en Panamá, con acceso a una amplia red de inversionistas y propiedades premium.',
            en: 'Guides local and international buyers and investors through the search, negotiation and closing of properties in Panama, with access to a broad network of investors and premium properties.',
        },
    },
    yiniva: {
        name: 'Yiniva Cedeño',
        image: 'img/foto-yiniva.webp',
        avatar: 'img/avatar-yiniva.webp',
        whatsapp: 'https://wa.me/50767635522',
        phoneDisplay: '+507 6763-5522',
        role: { es: 'Asesora inmobiliaria en 2Ble Realty', en: 'Real estate advisor at 2Ble Realty' },
        bio: {
            es: 'Ayuda a inversionistas a comparar zonas y proyectos en Panamá con información clara y basada en datos, para que cada decisión de compra esté bien fundamentada.',
            en: 'Helps investors compare areas and projects in Panama with clear, data-driven information, so every purchase decision is well founded.',
        },
    },
};

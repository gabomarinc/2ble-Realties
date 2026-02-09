import React from 'react';

export type Language = 'en' | 'es';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  tag: string;
}

export interface GalleryItem {
  image: string;
  title: string;
  price: string;
}

export interface Development {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  fullDescription?: string;
  gallery?: (string | GalleryItem)[];
  highlights?: string[];
}

export interface ContentData {
  nav: {
    about: string;
    properties: string;
    developments: string;
    invest: string;
    contact: string;
  };
  hero: {
    slogan: string;
    title: React.ReactNode | string;
    subtitle: string;
    cta: string;
  };
  developments: {
    title: string;
    subtitle: string;
    items: Development[];
  };
  properties: {
    title: string;
    subtitle: string;
    cta: string;
    items: Property[];
  };
  reversePurchase: {
    title: string;
    subtitle: string;
    description: string;
    steps: { title: string; desc: string }[];
  };
  authority: {
    slides: {
      title: string;
      mainTitle: React.ReactNode | string;
      description: string;
      image: string;
      logoOverlay?: boolean;
      stats: { value: string | React.ReactNode; label?: string }[];
    }[];
  };
  missionVision: {
    subTitle: string;
    title: React.ReactNode | string;
    mission: { title: string; desc: string };
    vision: { title: string; desc: string };
  };
  benefits: {
    title: string;
    items: { title: string; desc: string }[];
  };
  referral: {
    title: string;
    desc: string;
    cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    whatsappButton: string;
  };
  ui: {
    premiumAsset: string;
    discoverMore: string;
    keyFeatures: string;
    gallery: string;
    inquireInterest: string;
    privatePortfolio: string;
    clickInquiry: string;
    curated: string;
    since2010: string;
  };
}

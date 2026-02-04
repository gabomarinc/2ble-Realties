import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, MapPin, X } from 'lucide-react';
import { CONTENT } from '../constants';
import { Language, Development } from '../types';

interface DevelopmentsProps {
    lang: Language;
}

const Developments: React.FC<DevelopmentsProps> = ({ lang }) => {
    const content = CONTENT[lang].developments;
    const ui = CONTENT[lang].ui;
    const [selectedItem, setSelectedItem] = useState<Development | null>(null);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    return (
        <section id="developments" className="bg-white py-24 lg:py-40 reveal text-navy">
            <div className="container mx-auto px-6 lg:px-10 mb-12 lg:mb-20">
                <div className="reveal">
                    <h2 className="text-4xl md:text-8xl font-serif leading-none mb-6 lg:mb-8 font-black tracking-tight">
                        {content.title}
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-400 font-light max-w-2xl italic leading-relaxed">
                        {content.subtitle}
                    </p>
                </div>
            </div>

            <div className="gallery-container">
                {content.items.map((item) => (
                    <div
                        key={item.id}
                        className="gallery-item group cursor-pointer"
                        onClick={() => setSelectedItem(item)}
                    >
                        <img src={item.image} alt={item.title} loading="lazy" />
                        <div className="gallery-content">
                            <span className="text-champagne text-[9px] uppercase tracking-[0.6em] font-black mb-2 block">{ui.premiumAsset}</span>
                            <h3 className="text-white text-3xl lg:text-4xl font-serif mb-4 leading-none">{item.title}</h3>
                            <div className="flex items-center gap-3 text-white/60 mb-6">
                                <MapPin size={14} className="text-champagne" />
                                <span className="text-[10px] uppercase tracking-widest font-bold">{item.location}</span>
                            </div>
                            <p className="text-white/70 font-light text-sm mb-8 max-w-xs">{item.description}</p>
                            <div className="flex items-center gap-3 text-white text-[9px] uppercase tracking-widest font-black group-hover:gap-5 transition-all">
                                {ui.discoverMore} <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {selectedItem && createPortal(
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-navy/60 backdrop-blur-md animate-in fade-in duration-300"
                        onClick={() => setSelectedItem(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white w-full max-w-[70rem] max-h-[85vh] overflow-y-auto rounded-[30px] shadow-2xl animate-zoom-center scrollbar-hide">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-navy p-2 rounded-full transition-all"
                        >
                            <X size={24} />
                        </button>

                        <div className="grid lg:grid-cols-2">
                            {/* Image Section */}
                            <div className="h-64 lg:h-auto relative">
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent lg:hidden"></div>
                                <div className="absolute bottom-6 left-6 text-white lg:hidden">
                                    <h3 className="text-3xl font-serif leading-none">{selectedItem.title}</h3>
                                    <p className="text-sm opacity-80 mt-1">{selectedItem.location}</p>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="p-8 lg:p-12 lg:pr-16">
                                <div className="hidden lg:block mb-8">
                                    <h3 className="text-5xl font-serif text-navy leading-none mb-2">{selectedItem.title}</h3>
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <MapPin size={16} />
                                        <span className="text-xs uppercase tracking-widest font-bold">{selectedItem.location}</span>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed font-light mb-10">
                                    {selectedItem.fullDescription || selectedItem.description}
                                </p>

                                {/* Highlights */}
                                {selectedItem.highlights && (
                                    <div className="mb-12">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-navy mb-6">{ui.keyFeatures}</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {selectedItem.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-slate-500">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-champagne"></div>
                                                    <span className="text-sm">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Mini Gallery */}
                                {selectedItem.gallery && (
                                    <div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-navy mb-6">{ui.gallery}</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {selectedItem.gallery.map((item, idx) => {
                                                const isObj = typeof item === 'object';
                                                const imgSrc = isObj ? item.image : item;
                                                const imgTitle = isObj ? item.title : '';
                                                const imgPrice = isObj ? item.price : '';

                                                return (
                                                    <div
                                                        key={idx}
                                                        className="group cursor-pointer"
                                                        onClick={() => setLightboxImage(imgSrc)}
                                                    >
                                                        <div className="aspect-video rounded-xl overflow-hidden mb-3 relative">
                                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                                                            <img src={imgSrc} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" alt={imgTitle || "Gallery"} />
                                                        </div>
                                                        {isObj && (
                                                            <div>
                                                                <h5 className="text-navy font-bold text-sm tracking-wide mb-1">{imgTitle}</h5>
                                                                <p className="text-champagne text-xs font-light uppercase tracking-widest">{imgPrice}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end">
                                    <button className="bg-navy text-white px-8 py-4 rounded-full font-medium hover:bg-champagne transition-colors flex items-center gap-2">
                                        {ui.inquireInterest} <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}

            {/* LIGHTBOX */}
            {lightboxImage && createPortal(
                <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setLightboxImage(null)}>
                    <button
                        className="absolute top-6 right-6 z-20 text-white/50 hover:text-white p-2 transition-colors"
                    >
                        <X size={40} />
                    </button>
                    <img
                        src={lightboxImage}
                        alt="Full View"
                        className="max-w-[95vw] max-h-[95vh] object-contain rounded-sm shadow-2xl animate-zoom-in"
                    />
                </div>,
                document.body
            )}
        </section>
    );
};

export default Developments;

import React from 'react';
import Img from '../components/Img';

/** Imagen dentro de un artículo, con pie de foto */
export const Figure: React.FC<{ src: string; alt: string; caption?: string }> = ({ src, alt, caption }) => (
    <figure className="my-10 lg:my-12">
        <div className="rounded-[28px] lg:rounded-[36px] overflow-hidden shadow-xl aspect-[16/9] bg-slate-100">
            <Img src={src} alt={alt} sizes="(min-width: 1024px) 760px, 100vw" className="w-full h-full object-cover" />
        </div>
        {caption && <figcaption className="mt-4 text-sm text-slate-500 italic text-center">{caption}</figcaption>}
    </figure>
);

export interface ProjectCard {
    name: string;
    price: string;
    image: string;
    alt: string;
}

/** Tarjetas de proyectos con precio "desde" */
export const Projects: React.FC<{ items: ProjectCard[]; note: string }> = ({ items, note }) => (
    <div className="my-10 not-prose">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {items.map((p) => (
                <div key={p.name} className="group rounded-[24px] overflow-hidden bg-slate-50 border border-slate-100">
                    <div className="aspect-[16/10] overflow-hidden">
                        <Img
                            src={p.image}
                            alt={p.alt}
                            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-5">
                        <span className="block font-serif text-xl text-navy leading-tight">{p.name}</span>
                        <span className="block text-champagne-dark text-xs uppercase tracking-widest font-bold mt-2">{p.price}</span>
                    </div>
                </div>
            ))}
        </div>
        <span className="block mt-4 text-xs text-slate-500 italic">{note}</span>
    </div>
);

/** Tabla responsive */
export const Table: React.FC<{ head: string[]; rows: React.ReactNode[][]; caption?: string }> = ({ head, rows, caption }) => (
    <div className="my-10 overflow-x-auto rounded-[24px] border border-slate-200 not-prose">
        <table className="w-full min-w-[640px] text-left text-sm">
            {caption && <caption className="sr-only">{caption}</caption>}
            <thead className="bg-navy text-white">
                <tr>
                    {head.map((h) => (
                        <th key={h} scope="col" className="px-5 py-4 text-[11px] uppercase tracking-[0.15em] font-black">{h}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
                {rows.map((r, i) => (
                    <tr key={i} className="odd:bg-white even:bg-slate-50">
                        {r.map((c, j) => (
                            j === 0
                                ? <th key={j} scope="row" className="px-5 py-4 font-serif text-base text-navy font-normal">{c}</th>
                                : <td key={j} className="px-5 py-4 text-slate-600">{c}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

/** Recuadro destacado (consejo) */
export const Tip: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div className="my-8 rounded-[24px] bg-champagne/10 border border-champagne/30 p-6 lg:p-7 not-prose">
        <span className="block text-champagne-dark text-[11px] uppercase tracking-[0.3em] font-black mb-2">{label}</span>
        <div className="text-slate-700 leading-relaxed">{children}</div>
    </div>
);

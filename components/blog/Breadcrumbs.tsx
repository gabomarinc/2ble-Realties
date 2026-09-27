import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs: React.FC<{ items: { name: string; href?: string }[] }> = ({ items }) => (
    <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-white/70">
            {items.map((it, i) => (
                <li key={i} className="flex items-center gap-2">
                    {i > 0 && <ChevronRight size={12} className="text-champagne" aria-hidden="true" />}
                    {it.href
                        ? <a href={it.href} className="hover:text-champagne transition-colors">{it.name}</a>
                        : <span aria-current="page" className="text-white/90 normal-case tracking-normal font-medium line-clamp-1">{it.name}</span>}
                </li>
            ))}
        </ol>
    </nav>
);

export default Breadcrumbs;

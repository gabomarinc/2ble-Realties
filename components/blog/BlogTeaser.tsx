import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { BLOG_TEXT, postsFor } from '../../blog';
import { blogPath } from '../../blog/paths';
import PostCard from './PostCard';

/** Últimos artículos en la home: enlaces internos hacia el blog */
const BlogTeaser: React.FC<{ lang: Language }> = ({ lang }) => {
    const t = BLOG_TEXT[lang];
    const posts = postsFor(lang).slice(0, 2);

    return (
        <section id="blog" className="bg-slate-50 py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16 reveal">
                    <div>
                        <span className="inline-block text-champagne-dark font-black tracking-[0.4em] uppercase text-[10px] lg:text-[11px] mb-6">
                            {t.teaserLabel}
                        </span>
                        <h2 className="text-4xl md:text-7xl font-serif text-navy leading-none tracking-tight">{t.teaserTitle}</h2>
                    </div>
                    <a
                        href={blogPath(lang)}
                        className="inline-flex items-center gap-4 self-start lg:self-auto border border-navy/20 text-navy px-6 py-4 hover:border-champagne hover:text-champagne-dark transition-colors uppercase tracking-[0.3em] text-[10px] font-black"
                    >
                        {t.teaserAll} <ArrowRight size={14} aria-hidden="true" />
                    </a>
                </div>
                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {posts.map((p) => <PostCard key={p.slug} post={p} headingLevel="h3" />)}
                </div>
            </div>
        </section>
    );
};

export default BlogTeaser;

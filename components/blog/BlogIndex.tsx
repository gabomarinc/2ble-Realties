import React from 'react';
import { Language } from '../../types';
import { CONTENT } from '../../constants';
import { BLOG_TEXT, postsFor } from '../../blog';
import { homePath } from '../../blog/paths';
import Navbar from '../Navbar';
import Footer from '../Footer';
import WhatsAppButton from '../WhatsAppButton';
import PostCard from './PostCard';
import Breadcrumbs from './Breadcrumbs';

const BlogIndex: React.FC<{ lang: Language; altHref: string }> = ({ lang, altHref }) => {
    const t = BLOG_TEXT[lang];
    const posts = postsFor(lang);

    return (
        <div className="min-h-screen bg-navy text-white">
            <Navbar lang={lang} navContent={CONTENT[lang].nav} isHome={false} altHref={altHref} />

            <main>
                <header className="relative overflow-hidden pt-40 pb-24 lg:pt-52 lg:pb-32">
                    <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-champagne/10 blur-3xl" aria-hidden="true"></div>
                    <div className="container mx-auto px-6 lg:px-10 relative">
                        <Breadcrumbs items={[{ name: t.home, href: homePath(lang) }, { name: t.blog }]} />
                        <span className="hero-title inline-block text-champagne tracking-[0.4em] uppercase text-[10px] font-bold mt-10 mb-8">
                            2Ble Realty · Blog
                        </span>
                        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight max-w-5xl mb-8">
                            {t.indexTitle}
                        </h1>
                        <p className="hero-title text-white/75 text-lg md:text-xl font-light max-w-2xl leading-relaxed">{t.indexIntro}</p>
                    </div>
                </header>

                <section className="bg-slate-50 py-20 lg:py-28 rounded-t-[40px] lg:rounded-t-[60px]">
                    <div className="container mx-auto px-6 lg:px-10">
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {posts.map((p) => <PostCard key={p.slug} post={p} />)}
                        </div>
                    </div>
                </section>
            </main>

            <Footer lang={lang} navContent={CONTENT[lang].nav} isHome={false} />
            <WhatsAppButton lang={lang} />
        </div>
    );
};

export default BlogIndex;

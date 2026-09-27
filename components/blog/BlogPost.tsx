import React from 'react';
import { Check, Clock, MessageCircle, Plus } from 'lucide-react';
import { CONTENT } from '../../constants';
import { Post } from '../../blog/types';
import { AUTHORS } from '../../blog/authors';
import { BLOG_TEXT, formatDate, postsFor } from '../../blog';
import { blogPath, homePath } from '../../blog/paths';
import Navbar from '../Navbar';
import Footer from '../Footer';
import WhatsAppButton from '../WhatsAppButton';
import Img from '../Img';
import PostCard from './PostCard';
import Breadcrumbs from './Breadcrumbs';

const BlogPost: React.FC<{ post: Post; altHref: string }> = ({ post, altHref }) => {
    const { lang } = post;
    const t = BLOG_TEXT[lang];
    const author = AUTHORS[post.author];
    const related = postsFor(lang).filter((p) => p.key !== post.key).slice(0, 2);

    const toc = (
        <ol className="space-y-3 text-sm">
            {post.sections.map((s, i) => (
                <li key={s.id} className="flex gap-3">
                    <span className="text-champagne-dark font-black tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                    <a href={`#${s.id}`} className="text-slate-600 hover:text-navy transition-colors leading-snug">{s.title}</a>
                </li>
            ))}
            <li className="flex gap-3">
                <span className="text-champagne-dark font-black tabular-nums">{String(post.sections.length + 1).padStart(2, '0')}</span>
                <a href="#faq" className="text-slate-600 hover:text-navy transition-colors leading-snug">{t.faq}</a>
            </li>
        </ol>
    );

    const whatsappCta = (className = '') => (
        <a
            href={author.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-navy px-7 py-4 rounded-full uppercase tracking-[0.2em] font-black text-[10px] transition-all hover:scale-105 ${className}`}
        >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            {t.ctaButton}
        </a>
    );

    return (
        <div className="min-h-screen bg-navy text-white">
            <Navbar lang={lang} navContent={CONTENT[lang].nav} isHome={false} altHref={altHref} />

            <main>
                <article>
                    {/* Cabecera */}
                    <header className="relative overflow-hidden pt-40 pb-16 lg:pt-52 lg:pb-24">
                        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-champagne/10 blur-3xl" aria-hidden="true"></div>
                        <div className="container mx-auto px-6 lg:px-10 relative max-w-6xl">
                            <Breadcrumbs
                                items={[
                                    { name: t.home, href: homePath(lang) },
                                    { name: t.blog, href: blogPath(lang) },
                                    { name: post.title },
                                ]}
                            />
                            <span className="hero-title inline-block text-champagne tracking-[0.4em] uppercase text-[10px] font-bold mt-10 mb-6">
                                {post.category}
                            </span>
                            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.02] tracking-tight max-w-5xl mb-8">
                                {post.title}
                            </h1>
                            <p className="hero-title text-white/75 text-lg md:text-xl font-light max-w-3xl leading-relaxed mb-10">{post.description}</p>
                            <div className="hero-title flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/75">
                                <div className="flex items-center gap-3">
                                    <Img src={author.avatar} alt="" priority className="w-12 h-12 rounded-full object-cover object-top border-2 border-champagne/60" />
                                    <div>
                                        <p className="text-white font-medium">{t.by} {author.name}</p>
                                        <p className="text-xs">{author.role[lang]}</p>
                                    </div>
                                </div>
                                <p>
                                    {t.published}: <time dateTime={post.datePublished}>{formatDate(post.datePublished, lang)}</time>
                                    {post.dateModified !== post.datePublished && (
                                        <> · {t.updated}: <time dateTime={post.dateModified}>{formatDate(post.dateModified, lang)}</time></>
                                    )}
                                </p>
                                <p className="flex items-center gap-2"><Clock size={14} className="text-champagne" aria-hidden="true" /> {post.readingMinutes} {t.minRead}</p>
                            </div>

                            {/* Imagen principal */}
                            <div className="mt-12 lg:mt-16 relative rounded-[32px] lg:rounded-[48px] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] border border-white/10 aspect-[4/3] md:aspect-[21/9] bg-deep-charcoal">
                                <Img
                                    src={post.image}
                                    alt={post.imageAlt}
                                    priority
                                    sizes="(min-width: 1152px) 1100px, 100vw"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </header>

                    <div className="bg-white text-navy rounded-t-[40px] lg:rounded-t-[60px]">
                        <div className="container mx-auto px-6 lg:px-10 max-w-6xl py-16 lg:py-24">
                            <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-16 xl:gap-20">
                                <div className="min-w-0 max-w-3xl">
                                    {/* Respuesta rápida (AEO) */}
                                    <div className="border-l-4 border-champagne bg-slate-50 rounded-r-[28px] p-7 lg:p-9 mb-10">
                                        <p className="text-champagne-dark text-[11px] uppercase tracking-[0.3em] font-black mb-3">{t.answer}</p>
                                        <p className="text-lg lg:text-xl text-navy leading-relaxed font-light">{post.answer}</p>
                                    </div>

                                    {/* Puntos clave */}
                                    <section aria-labelledby="takeaways" className="bg-navy text-white rounded-[32px] p-8 lg:p-10 mb-12">
                                        <h2 id="takeaways" className="font-serif text-2xl lg:text-3xl mb-6">{t.takeaways}</h2>
                                        <ul className="space-y-4">
                                            {post.takeaways.map((k) => (
                                                <li key={k} className="flex gap-4">
                                                    <span className="mt-1 shrink-0 w-6 h-6 rounded-full bg-champagne/20 flex items-center justify-center">
                                                        <Check size={14} className="text-champagne" aria-hidden="true" />
                                                    </span>
                                                    <span className="text-white/85 font-light leading-relaxed">{k}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    {/* Índice en móvil */}
                                    <details className="lg:hidden group mb-12 rounded-[24px] border border-slate-200 p-6">
                                        <summary className="flex cursor-pointer list-none items-center justify-between text-[11px] uppercase tracking-[0.3em] font-black text-navy [&::-webkit-details-marker]:hidden">
                                            {t.toc}
                                            <Plus size={18} className="text-champagne-dark transition-transform group-open:rotate-45" aria-hidden="true" />
                                        </summary>
                                        <div className="mt-6">{toc}</div>
                                    </details>

                                    {/* Contenido */}
                                    <div className="article-prose">
                                        {post.sections.map((s) => (
                                            <section key={s.id} id={s.id} className="scroll-mt-32">
                                                <h2>{s.title}</h2>
                                                {s.content}
                                            </section>
                                        ))}
                                    </div>

                                    {/* Preguntas frecuentes */}
                                    <section id="faq" className="scroll-mt-32 mt-16">
                                        <h2 className="font-serif text-3xl lg:text-4xl text-navy mb-8">{t.faq}</h2>
                                        <div className="divide-y divide-slate-200 border-y border-slate-200">
                                            {post.faq.map((f) => (
                                                <details key={f.q} className="group py-6">
                                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                                                        <h3 className="font-serif text-lg lg:text-xl text-navy">{f.q}</h3>
                                                        <Plus size={20} className="shrink-0 text-champagne-dark transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
                                                    </summary>
                                                    <p className="mt-4 text-slate-600 font-light leading-relaxed">{f.a}</p>
                                                </details>
                                            ))}
                                        </div>
                                    </section>

                                    <p className="mt-12 text-xs text-slate-500 leading-relaxed italic">{t.disclaimer}</p>

                                    {/* Autor (E-E-A-T) */}
                                    <section aria-label={t.writtenBy} className="mt-12 bg-slate-50 rounded-[32px] p-7 lg:p-9 flex flex-col sm:flex-row gap-6 sm:items-center">
                                        <Img src={author.avatar} alt={author.name} className="w-24 h-24 lg:w-28 lg:h-28 rounded-[24px] object-cover object-top shrink-0" />
                                        <div>
                                            <p className="text-champagne-dark text-[11px] uppercase tracking-[0.3em] font-black mb-2">{t.writtenBy}</p>
                                            <p className="font-serif text-2xl text-navy mb-1">{author.name}</p>
                                            <p className="text-sm text-slate-500 mb-3">{author.role[lang]}</p>
                                            <p className="text-slate-600 font-light leading-relaxed mb-4">{author.bio[lang]}</p>
                                            <a href={author.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-champagne-dark hover:text-navy transition-colors">
                                                {t.talkTo} {author.name.split(' ')[0]} · {author.phoneDisplay}
                                            </a>
                                        </div>
                                    </section>
                                </div>

                                {/* Barra lateral */}
                                <aside className="hidden lg:block">
                                    <div className="sticky top-32 space-y-8">
                                        <nav aria-label={t.toc} className="rounded-[28px] border border-slate-200 p-7">
                                            <p className="text-[11px] uppercase tracking-[0.3em] font-black text-navy mb-6">{t.toc}</p>
                                            {toc}
                                        </nav>
                                        <div className="rounded-[28px] bg-navy text-white p-7">
                                            <p className="font-serif text-2xl leading-tight mb-3">{t.ctaTitle}</p>
                                            <p className="text-white/75 text-sm font-light leading-relaxed mb-6">{t.ctaText}</p>
                                            {whatsappCta('w-full px-4')}
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>

                        {/* Sigue leyendo */}
                        {related.length > 0 && (
                            <section className="bg-slate-50 py-20 lg:py-28">
                                <div className="container mx-auto px-6 lg:px-10 max-w-6xl">
                                    <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-12">{t.related}</h2>
                                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                                        {related.map((p) => <PostCard key={p.slug} post={p} headingLevel="h3" />)}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* CTA final */}
                        <section className="bg-navy text-white py-24 lg:py-32">
                            <div className="container mx-auto px-6 lg:px-10 max-w-4xl text-center">
                                <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6">{t.ctaTitle}</h2>
                                <p className="text-white/75 text-lg lg:text-xl font-light italic mb-10">{t.ctaText}</p>
                                {whatsappCta()}
                            </div>
                        </section>
                    </div>
                </article>
            </main>

            <Footer lang={lang} navContent={CONTENT[lang].nav} isHome={false} />
            <WhatsAppButton lang={lang} href={author.whatsapp} />
        </div>
    );
};

export default BlogPost;

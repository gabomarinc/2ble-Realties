import React from 'react';
import { ArrowRight } from 'lucide-react';
import Img from '../Img';
import { Post } from '../../blog/types';
import { AUTHORS } from '../../blog/authors';
import { BLOG_TEXT, formatDate } from '../../blog';
import { postPath } from '../../blog/paths';

const PostCard: React.FC<{ post: Post; headingLevel?: 'h2' | 'h3' }> = ({ post, headingLevel = 'h2' }) => {
    const t = BLOG_TEXT[post.lang];
    const author = AUTHORS[post.author];
    const Heading = headingLevel;
    const href = postPath(post.lang, post.slug);

    return (
        <article className="group relative flex flex-col bg-white rounded-[36px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(11,18,33,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_70px_-25px_rgba(11,18,33,0.4)]">
            <div className="relative aspect-[16/10] overflow-hidden">
                <Img
                    src={post.image}
                    alt={post.imageAlt}
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent"></div>
                <span className="absolute top-5 left-5 bg-navy/80 backdrop-blur-md text-champagne text-[10px] uppercase tracking-[0.25em] font-black px-4 py-2 rounded-full">
                    {post.category}
                </span>
            </div>
            <div className="flex flex-col flex-1 p-7 lg:p-9">
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-4">
                    <time dateTime={post.datePublished}>{formatDate(post.datePublished, post.lang)}</time> · {post.readingMinutes} {t.minRead}
                </p>
                <Heading className="font-serif text-2xl lg:text-3xl text-navy leading-tight mb-4">
                    <a href={href} className="after:absolute after:inset-0">{post.title}</a>
                </Heading>
                <p className="text-slate-600 font-light leading-relaxed mb-8">{post.description}</p>
                <div className="mt-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Img src={author.avatar} alt="" className="w-10 h-10 rounded-full object-cover object-top" />
                        <span className="text-sm text-navy font-medium">{author.name}</span>
                    </div>
                    <span className="flex items-center gap-2 text-champagne-dark text-[10px] uppercase tracking-[0.2em] font-black group-hover:gap-4 transition-all">
                        {t.readMore} <ArrowRight size={14} aria-hidden="true" />
                    </span>
                </div>
            </div>
        </article>
    );
};

export default PostCard;

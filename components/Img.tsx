import React, { useEffect, useRef, useState } from 'react';
import { IMAGE_META } from '../image-meta';

type ImgProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
    /** Ruta dentro de public/, p. ej. "img/foto-jonathan.webp" */
    src: string;
    alt: string;
    /** Para la imagen principal (LCP): carga inmediata y prioridad alta */
    priority?: boolean;
};

const PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

/**
 * <img> con width/height, srcset (640/1024/original) y carga diferida.
 * Salvo `priority`, la foto real se asigna cuando está a ~600px de la pantalla,
 * así no compite con la primera pintura (el loading="lazy" nativo empieza demasiado pronto).
 */
const Img: React.FC<ImgProps> = ({ src, alt, priority = false, sizes = '100vw', ...rest }) => {
    const [inView, setInView] = useState(priority);
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (inView) return;
        const el = ref.current;
        if (!el || !('IntersectionObserver' in window)) {
            setInView(true);
            return;
        }
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, { rootMargin: '600px 0px' });
        observer.observe(el);
        return () => observer.disconnect();
    }, [inView]);

    const meta = IMAGE_META[src];
    const url = `/${src}`;
    const variants = meta?.sm ? [
        `${url.replace(/\.webp$/, '-sm.webp')} 640w`,
        ...(meta.md ? [`${url.replace(/\.webp$/, '-md.webp')} 1024w`] : []),
        `${url} ${meta.w}w`,
    ] : [];
    const srcSet = inView && variants.length ? variants.join(', ') : undefined;

    return (
        <img
            ref={ref}
            src={inView ? url : PLACEHOLDER}
            srcSet={srcSet}
            sizes={srcSet ? sizes : undefined}
            width={meta?.w}
            height={meta?.h}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            fetchPriority={priority ? 'high' : undefined}
            {...rest}
        />
    );
};

export default Img;

'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './ContentImgLeft.module.scss';

type Props = {
    image: StaticImageData | string;
    imageAlt: string;
    eyebrow?: string;
    title: string;
    children: React.ReactNode;
    caption?: string;
    ctaLabel?: string;
    ctaHref?: string;
    align?: 'left' | 'right';
    indent?: string;
    maxWidth?: string;
    className?: string;
};

type CSSVarKeys = '--indent' | '--maxw';
type CSSVars = Partial<Record<CSSVarKeys, string>>;

export default function ContentImgLeft({
                                             image,
                                             imageAlt,
                                             eyebrow,
                                             title,
                                             children,
                                             caption,
                                             ctaLabel,
                                             ctaHref,
                                             align = 'left',
                                             indent,
                                             maxWidth,
                                             className,
                                         }: Props) {
    const cls = [
        styles.feature,
        align === 'right' ? styles.isRight : '',
        className ?? '',
    ]
        .filter(Boolean)
        .join(' ');

    const styleVars: React.CSSProperties & CSSVars = {
        '--indent': indent ?? 'clamp(16px, 5vw, 64px)',
        '--maxw': maxWidth ?? '1200px',
    };

    return (
        <section className={cls} style={styleVars}>
            <div className={styles.inner}>
                <div className={styles.media}>
                    <div className={styles.mediaFrame}>
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            sizes="(min-width: 900px) 50vw, 100vw"
                            priority={false}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
                </div>

                <div className={styles.copy}>
                    {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.prose}>{children}</div>

                    {ctaLabel && ctaHref ? (
                        <a className={styles.cta} href={ctaHref} aria-label={ctaLabel}>
                            {ctaLabel}
                        </a>
                    ) : null}
                </div>
            </div>
        </section>
    );
}

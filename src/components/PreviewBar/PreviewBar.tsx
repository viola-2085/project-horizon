'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import styles from './PreviewBar.module.scss';

export default function PreviewBar() {
    useEffect(() => {
        document.documentElement.style.setProperty('--preview-h', '44px');
        return () => { document.documentElement.style.removeProperty('--preview-h'); };
    }, []);

    return (
        <div className={styles.bar} role="region" aria-label="Preview mode">
            <div className="container">
                <div className={styles.row}>
                    <span className={styles.note}>Preview mode — internal only</span>
                    <nav className={styles.nav}>
                        <Link href="/v1" target="_blank" rel="noopener noreferrer" prefetch={false}>V1</Link>
                        <Link href="/v2" target="_blank" rel="noopener noreferrer" prefetch={false}>V2</Link>
                        <Link href="/v3" target="_blank" rel="noopener noreferrer" prefetch={false}>V3</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}

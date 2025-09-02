'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        (async () => {
            const AOS = (await import('aos')).default;
            AOS.init({
                duration: 700,
                easing: 'ease-out',
                once: true,
                offset: 60,
            });
        })();
    }, []);

    return <>{children}</>;
}

'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        let mounted = true;
        (async () => {
            const AOS = (await import('aos')).default;
            if (!mounted) return;
            AOS.init({
                duration: 700,
                easing: 'ease-out',
                once: true,
                offset: 60,
            });
        })();
        return () => { mounted = false; };
    }, []);

    useEffect(() => {
        (async () => {
            const AOS = (await import('aos')).default;
            AOS.refreshHard();
        })();
    }, [pathname]);

    return <>{children}</>;
}

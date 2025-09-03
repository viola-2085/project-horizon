'use client';

import React from 'react';

type Props = {
    title: string;
    details?: string;
    location?: string;
    startLocalISO: string;
    endLocalISO: string;
    timeZone?: string;
    icsPath?: string;
    label?: string;
    className?: string;
};

export default function SaveTheDate({
                                        title,
                                        details = 'Please save the date — details to follow.',
                                        location = 'London',
                                        startLocalISO,
                                        endLocalISO,
                                        timeZone = 'Europe/London',
                                        icsPath = '/api/ics',
                                        label = 'Add to calendar',
                                        className,
                                    }: Props) {
    const isNonEmpty = (v: unknown): v is string =>
        typeof v === 'string' && v.trim().length > 0;

    const invalid = !isNonEmpty(startLocalISO) || !isNonEmpty(endLocalISO);

    const fmtGoogle = (iso: string) => (isNonEmpty(iso) ? iso.replace(/[-:]/g, '').slice(0, 15) : '');

    const q = (s: string) => encodeURIComponent(s);

    const urls = {
        google:
            `https://calendar.google.com/calendar/render?action=TEMPLATE` +
            `&text=${q(title)}&details=${q(details)}&location=${q(location)}` +
            `&dates=${fmtGoogle(startLocalISO)}/${fmtGoogle(endLocalISO)}&ctz=${q(timeZone)}`,
        outlookOffice:
            `https://outlook.office.com/calendar/0/deeplink/compose` +
            `?subject=${q(title)}&body=${q(details)}&location=${q(location)}` +
            `&startdt=${q(startLocalISO)}&enddt=${q(endLocalISO)}` +
            `&allday=false&path=/calendar/action/compose&rru=addevent&timezone=${q(timeZone)}`,
        outlookLive:
            `https://outlook.live.com/calendar/0/deeplink/compose` +
            `?subject=${q(title)}&body=${q(details)}&location=${q(location)}` +
            `&startdt=${q(startLocalISO)}&enddt=${q(endLocalISO)}` +
            `&allday=false&path=/calendar/action/compose&rru=addevent&timezone=${q(timeZone)}`,
        ics:
            `${icsPath}?title=${q(title)}&details=${q(details)}&location=${q(location)}` +
            `&start=${q(startLocalISO)}&end=${q(endLocalISO)}&tz=${q(timeZone)}`,
    };

    function pickUrl() {
        const ua = (typeof navigator !== 'undefined' ? navigator.userAgent : '').toLowerCase();
        const isIOS = /iphone|ipad|ipod/.test(ua);
        const isMac = /macintosh/.test(ua);
        const isSafari = /safari/.test(ua) && !/chrome|crios|edg\//.test(ua);
        const isAndroid = /android/.test(ua);
        const isWindows = /windows/.test(ua);
        const isEdge = /edg\//.test(ua);

        if (isIOS || (isMac && isSafari)) return urls.ics;
        if (isWindows || isEdge) return urls.outlookOffice;
        if (isAndroid) return urls.google;
        return urls.google;
    }

    function onClick() {
        if (invalid) return;
        const url = pickUrl();
        if (!url) return;
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <button
            type="button"
            className={className}
            onClick={onClick}
            aria-label={label}
            disabled={invalid}
            aria-disabled={invalid ? 'true' : undefined}
            title={invalid ? 'Date/time not set' : undefined}
        >
            {label}
        </button>
    );
}

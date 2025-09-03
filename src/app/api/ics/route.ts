import { NextResponse } from 'next/server';

function pad(n: number) { return String(n).padStart(2, '0'); }
function toLocalParts(dateISO: string, timeZone: string) {
    const d = new Date(dateISO);
    const p = new Intl.DateTimeFormat('en-GB', {
        timeZone,
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false,
    }).formatToParts(d);
    const get = (t: string) => p.find(x => x.type === t)?.value ?? '00';
    return {
        y: get('year'), m: get('month'), d: get('day'),
        hh: get('hour'), mi: get('minute'), ss: get('second'),
    };
}
function icsLocalStamp(iso: string, tz: string) {
    const { y, m, d, hh, mi, ss } = toLocalParts(iso, tz);
    return `${y}${m}${d}T${hh}${mi}${ss}`;
}
function fmtUTC(d: Date) {
    return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}
function escapeICS(text: string) {
    return text.replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\r?\n/g,'\\n');
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const title   = url.searchParams.get('title')   || 'Event';
    const details = url.searchParams.get('details') || '';
    const location= url.searchParams.get('location')|| '';
    const start   = url.searchParams.get('start')   || '';
    const end     = url.searchParams.get('end')     || '';
    const tz      = url.searchParams.get('tz')      || 'Europe/London';

    if (!start || !end) {
        return new NextResponse('Missing start/end', { status: 400 });
    }

    const dtStart = icsLocalStamp(start, tz);
    const dtEnd   = icsLocalStamp(end, tz);

    const VTIMEZONE = [
        'BEGIN:VTIMEZONE',
        `TZID:${tz}`,
        'X-LIC-LOCATION:Europe/London',
        'BEGIN:DAYLIGHT',
        'TZOFFSETFROM:+0000',
        'TZOFFSETTO:+0100',
        'TZNAME:BST',
        'DTSTART:19700329T010000',
        'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU',
        'END:DAYLIGHT',
        'BEGIN:STANDARD',
        'TZOFFSETFROM:+0100',
        'TZOFFSETTO:+0000',
        'TZNAME:GMT',
        'DTSTART:19701025T020000',
        'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
        'END:STANDARD',
        'END:VTIMEZONE',
    ].join('\r\n');

    const lines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//YourSite//AddToCalendar//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        VTIMEZONE,
        'BEGIN:VEVENT',
        `UID:${Date.now()}@yourdomain`,
        `DTSTAMP:${fmtUTC(new Date())}`,
        `DTSTART;TZID=${tz}:${dtStart}`,
        `DTEND;TZID=${tz}:${dtEnd}`,
        `SUMMARY:${escapeICS(title)}`,
        `LOCATION:${escapeICS(location)}`,
        `DESCRIPTION:${escapeICS(details)}`,
        'END:VEVENT',
        'END:VCALENDAR',
    ].join('\r\n');

    return new NextResponse(lines, {
        status: 200,
        headers: {
            'Content-Type': 'text/calendar; charset=utf-8',
            'Content-Disposition': 'attachment; filename="event.ics"',
            'Cache-Control': 'no-store',
        },
    });
}

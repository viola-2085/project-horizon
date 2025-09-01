import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const payload = await req.json().catch(() => ({}));
  // TODO: wire to real email/CRM/webhook; for now just log:
  console.log('Lead:', payload);
  return NextResponse.json({ ok: true });
}

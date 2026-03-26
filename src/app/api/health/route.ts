import { NextResponse } from 'next/server'

export async function GET() {
  const missing: string[] = []
  if (!process.env.RESEND_API_KEY?.trim()) missing.push('RESEND_API_KEY')
  if (!process.env.CONTACT_NOTIFY_EMAIL?.trim()) missing.push('CONTACT_NOTIFY_EMAIL')

  if (missing.length > 0) {
    return NextResponse.json({
      ok: false,
      error: 'Mungojnë variablat e mjedisit',
      missing,
      hint: 'Kontrollo .env.local dhe rinisni serverin (npm run dev).',
    }, { status: 503 })
  }

  return NextResponse.json({
    ok: true,
    message: 'Kontakt forma është aktive (pa databazë).',
    config: {
      emailProvider: 'Resend',
      notifyTo: process.env.CONTACT_NOTIFY_EMAIL,
    },
  })
}

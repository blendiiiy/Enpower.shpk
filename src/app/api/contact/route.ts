import { NextResponse } from 'next/server'
import { sendContactNotification, sendContactConfirmationToClient } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, requestType, preferredDate, preferredTime } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Emri, email dhe mesazhi janë të detyrueshëm.' },
        { status: 400 }
      )
    }

    const contactData = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : null,
      message: String(message).trim(),
      requestType: requestType || 'general',
      preferredDate: preferredDate || null,
      preferredTime: preferredTime || null,
    }

    const hasResend = !!process.env.RESEND_API_KEY?.trim()
    const notifyTo = process.env.CONTACT_NOTIFY_EMAIL?.trim()

    if (process.env.NODE_ENV === 'development') {
      if (!hasResend || !notifyTo) {
        console.warn('[Contact] Email nuk u dërgua: vendos RESEND_API_KEY dhe CONTACT_NOTIFY_EMAIL në .env.local dhe rinisni serverin.')
      } else {
        console.log('[Contact] Njoftim do të dërgohet te:', notifyTo, '| Konfirmim te klienti:', contactData.email)
      }
    }

    const notificationOk = await sendContactNotification(contactData)
    const confirmationOk = await sendContactConfirmationToClient(contactData)

    if (process.env.NODE_ENV === 'development' && hasResend) {
      console.log('[Contact] Rezultat: njoftim te ti =', notificationOk ? 'dërguar' : 'dështuar', '| konfirmim te klienti =', confirmationOk ? 'dërguar' : 'dështuar')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Contact API error:', err)
    const isDev = process.env.NODE_ENV === 'development'
    return NextResponse.json(
      {
        error: isDev ? `Gabim: ${message}. (Kontrollo konfigurimin e email-it në .env.local)` : 'Diçka shkoi keq. Provoni përsëri.',
      },
      { status: 500 }
    )
  }
}

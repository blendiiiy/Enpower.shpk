import { Resend } from 'resend'

export type ContactFormData = {
  name: string
  email: string
  phone?: string | null
  message: string
  requestType?: string
  preferredDate?: string | null
  preferredTime?: string | null
}

export async function sendContactNotification(data: ContactFormData): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const to = process.env.CONTACT_NOTIFY_EMAIL?.trim()

  if (!apiKey || !to) {
    const missing = []
    if (!apiKey) missing.push('RESEND_API_KEY')
    if (!to) missing.push('CONTACT_NOTIFY_EMAIL')
    console.warn('[Email] Nuk u dërgua: mungojnë në .env.local:', missing.join(', '))
    return false
  }

  const resend = new Resend(apiKey)
  const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'

  const subject = `[En-Power] Mesazh i ri nga ${data.name}`

  const html = `
    <h2>Mesazh i ri nga forma e kontaktit</h2>
    <p><strong>Emri:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    ${data.phone ? `<p><strong>Telefon:</strong> ${escapeHtml(data.phone)}</p>` : ''}
    <p><strong>Lloji i kërkesës:</strong> ${escapeHtml(data.requestType ?? 'general')}</p>
    ${data.preferredDate ? `<p><strong>Data e preferuar:</strong> ${escapeHtml(data.preferredDate)}</p>` : ''}
    ${data.preferredTime ? `<p><strong>Koha e preferuar:</strong> ${escapeHtml(data.preferredTime)}</p>` : ''}
    <p><strong>Mesazhi:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
  `

  try {
    const result = await resend.emails.send({ from, to, subject, html })
    const { data: resData, error } = result

    if (error) {
      console.error('[Email] Resend ktheu gabim:', JSON.stringify(error, null, 2))
      console.error('[Email] Me Resend falas mund të dërgosh vetëm në email të verifikuar. Kontrollo resend.com → Audiences ose për test përdor CONTACT_NOTIFY_EMAIL=delivered@resend.dev')
      return false
    }
    console.log('[Email] Resend pranoi dërgesën. Tek:', to, '| Id:', resData?.id ?? '-')
    return true
  } catch (err) {
    console.error('[Email] Gabim gjatë dërgesës:', err)
    return false
  }
}

/** Dërgon email konfirmimi te klienti që kërkesa u pranua. */
export async function sendContactConfirmationToClient(data: ContactFormData): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'

  if (!apiKey || !data.email) return false

  const resend = new Resend(apiKey)
  const subject = 'Kërkesa juaj u pranua — Enpower sh.p.k'
  const html = `
    <p>Përshëndetje ${escapeHtml(data.name)},</p>
    <p>Kemi marrë mesazhin tuaj dhe do të ju kontaktojmë së shpejti.</p>
    <p>Faleminderit që na kontaktuat.</p>
    <p><strong>Enpower sh.p.k</strong></p>
  `

  try {
    const { error } = await resend.emails.send({
      from,
      to: data.email.trim().toLowerCase(),
      subject,
      html,
    })
    if (error) {
      console.warn('[Email] Konfirmimi te klienti nuk u dërgua:', error.message)
      return false
    }
    return true
  } catch (err) {
    console.warn('[Email] Konfirmimi te klienti:', err)
    return false
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

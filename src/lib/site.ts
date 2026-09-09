/**
 * Single source of truth for public company / site details.
 * Update here — Footer, contact page, SEO schema, and CTAs stay aligned.
 */
export const SITE = {
  name: 'Enpower sh.p.k',
  url: 'https://enpower-ks.com',
  email: 'enpower@gmail.com',
  phoneDisplay: '+383 44 222 836',
  /** E.164 without spaces — for tel: and wa.me */
  phoneE164: '+38344222836',
  address: 'Kline, Kosovë',
  facebookUrl: 'https://www.facebook.com/EnpowerShpk',
  facebookLabel: 'Enpower sh.p.k',
  whatsappPrefill: 'Përshëndetje, jam i interesuar për një ofertë.',
} as const

export function whatsappHref(
  phoneE164: string = SITE.phoneE164,
  text: string = SITE.whatsappPrefill
) {
  const digits = phoneE164.replace(/[^\d+]/g, '')
  const phone = digits.startsWith('+') ? digits.slice(1) : digits
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

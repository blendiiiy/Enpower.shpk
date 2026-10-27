import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { SITE, whatsappHref } from '@/lib/site'

const base = SITE.url
export const metadata: Metadata = {
  title: 'Kontakti',
  description:
    'Kontaktoni Enpower sh.p.k për ofertë në rrjete elektrike, trafostacione dhe ndriçim në Kosovë.',
  alternates: { canonical: `${base}/contact` },
  openGraph: {
    type: 'website',
    title: 'Kontakti | Enpower sh.p.k',
    description:
      'Telefon, email, WhatsApp dhe forma e ofertës — Enpower sh.p.k, Klinë, Kosovë.',
    url: `${base}/contact`,
    images: [
      {
        url: `${base}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Enpower sh.p.k',
      },
    ],
  },
}

export default function ContactPage() {
  const contactEmail = process.env.CONTACT_PAGE_EMAIL?.trim() || SITE.email
  const contactPhone = process.env.CONTACT_PAGE_PHONE?.trim() || SITE.phoneDisplay
  const contactAddress = process.env.CONTACT_PAGE_ADDRESS?.trim() || SITE.address
  const phoneTel = contactPhone.replace(/\s/g, '')

  return (
    <article className="section-shell">
      <div className="section-container">
        <header className="text-center section-header">
          <p className="eyebrow">Le të bashkëpunojmë</p>
          <h1 className="section-title mt-2">Kontakti</h1>
          <div className="section-title-accent" aria-hidden />
          <p className="section-subtitle mx-auto">
            Na kontaktoni për ofertë dhe projekte energjetike.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto">
          <section className="surface-card p-8 sm:p-10" aria-labelledby="contact-details">
            <h2 id="contact-details" className="font-display text-xl font-semibold text-brand-900 mb-6">
              Të dhënat e kontaktit
            </h2>
            <ul className="space-y-5 text-slate-700">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Adresa
                </span>
                <span>{contactAddress}</span>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Email
                </span>
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-medium text-brand-800 underline underline-offset-2 hover:text-brand-600"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Telefon
                </span>
                <a
                  href={`tel:${phoneTel}`}
                  className="font-medium text-brand-800 hover:text-brand-600"
                >
                  {contactPhone}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  WhatsApp
                </span>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-800 underline underline-offset-2 hover:text-brand-600"
                >
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Facebook
                </span>
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-800 underline underline-offset-2 hover:text-brand-600"
                >
                  {SITE.facebookLabel}
                </a>
              </li>
            </ul>
          </section>
          <section className="surface-card p-8 sm:p-10" aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="font-display text-xl font-semibold text-brand-900 mb-6">
              Kërkesë për ofertë
            </h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </article>
  )
}

import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { SITE } from '@/lib/site'

const base = SITE.url
export const metadata: Metadata = {
  title: 'Kontakti | Enpower sh.p.k',
  description:
    'Kontaktoni Enpower sh.p.k për ofertë dhe bashkëpunim në projekte energjetike në Kosovë. Përgjigje e shpejtë nga ekipi profesional.',
  alternates: { canonical: `${base}/contact` },
  openGraph: {
    type: 'website',
    title: 'Kontakti | Enpower sh.p.k',
    description:
      'Na kontaktoni për ofertë në rrjete elektrike, trafostacione dhe ndriçim. Ekip profesional në Kosovë.',
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
          <h1 className="section-title mt-2">
            Kontakti
          </h1>
          <div className="section-title-accent" aria-hidden />
          <p className="section-subtitle mx-auto">
            Na kontaktoni për bashkëpunim dhe projekte energjetike.
          </p>
          <p className="mt-5 text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Përgjigje e shpejtë · Konsultim profesional · Ofertë sipas projektit
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          <section className="surface-card p-8 sm:p-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Të dhënat e kontaktit
            </h2>
            <ul className="space-y-5 text-slate-600 dark:text-slate-400">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Adresa</span>
                <span>{contactAddress}</span>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Email</span>
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-brand-700 dark:hover:text-blue-400 transition-colors underline underline-offset-2"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Telefon</span>
                <a
                  href={`tel:${phoneTel}`}
                  className="hover:text-brand-700 dark:hover:text-blue-400 transition-colors"
                >
                  {contactPhone}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Facebook</span>
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-700 dark:hover:text-blue-400 transition-colors underline underline-offset-2"
                >
                  {SITE.facebookLabel}
                </a>
              </li>
            </ul>
          </section>
          <section className="surface-card dark:bg-slate-900/55 p-8 sm:p-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Dërgoni një mesazh
            </h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </article>
  )
}

import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'

const base = 'https://enpower-ks.com'
export const metadata: Metadata = {
  title: 'Kontakti | Enpower sh.p.k',
  description:
    'Kontaktoni Enpower sh.p.k për ofertë dhe bashkëpunim në projekte energjetike në Kosovë. Përgjigje e shpejtë nga ekipi profesional.',
  alternates: { canonical: `${base}/contact` },
  openGraph: {
    title: 'Kontakti | Enpower sh.p.k',
    description:
      'Na kontaktoni për ofertë në rrjete elektrike, trafostacione dhe ndriçim. Ekip profesional në Kosovë.',
    url: `${base}/contact`,
  },
}

const defaultContact = {
  email: 'enpower@gmail.com',
  phone: '+383 44 222 836',
  address: 'Kline, Kosovë',
}

export default function ContactPage() {
  const contactEmail = process.env.CONTACT_PAGE_EMAIL?.trim() || defaultContact.email
  const contactPhone = process.env.CONTACT_PAGE_PHONE?.trim() || defaultContact.phone
  const contactAddress = process.env.CONTACT_PAGE_ADDRESS?.trim() || defaultContact.address
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
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300">
              Përgjigje e shpejtë
            </span>
            <span className="rounded-full border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              Konsultim profesional
            </span>
            <span className="rounded-full border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              Ofertë sipas projektit
            </span>
          </div>
        </header>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          <section className="rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-900/80 backdrop-blur-sm p-8 sm:p-10 shadow-card">
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
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors underline underline-offset-2"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Telefon</span>
                <a
                  href={`tel:${phoneTel}`}
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  {contactPhone}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Facebook</span>
                <a
                  href="https://www.facebook.com/EnpowerShpk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors underline underline-offset-2"
                >
                  Enpower sh.p.k
                </a>
              </li>
            </ul>
          </section>
          <section className="rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-900/50 backdrop-blur-sm p-8 sm:p-10 shadow-card">
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

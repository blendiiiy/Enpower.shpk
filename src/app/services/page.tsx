import type { Metadata } from 'next'
import Link from 'next/link'
import { Cable, Lightbulb, TowerControl, Wrench } from 'lucide-react'
import { SITE } from '@/lib/site'
import { SERVICES } from '@/lib/services'

const base = SITE.url
export const metadata: Metadata = {
  title: 'Shërbimet',
  description:
    'Shërbime profesionale energjetike në Kosovë: rrjete elektrike TL/TM, trafostacione, ndriçim dhe mirëmbajtje.',
  alternates: { canonical: `${base}/services` },
  openGraph: {
    type: 'website',
    title: 'Shërbimet | Enpower sh.p.k',
    description:
      'Rrjete TL/TM, trafostacione, ndriçim dhe mirëmbajtje me standard profesional në Kosovë.',
    url: `${base}/services`,
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

const ICONS = [Cable, TowerControl, Lightbulb, Wrench] as const

export default function ServicesPage() {
  return (
    <article className="section-shell !bg-[#f7f8fb] dark:!bg-brand-950">
      <div className="section-container">
        <header className="text-center section-header">
          <p className="eyebrow">Shërbimet profesionale</p>
          <h1 className="section-title mt-2 !text-brand-900 dark:!text-white">Shërbimet tona</h1>
          <div className="section-title-accent" aria-hidden />
          <p className="section-subtitle mx-auto !text-slate-700 dark:!text-slate-300">
            Zgjidhje energjetike për sektorin publik dhe privat në Kosovë.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <section
                key={service.id}
                id={service.id}
                className="rounded-[1.25rem] border border-white/10 bg-[#070b14] p-8 sm:p-10 shadow-lift scroll-mt-28"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <Icon className="h-6 w-6" strokeWidth={2.5} aria-hidden />
                </div>
                <div className="h-1 w-14 rounded-full bg-brand-400 mb-6" aria-hidden />
                <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-slate-200 leading-relaxed">{service.summary}</p>
                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="text-slate-200 flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary mt-7 w-full sm:w-auto">
                  Kërko ofertë për këtë shërbim
                </Link>
              </section>
            )
          })}
        </div>
      </div>
    </article>
  )
}

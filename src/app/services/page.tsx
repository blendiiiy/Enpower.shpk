import type { Metadata } from 'next'
import Link from 'next/link'
import { Cable, Lightbulb, TowerControl } from 'lucide-react'

const base = 'https://enpower-ks.com'
export const metadata: Metadata = {
  title: 'Shërbimet tona | Enpower sh.p.k',
  description:
    'Shërbime profesionale energjetike në Kosovë: rrjete elektrike TL/TM, trafostacione, trafo private dhe ndriçim publik/industrial.',
  alternates: { canonical: `${base}/services` },
  openGraph: {
    type: 'website',
    title: 'Shërbimet tona | Enpower sh.p.k',
    description:
      'Rrjete elektrike TL/TM, trafostacione, trafo private dhe ndriçim publik/industrial me standard profesional.',
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

const services = [
  {
    icon: Cable,
    title: 'Rrjete Elektrike TL & TM',
    items: [
      'Ndërtim dhe rehabilitim i linjave të tensionit të lartë dhe të mesëm',
      'Instalime elektrike industriale',
      'Testim dhe mirëmbajtje',
    ],
  },
  {
    icon: TowerControl,
    title: 'Trafostacione & Trafo Private',
    items: [
      'Ndërtim i trafostacioneve të reja',
      'Montim i trafove private për biznese dhe industri',
      'Modernizim dhe servis teknik',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Ndriçim Elektrik',
    items: [
      'Ndriçim publik (rrugë, sheshe, zona urbane)',
      'Ndriçim industrial dhe komercial',
      'Zgjidhje moderne dhe efikase energjetike',
    ],
  },
]

export default function ServicesPage() {
  return (
    <article className="section-shell">
      <div className="section-container">
        <header className="text-center section-header">
          <p className="eyebrow">Shërbimet profesionale</p>
          <h1 className="section-title mt-2">
            Shërbimet tona
          </h1>
          <div className="section-title-accent" aria-hidden />
          <p className="section-subtitle mx-auto">
            Zgjidhje të plota energjetike për sektorin publik dhe privat në Kosovë.
          </p>
        </header>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map(({ title, items: list, icon: Icon }, i) => (
            <section
              key={i}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-900/80 backdrop-blur-sm p-8 sm:p-10 shadow-card hover:shadow-card-hover hover:border-amber-500/30 dark:hover:border-amber-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 ring-1 ring-amber-500/25">
                <Icon className="h-5 w-5" />
              </div>
              <div className="h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 mb-6" aria-hidden />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {title}
              </h2>
              <ul className="mt-6 space-y-3">
                {list.map((item, j) => (
                  <li key={j} className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-7 inline-flex text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500">
                Kërko ofertë për këtë shërbim →
              </Link>
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}

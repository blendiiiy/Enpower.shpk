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
    summary: 'Projektim, zbatim dhe rehabilitim i rrjeteve për furnizim të qëndrueshëm energjetik.',
    items: [
      'Ndërtim dhe rehabilitim i linjave të tensionit të lartë dhe të mesëm',
      'Instalime elektrike industriale',
      'Testim dhe mirëmbajtje',
    ],
    result: 'Rritje e sigurisë operacionale dhe reduktim i ndërprerjeve në rrjet.',
  },
  {
    icon: TowerControl,
    title: 'Trafostacione & Trafo Private',
    summary: 'Zgjidhje të plota për bizneset dhe institucionet që kërkojnë furnizim stabil.',
    items: [
      'Ndërtim i trafostacioneve të reja',
      'Montim i trafove private për biznese dhe industri',
      'Modernizim dhe servis teknik',
    ],
    result: 'Kapacitet më i mirë i furnizimit dhe performancë afatgjatë.',
  },
  {
    icon: Lightbulb,
    title: 'Ndriçim Elektrik',
    summary: 'Sisteme moderne ndriçimi për rrugë, objekte publike dhe mjedise industriale.',
    items: [
      'Ndriçim publik (rrugë, sheshe, zona urbane)',
      'Ndriçim industrial dhe komercial',
      'Zgjidhje moderne dhe efikase energjetike',
    ],
    result: 'Konsum më i ulët energjie dhe dukshmëri më e lartë në terren.',
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
          {services.map(({ title, summary, items: list, result, icon: Icon }, i) => (
            <section
              key={i}
              className="surface-card-premium p-8 sm:p-10"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700 dark:text-blue-400 ring-1 ring-brand-600/20">
                <Icon className="h-5 w-5" />
              </div>
              <div className="h-1 w-14 rounded-full bg-gradient-to-r from-brand-600 to-brand-700 mb-6" aria-hidden />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {title}
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                {summary}
              </p>
              <ul className="mt-6 space-y-3">
                {list.map((item, j) => (
                  <li key={j} className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-slate-700 dark:text-slate-300">
                Rezultat: {result}
              </p>
              <Link href="/contact" className="btn-primary mt-7 w-full sm:w-auto">
                Kërko ofertë për këtë shërbim
              </Link>
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}

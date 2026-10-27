import type { Metadata } from 'next'
import Link from 'next/link'
import { Cable, Lightbulb, TowerControl } from 'lucide-react'
import { SITE } from '@/lib/site'

const base = SITE.url
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
    <article className="section-shell !bg-[#f7f8fb] dark:!bg-brand-950">
      <div className="section-container">
        <header className="text-center section-header">
          <p className="eyebrow">Shërbimet profesionale</p>
          <h1 className="section-title mt-2 !text-brand-900 dark:!text-white">Shërbimet tona</h1>
          <div className="section-title-accent" aria-hidden />
          <p className="section-subtitle mx-auto !text-slate-700 dark:!text-slate-300">
            Zgjidhje të plota energjetike për sektorin publik dhe privat në Kosovë.
          </p>
        </header>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map(({ title, summary, items: list, result, icon: Icon }, i) => (
            <section
              key={i}
              className="rounded-[1.25rem] border border-white/10 bg-[#070b14] p-8 sm:p-10 shadow-lift"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                <Icon className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <div className="h-1 w-14 rounded-full bg-brand-400 mb-6" aria-hidden />
              <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
                {title}
              </h2>
              <p className="mt-3 text-slate-200 leading-relaxed">{summary}</p>
              <ul className="mt-6 space-y-3">
                {list.map((item, j) => (
                  <li key={j} className="text-slate-200 flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-semibold text-white">Rezultat: {result}</p>
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

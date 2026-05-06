import Link from 'next/link'

const services = [
  {
    title: 'Rrjete Elektrike TL & TM',
    summary: 'Projektim, instalim dhe rehabilitim i rrjeteve për furnizim stabil.',
    items: [
      'Ndërtim dhe rehabilitim i linjave të tensionit të lartë dhe të mesëm',
      'Instalime elektrike industriale',
      'Testim dhe mirëmbajtje',
    ],
  },
  {
    title: 'Trafostacione & Trafo Private',
    summary: 'Zgjidhje të plota për biznese, industri dhe objekte publike.',
    items: [
      'Ndërtim i trafostacioneve të reja',
      'Montim i trafove private për biznese dhe industri',
      'Modernizim dhe servis teknik',
    ],
  },
  {
    title: 'Ndriçim Elektrik',
    summary: 'Sisteme moderne ndriçimi me fokus në efikasitet energjetik.',
    items: [
      'Ndriçim publik (rrugë, sheshe, zona urbane)',
      'Ndriçim industrial dhe komercial',
      'Zgjidhje moderne dhe efikase energjetike',
    ],
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-brand-950/70 bg-grid-pattern overflow-hidden border-y border-slate-100/80 dark:border-brand-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16 max-w-3xl mx-auto">
          <p className="eyebrow">Shërbimet kryesore</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Çfarë ofrojmë
          </h2>
          <div className="section-title-accent mx-auto mt-4" aria-hidden />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Rrjete TL/TM, trafostacione, ndriçim dhe mirëmbajtje — zgjidhje të plota energjetike për sektorin publik dhe privat, nga një burim i vetëm.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ title, summary, items: list }, i) => (
            <div
              key={i}
              className="surface-card-premium p-6 sm:p-8"
            >
              <div className="h-1 w-14 rounded-full bg-gradient-to-r from-brand-600 to-brand-700 mb-6" aria-hidden />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{summary}</p>
              <ul className="mt-5 space-y-2.5">
                {list.map((item, j) => (
                  <li key={j} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600/70" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="btn-primary"
          >
            Të gjitha shërbimet
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

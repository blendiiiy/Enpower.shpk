import Link from 'next/link'

const services = [
  {
    title: 'Rrjete Elektrike TL & TM',
    items: [
      'Ndërtim dhe rehabilitim i linjave të tensionit të lartë dhe të mesëm',
      'Instalime elektrike industriale',
      'Testim dhe mirëmbajtje',
    ],
  },
  {
    title: 'Trafostacione & Trafo Private',
    items: [
      'Ndërtim i trafostacioneve të reja',
      'Montim i trafove private për biznese dhe industri',
      'Modernizim dhe servis teknik',
    ],
  },
  {
    title: 'Ndriçim Elektrik',
    items: [
      'Ndriçim publik (rrugë, sheshe, zona urbane)',
      'Ndriçim industrial dhe komercial',
      'Zgjidhje moderne dhe efikase energjetike',
    ],
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-slate-900 bg-grid-pattern overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Shërbimet tona
          </h2>
          <div className="section-title-accent" aria-hidden />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Zgjidhje të plota energjetike për sektorin publik dhe privat.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ title, items: list }, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-900/80 backdrop-blur-sm p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:border-amber-500/30 dark:hover:border-amber-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="h-1 w-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 mb-6" aria-hidden />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {list.map((item, j) => (
                  <li key={j} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500/60" aria-hidden />
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
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-6 py-3.5 text-sm font-semibold text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md transition-all duration-200"
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

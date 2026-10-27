import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Rrjete Elektrike TL & TM',
    summary: 'Projektim, instalim dhe rehabilitim i rrjeteve për furnizim stabil.',
  },
  {
    num: '02',
    title: 'Trafostacione & Trafo Private',
    summary: 'Zgjidhje të plota për biznese, industri dhe objekte publike.',
  },
  {
    num: '03',
    title: 'Ndriçim Elektrik',
    summary: 'Sisteme moderne ndriçimi me fokus në efikasitet energjetik.',
  },
]

export function ServicesSection() {
  return (
    <section className="page-band page-band--muted">
      <div className="layout-container">
        <div className="section-intro">
          <p className="eyebrow">Shërbimet</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl lg:text-5xl text-brand-900 dark:text-white">
            Çfarë ofrojmë
          </h2>
          <div className="section-title-accent" aria-hidden />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Zgjidhje të plota energjetike — nga një burim i vetëm profesional.
          </p>
        </div>
        <div className="divide-y divide-slate-200/80 dark:divide-white/10 border-y border-slate-200/80 dark:border-white/10">
          {services.map(({ num, title, summary }) => (
            <div
              key={num}
              className="grid gap-3 sm:grid-cols-[auto_1fr] sm:items-baseline py-8 sm:py-10 sm:gap-10"
            >
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-brand-500">
                {num}
              </span>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-brand-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  {summary}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="btn-primary">
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

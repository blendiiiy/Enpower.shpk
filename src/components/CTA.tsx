import Link from 'next/link'

export function CTA() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-brand-950/80 bg-grid-pattern overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 text-center ring-1 ring-brand-600/25 shadow-2xl shadow-brand-950/20">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/15 via-transparent to-brand-950/40" aria-hidden />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight text-balance">
              Keni një projekt elektrik apo energjetik?
            </h2>
            <p className="mt-6 text-slate-300/95 max-w-2xl mx-auto text-lg leading-relaxed">
              Qoftë rrjet TM/TL, trafostacion apo ndriçim — na shkruani për një ofertë të përshtatur dhe konsultim profesional.
            </p>
            <Link
              href="/contact"
              className="btn-primary btn-primary-lg mt-10 inline-flex gap-2 shadow-lg"
            >
              Kërko ofertë pa obligim
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

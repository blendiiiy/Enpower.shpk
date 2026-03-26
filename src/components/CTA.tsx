import Link from 'next/link'

export function CTA() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-slate-50 dark:bg-slate-900/50 bg-grid-pattern overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 text-center ring-1 ring-slate-700/50 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" aria-hidden />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight">
              Na kontaktoni për bashkëpunim
            </h2>
            <p className="mt-6 text-slate-300/95 max-w-xl mx-auto text-lg leading-relaxed">
              Jemi gati të diskutojmë projektet tuaja energjetike. Kontaktoni ekipin tonë sot.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-base font-semibold text-slate-900 hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/25 hover:shadow-glow transition-all duration-300"
            >
              Kontaktoni
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

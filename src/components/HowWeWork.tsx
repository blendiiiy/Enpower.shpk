const steps = [
  { num: '1', title: 'Analizë teknike & konsultim' },
  { num: '2', title: 'Projektim profesional' },
  { num: '3', title: 'Zbatim sipas standardeve' },
  { num: '4', title: 'Testim & dorëzim final' },
]

export function HowWeWork() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-slate-900 bg-grid-pattern overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Si punojmë
          </h2>
          <div className="section-title-accent" aria-hidden />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Çdo projekt trajtohet me seriozitet maksimal dhe fokus në cilësi.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map(({ num, title }) => (
            <div
              key={num}
              className="relative rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-900/50 backdrop-blur-sm p-6 sm:p-8 text-center shadow-card hover:shadow-card-hover hover:border-amber-500/30 dark:hover:border-amber-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-lg font-bold text-slate-900 shadow-md">
                {num}
              </span>
              <h3 className="mt-5 text-base font-semibold text-slate-900 dark:text-white leading-snug">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const items = [
  'Eksperiencë profesionale në projekte energjetike',
  'Punë sipas standardeve teknike dhe të sigurisë',
  'Operojmë në të gjithë Kosovën',
  'Partner i besueshëm për industri dhe institucione',
]

export function WhyEnpower() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-slate-50 dark:bg-slate-900/50 bg-grid-pattern overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Pse Enpower?
          </h2>
          <div className="section-title-accent" aria-hidden />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Partneri juaj i besueshëm për zgjidhje energjetike në Kosovë.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((title, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-900/80 backdrop-blur-sm p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:border-amber-500/30 dark:hover:border-amber-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 mb-5" aria-hidden />
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-snug">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

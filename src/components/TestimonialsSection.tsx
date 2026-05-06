type Testimonial = {
  quote: string
  initials: string
  name: string
  role: string
}

const ITEMS: Testimonial[] = [
  {
    quote:
      'Komunikim korrekt dhe zbatim shumë profesional në terren. Ekipi respekton afatet dhe standardet.',
    initials: 'KB',
    name: 'Klient biznesi',
    role: 'Klinë',
  },
  {
    quote: 'Punimet u kryen me standard të lartë dhe brenda afatit. Koordinim i mirë nga fillimi deri në dorëzim.',
    initials: 'IP',
    name: 'Investitor privat',
    role: 'Pejë',
  },
  {
    quote: 'Ekip serioz, i organizuar dhe shumë i përgjegjshëm. Rezultat i qëndrueshëm në infrastrukturë.',
    initials: 'PL',
    name: 'Partner lokal',
    role: 'Kosovë',
  },
]

export function TestimonialsSection() {
  return (
    <section className="section-shell !min-h-0">
      <div className="section-container">
        <header className="text-center section-header max-w-3xl mx-auto">
          <p className="eyebrow">Referenca</p>
          <h2 className="section-title mt-2 text-3xl sm:text-4xl lg:text-5xl">Çfarë thonë klientët</h2>
          <p className="section-subtitle mx-auto mt-4">
            Cilësi, siguri dhe përmbushje afatesh — këto janë parimet tona në çdo projekt.
          </p>
          <div className="section-title-accent" aria-hidden />
        </header>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ITEMS.map((item) => (
            <article key={item.initials + item.role} className="surface-card-premium p-6 sm:p-8 flex flex-col">
              <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed flex-1">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-700/70">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-800 to-brand-950 text-sm font-bold text-white ring-1 ring-brand-500/40"
                  aria-hidden
                >
                  {item.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

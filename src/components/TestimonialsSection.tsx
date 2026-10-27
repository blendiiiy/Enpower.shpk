type Testimonial = {
  quote: string
  name: string
  role: string
}

const ITEMS: Testimonial[] = [
  {
    quote:
      'Komunikim korrekt dhe zbatim shumë profesional në terren. Ekipi respekton afatet dhe standardet.',
    name: 'Klient biznesi',
    role: 'Klinë',
  },
  {
    quote: 'Punimet u kryen me standard të lartë dhe brenda afatit. Koordinim i mirë nga fillimi deri në dorëzim.',
    name: 'Investitor privat',
    role: 'Pejë',
  },
  {
    quote: 'Ekip serioz, i organizuar dhe shumë i përgjegjshëm. Rezultat i qëndrueshëm në infrastrukturë.',
    name: 'Partner lokal',
    role: 'Kosovë',
  },
]

export function TestimonialsSection() {
  return (
    <section className="page-band page-band--muted">
      <div className="layout-container">
        <header className="section-intro">
          <p className="eyebrow">Dëshmi</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl lg:text-5xl text-brand-900 dark:text-white">
            Çfarë thonë klientët
          </h2>
          <div className="section-title-accent" aria-hidden />
        </header>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {ITEMS.map((item) => (
            <blockquote key={item.name + item.role} className="flex flex-col">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed flex-1 text-[1.05rem]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/10">
                <p className="text-sm font-semibold text-brand-900 dark:text-white">{item.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

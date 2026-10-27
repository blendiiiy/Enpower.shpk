import { BadgeCheck, ShieldCheck, Handshake } from 'lucide-react'

export function WhyEnpower() {
  const bullets = [
    {
      title: 'Profesionalë të certifikuar',
      text: 'Ekip me kualifikime dhe përvojë reale në projekte energjetike.',
      Icon: BadgeCheck,
    },
    {
      title: 'Standarde të larta sigurie',
      text: 'Respektojmë procedura dhe kontrolle për çdo fazë të punës.',
      Icon: ShieldCheck,
    },
    {
      title: 'Shërbim i besueshëm',
      text: 'Nga analizë teknike deri në dorëzim final, me komunikim të qartë.',
      Icon: Handshake,
    },
  ]

  return (
    <section className="page-band page-band--muted">
      <div className="layout-container">
        <div className="section-intro">
          <p className="eyebrow">Pse ne</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl lg:text-5xl text-brand-900 dark:text-white">
            Partner i besueshëm në energji
          </h2>
          <div className="section-title-accent" aria-hidden />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Cilësi, siguri dhe përgjegjësi — në çdo projekt që realizojmë në Kosovë.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {bullets.map((b, i) => (
            <article key={b.title} className="relative">
              {i > 0 && (
                <div
                  className="absolute -left-6 top-2 hidden h-16 w-px bg-slate-200 dark:bg-white/10 md:block"
                  aria-hidden
                />
              )}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700 dark:text-brand-300">
                <b.Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-brand-900 dark:text-white">
                {b.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

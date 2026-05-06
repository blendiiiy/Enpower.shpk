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
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-brand-950/80 bg-grid-pattern overflow-hidden border-y border-slate-100 dark:border-brand-900/50">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {bullets.map((b) => (
            <article key={b.title} className="surface-card-premium p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div
                  className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700 dark:text-blue-400 ring-1 ring-brand-600/20"
                  aria-hidden
                >
                  <b.Icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {b.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

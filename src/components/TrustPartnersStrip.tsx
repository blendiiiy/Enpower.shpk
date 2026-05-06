/**
 * Strip besueshmërie — partnerë / institucione (mund të shtohen logo më vonë).
 */
const PARTNERS = [
  'KEDS',
  'KEK',
  'KOSTT',
  'Komuna e Prishtinës',
  'Komuna e Klinës',
] as const

export function TrustPartnersStrip() {
  const row = [...PARTNERS, ...PARTNERS]

  return (
    <section
      className="border-y border-slate-100 dark:border-brand-800/50 bg-white dark:bg-brand-950/40 py-10 sm:py-12"
      aria-labelledby="trust-heading"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Besueshmëri</p>
          <h2 id="trust-heading" className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Klientët & bashkëpunëtorët tanë
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Bashkëpunime dhe projekte me institucione kryesore në Kosovë.
          </p>
        </div>
        <div className="mt-8 relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 sm:gap-14 md:gap-16 items-center pr-10">
            {row.map((label, i) => (
              <span
                key={`${label}-${i}`}
                className="shrink-0 text-sm sm:text-base font-semibold tracking-tight text-brand-800/90 dark:text-slate-300 whitespace-nowrap"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

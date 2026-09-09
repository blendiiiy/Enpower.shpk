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
      className="relative border-y border-slate-100 dark:border-brand-800/50 bg-white dark:bg-brand-950/92 py-11 sm:py-14"
      aria-labelledby="trust-heading"
    >
      <div className="layout-container">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow !text-black dark:!text-white">Besueshmëri</p>
          <h2 id="trust-heading" className="mt-2 text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight antialiased">
            Klientët & bashkëpunëtorët tanë
          </h2>
          <p className="mt-3 text-sm sm:text-base text-black dark:text-white leading-relaxed font-semibold antialiased">
            Bashkëpunime dhe projekte me institucione kryesore në Kosovë.
          </p>
        </div>
        <div className="mt-8 relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 sm:gap-14 md:gap-16 items-center pr-10">
            {row.map((label, i) => (
              <span
                key={`${label}-${i}`}
                className="shrink-0 text-sm sm:text-base font-bold tracking-tight text-black dark:text-white whitespace-nowrap antialiased"
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

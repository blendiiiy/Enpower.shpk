/** Fusha pune të verifikuara nga përmbajtja e kompanisë — jo emra partnerësh të paverifikuar. */
const FOCUS_AREAS = [
  'Sektor publik',
  'Sektor privat',
  'Industri',
  'Infrastrukturë',
  'Ndriçim',
  'Trafostacione',
] as const

export function TrustPartnersStrip() {
  const row = [...FOCUS_AREAS, ...FOCUS_AREAS]

  return (
    <section
      className="relative border-y border-slate-200 dark:border-white/10 bg-white dark:bg-brand-950 py-11 sm:py-14"
      aria-labelledby="focus-heading"
    >
      <div className="layout-container">
        <div className="text-center max-w-3xl mx-auto">
          <p
            id="focus-heading"
            className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-brand-800 dark:text-brand-300"
          >
            Fushat e punës
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-brand-950 dark:text-white tracking-tight">
            Ku ndërhyjmë profesionalisht
          </h2>
        </div>
        <div className="mt-8 relative overflow-hidden" aria-hidden={false}>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent dark:from-brand-950" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent dark:from-brand-950" />
          <div className="flex w-max animate-marquee gap-10 sm:gap-14 md:gap-16 items-center pr-10">
            {row.map((label, i) => (
              <span
                key={`${label}-${i}`}
                className="shrink-0 font-display text-base sm:text-lg font-bold tracking-tight text-brand-950 dark:text-white whitespace-nowrap"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <p className="sr-only">
          {FOCUS_AREAS.join(', ')}
        </p>
      </div>
    </section>
  )
}

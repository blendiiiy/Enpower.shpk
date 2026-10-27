import Link from 'next/link'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 20% 50%, rgba(37,99,235,0.35), transparent 55%), radial-gradient(ellipse 50% 60% at 90% 30%, rgba(14,165,233,0.2), transparent 50%)',
        }}
        aria-hidden
      />
      <div className="relative layout-container py-20 sm:py-24 lg:py-28 text-center">
        <p className="eyebrow !text-brand-300">Hapi tjetër</p>
        <h2 className="display-title mt-4 text-3xl sm:text-4xl lg:text-5xl text-white text-balance max-w-3xl mx-auto">
          Keni një projekt elektrik?
        </h2>
        <p className="mt-5 text-slate-300 max-w-xl mx-auto text-lg leading-relaxed">
          Na shkruani për ofertë — rrjet TL/TM, trafostacion, ndriçim ose mirëmbajtje.
        </p>
        <Link href="/contact" className="btn-primary btn-primary-lg mt-10 inline-flex">
          Kërko ofertë
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

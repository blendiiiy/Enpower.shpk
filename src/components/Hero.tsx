import Link from 'next/link'
import { ImageWithFallback } from './ImageWithFallback'
import { images } from '@/lib/images'

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={images.hero}
          alt="Enpower sh.p.k — Energji elektrike në Kosovë"
          fill
          sizes="100vw"
          priority
          className="object-cover scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/75 to-slate-900/90"
          aria-hidden
        />
      </div>
      <div className="relative z-10 gradient-mesh pt-24 sm:pt-28 pb-28 sm:pb-36 lg:pt-32 lg:pb-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-amber-400/90 mb-6">
              Kompani energjetike në Kosovë
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
              Zgjidhje Profesionale në{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Energji Elektrike
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300/95 font-medium">
              Tension i Lartë · Tension i Mesëm · Ndriçim Elektrik · Trafostacione
            </p>
            <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Enpower sh.p.k ofron shërbime të avancuara energjetike në Kosovë, duke realizuar projekte të sigurta, efikase dhe të qëndrueshme për sektorin publik dhe privat.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
              <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 text-amber-200">
                Ekip profesional në terren
              </span>
              <span className="rounded-full border border-slate-300/30 bg-white/10 px-3 py-1.5 text-slate-200">
                Zbatim sipas standardeve teknike
              </span>
              <span className="rounded-full border border-slate-300/30 bg-white/10 px-3 py-1.5 text-slate-200">
                Shërbim për sektor publik & privat
              </span>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-amber-500/30 hover:shadow-glow hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
              >
                Kontaktoni ekipin tonë
                <svg className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-2xl border-2 border-white/40 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/15 hover:border-white/60 transition-all duration-300"
              >
                Shërbimet
              </Link>
            </div>
            <p className="mt-6 text-xs sm:text-sm text-slate-300/90">
              Na kontaktoni për ofertë të personalizuar për projektin tuaj.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

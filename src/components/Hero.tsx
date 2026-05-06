'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ImageWithFallback } from './ImageWithFallback'
import { images } from '@/lib/images'

export function Hero() {
  const [videoOk, setVideoOk] = useState(true)

  return (
    <section className="relative overflow-hidden min-h-[88vh] sm:min-h-[92vh] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        {videoOk ? (
          <video
            className="absolute inset-0 h-full w-full object-cover scale-105"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={images.hero}
            onError={() => setVideoOk(false)}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <ImageWithFallback
            src={images.hero}
            alt="Enpower sh.p.k — Energji elektrike në Kosovë"
            fill
            sizes="100vw"
            priority
            className="object-cover scale-105"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-950/90 via-brand-900/80 to-brand-950/95"
          aria-hidden
        />
      </div>
      <div className="relative z-10 gradient-mesh pt-28 sm:pt-32 pb-24 sm:pb-32 lg:pt-36 lg:pb-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-sky-200/95 mb-5">
              Enpower SHPK — kompani energjetike në Kosovë
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.03] text-white drop-shadow-md">
              Zgjidhje Profesionale në{' '}
              <span className="bg-gradient-to-r from-sky-200 via-white to-sky-100 bg-clip-text text-transparent">
                Energji Elektrike
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-200/95 font-medium">
              Tension i Lartë · Tension i Mesëm · Ndriçim Elektrik · Trafostacione
            </p>
            <p className="mt-6 text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
              Enpower sh.p.k ofron shërbime të avancuara energjetike në Kosovë, duke realizuar projekte të sigurta, efikase dhe të qëndrueshme për sektorin publik dhe privat.
            </p>
            <div className="mt-11 flex flex-wrap justify-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="btn-primary btn-primary-lg group shadow-lg"
              >
                Kërko ofertë
                <svg className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+38344222836"
                className="btn-secondary btn-primary-lg border-white/45 bg-white/10 text-white hover:bg-white/15 hover:border-white/65 focus-visible:ring-white/60 focus-visible:ring-offset-slate-900"
              >
                Telefono tani
              </a>
            </div>
            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-300/85 tracking-wide">
              <Link href="/services" className="font-semibold text-sky-200 underline-offset-4 hover:text-white hover:underline">
                Të gjitha shërbimet
              </Link>
              <span className="hidden sm:inline text-white/35" aria-hidden>
                ·
              </span>
              <span>Ofertë e personalizuar për projektin tuaj.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

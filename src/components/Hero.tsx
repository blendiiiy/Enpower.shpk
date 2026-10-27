'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ImageWithFallback } from './ImageWithFallback'
import { images } from '@/lib/images'
import { SITE } from '@/lib/site'

/** Vendose NEXT_PUBLIC_SHOW_HERO_VIDEO=true kur keni `/public/videos/hero.mp4` — përndryshe shmang 404. */
const WANT_VIDEO =
  typeof process.env.NEXT_PUBLIC_SHOW_HERO_VIDEO === 'string' &&
  process.env.NEXT_PUBLIC_SHOW_HERO_VIDEO.trim().toLowerCase() === 'true'

export function Hero() {
  const [videoOk, setVideoOk] = useState(WANT_VIDEO)
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden min-h-[92vh] sm:min-h-screen flex flex-col justify-end sm:justify-center">
      <div className="absolute inset-0 z-0">
        {WANT_VIDEO && videoOk ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
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
            className={`object-cover ${reducedMotion ? '' : 'animate-hero-ken'}`}
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-950/55 via-brand-950/70 to-brand-950/95"
          aria-hidden
        />
      </div>

      <div className="relative z-10 gradient-mesh pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32">
        <div className="layout-container">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={reducedMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-sm sm:text-base font-semibold tracking-[0.28em] uppercase text-white">
              Enpower
            </p>
            <h1 className="mt-5 font-display text-[2.6rem] sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white text-balance">
              Energji elektrike me standard profesional
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-200/90 max-w-xl mx-auto leading-relaxed">
              Rrjete TL/TM, trafostacione dhe ndriçim — projekte të sigurta për sektorin publik dhe privat në Kosovë.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link href="/contact" className="btn-primary btn-primary-lg group">
                Kërko ofertë
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={`tel:${SITE.phoneE164}`}
                className="btn-secondary btn-primary-lg border-white/25 bg-white/10 text-white hover:bg-white/15 hover:border-white/45"
              >
                Telefono tani
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

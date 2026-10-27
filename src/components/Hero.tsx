'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ImageWithFallback } from './ImageWithFallback'
import { images } from '@/lib/images'
import { SITE } from '@/lib/site'

/** Vendose NEXT_PUBLIC_SHOW_HERO_VIDEO=true kur keni `/public/videos/hero.mp4`. */
const WANT_VIDEO =
  typeof process.env.NEXT_PUBLIC_SHOW_HERO_VIDEO === 'string' &&
  process.env.NEXT_PUBLIC_SHOW_HERO_VIDEO.trim().toLowerCase() === 'true'

export function Hero() {
  const [videoOk, setVideoOk] = useState(WANT_VIDEO)
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden min-h-[88vh] sm:min-h-[92vh] flex flex-col justify-end sm:justify-center">
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
            alt="Linja dhe infrastruktura e energjisë elektrike — Enpower sh.p.k"
            fill
            sizes="100vw"
            priority
            className={`object-cover object-center ${reducedMotion ? '' : 'animate-hero-ken'}`}
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-950/50 via-brand-950/75 to-brand-950"
          aria-hidden
        />
      </div>

      <div className="relative z-10 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="layout-container">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/95">
              {SITE.name}
            </p>
            <h1 className="mt-5 font-display text-[2.35rem] sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tight leading-[1.08] text-white text-balance">
              Energji elektrike me standard profesional
            </h1>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-200 max-w-xl mx-auto leading-relaxed">
              Rrjete TL/TM, trafostacione, ndriçim dhe mirëmbajtje — për sektorin publik dhe privat në Kosovë.
            </p>
            <div className="mt-9 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link href="/contact" className="btn-primary btn-primary-lg group min-h-[48px]">
                Kërko ofertë
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="btn-secondary btn-primary-lg min-h-[48px] border-white/30 bg-white/10 text-white hover:bg-white/15 hover:border-white/50 focus-visible:ring-white/50"
              >
                Shërbimet
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-300">
              <a href={`tel:${SITE.phoneE164}`} className="underline-offset-4 hover:underline hover:text-white">
                {SITE.phoneDisplay}
              </a>
              <span className="mx-2 text-white/30" aria-hidden>
                ·
              </span>
              <a href={`mailto:${SITE.email}`} className="underline-offset-4 hover:underline hover:text-white">
                {SITE.email}
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Stat = {
  value: number
  suffix?: string
  label: string
}

function CountUp({ target, suffix = '', durationMs = 1200 }: { target: number; suffix?: string; durationMs?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)
  const inView = useInView(ref, { once: true, margin: '-20% 0px' })

  useEffect(() => {
    if (!inView) return
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      const next = Math.round(target * eased)
      setValue(next)
      if (t < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, target, durationMs])

  return (
    <span ref={ref} aria-label={`${target}${suffix}`}>
      {value}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const stats: Stat[] = [
    { value: 100, suffix: '+', label: 'Projekte' },
    { value: 10, suffix: '+', label: 'Vite përvojë' },
    { value: 50, suffix: '+', label: 'Klientë' },
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-brand-950/80 bg-grid-pattern overflow-hidden border-y border-slate-100 dark:border-brand-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <p className="eyebrow">Rezultate & përvojë</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Numra që flasin
          </h2>
          <div className="section-title-accent mx-auto mt-4" aria-hidden />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <motion.article
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
              className="surface-card-premium p-6 sm:p-7 text-center"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-brand-700 dark:text-blue-400">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
                {s.label}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}


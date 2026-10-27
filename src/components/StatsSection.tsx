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
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(target * eased))
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
    <section className="page-band page-band--tight bg-brand-950 text-white">
      <div className="layout-container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-center sm:border-l sm:first:border-l-0 sm:border-white/10 sm:px-6"
            >
              <div className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium tracking-wide text-slate-300">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

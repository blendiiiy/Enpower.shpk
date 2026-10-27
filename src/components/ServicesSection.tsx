import Link from 'next/link'
import { Cable, Lightbulb, TowerControl, Wrench } from 'lucide-react'
import { SERVICES } from '@/lib/services'

const ICONS = [Cable, TowerControl, Lightbulb, Wrench] as const

export function ServicesSection() {
  return (
    <section className="page-band page-band--muted" id="sherbimet">
      <div className="layout-container">
        <div className="section-intro">
          <p className="eyebrow">Shërbimet</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl lg:text-5xl text-brand-900 dark:text-white">
            Çfarë ofrojmë
          </h2>
          <div className="section-title-accent" aria-hidden />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Rrjete TL/TM, trafostacione, ndriçim dhe mirëmbajtje — zgjidhje profesionale për sektorin publik dhe privat.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <article
                key={service.id}
                className="rounded-[1.25rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-soft dark:border-white/10 dark:bg-brand-900/40"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.summary}
                </p>
                <Link
                  href="/services"
                  className="cta-inline mt-5 !text-brand-800 dark:!text-brand-200"
                >
                  Detaje
                  <span aria-hidden>→</span>
                </Link>
              </article>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="btn-primary">
            Të gjitha shërbimet
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

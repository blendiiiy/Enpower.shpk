import Link from 'next/link'
import { ImageWithFallback } from './ImageWithFallback'
import { images } from '@/lib/images'

export function AboutPreview() {
  return (
    <section className="page-band page-band--divider">
      <div className="layout-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="eyebrow">Kompania</p>
            <h2 className="display-title mt-3 text-3xl sm:text-4xl lg:text-5xl text-brand-900 dark:text-white">
              Rreth Enpower
            </h2>
            <div className="section-title-accent-left" aria-hidden />
            <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              Enpower sh.p.k është kompani kosovare e specializuar në energji elektrike — rrjete TL/TM,
              trafostacione dhe ndriçim — me fokus në siguri dhe performancë afatgjatë.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              Stafi ynë profesional realizon projekte që plotësojnë kërkesat teknike dhe ligjore për sektorin
              publik dhe privat.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/about" className="btn-primary">
                Mëso më shumë
              </Link>
              <Link
                href="/services"
                className="cta-inline !text-brand-950 dark:!text-white hover:!text-brand-700 dark:hover:!text-brand-200"
              >
                Shërbimet tona
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] shadow-lift ring-1 ring-slate-200/80 dark:ring-white/10">
            <ImageWithFallback
              src={images.about}
              alt="Enpower sh.p.k — Ekipi profesional në terren"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

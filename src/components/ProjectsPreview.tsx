import Link from 'next/link'
import { ImageWithFallback } from './ImageWithFallback'
import { galleryItems } from '@/lib/images'

const FEATURED = galleryItems.slice(0, 2)

export function ProjectsPreview() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-brand-950/50 bg-grid-pattern overflow-hidden border-y border-slate-100/80 dark:border-brand-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="eyebrow">Referenca</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Projektet tona
          </h2>
          <div className="section-title-accent-left" aria-hidden />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Një përzgjedhje nga punimet tona në rrjete elektrike, trafostacione dhe ndriçim — me përshkrim të qartë dhe zbatim profesional.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {FEATURED.map((project) => (
            <article
              key={project.id}
              className="group surface-card-premium overflow-hidden flex flex-col"
            >
              <Link href="/projects" className="relative block aspect-[16/10] bg-white dark:bg-slate-900/40 ring-1 ring-slate-100 dark:ring-slate-700/60">
                <ImageWithFallback
                  src={project.url}
                  alt={`${project.title} — Enpower sh.p.k`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" aria-hidden />
                <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm dark:bg-slate-900/90 dark:text-white">
                  Projekt energjetik
                </span>
              </Link>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">{project.desc}</p>
                <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                  Zbatim në terren, testim dhe dorëzim me dokumentacion — sipas kërkesave të projektit.
                </p>
                <Link
                  href="/projects"
                  className="cta-inline mt-6"
                >
                  Më shumë detaje
                  <span aria-hidden> →</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/projects" className="btn-primary">
            Shiko të gjitha projektet
          </Link>
          <Link href="/contact" className="btn-secondary dark:border-slate-600 dark:bg-slate-900/60">
            Planifiko projektin tënd
          </Link>
        </div>
      </div>
    </section>
  )
}

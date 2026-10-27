import Link from 'next/link'
import { ImageWithFallback } from './ImageWithFallback'
import { galleryItems } from '@/lib/images'

const FEATURED = galleryItems.slice(0, 4)

export function ProjectsPreview() {
  return (
    <section className="page-band page-band--divider" id="projektet">
      <div className="layout-container">
        <header className="max-w-2xl">
          <p className="eyebrow">Punimet</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl lg:text-5xl text-brand-900 dark:text-white">
            Fushat e projekteve
          </h2>
          <div className="section-title-accent-left" aria-hidden />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Pamje ilustruese të llojeve të punëve që realizojmë — rrjete, trafostacione dhe ndriçim.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2">
          {FEATURED.map((project) => (
            <article key={project.id} className="group">
              <Link
                href="/projects"
                className="relative block aspect-[16/10] overflow-hidden rounded-[1.25rem] ring-1 ring-slate-200/80 dark:ring-white/10"
              >
                <ImageWithFallback
                  src={project.url}
                  alt={`${project.title} — ${project.desc}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-200/90">{project.desc}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/projects" className="btn-primary">
            Galeria e plotë
          </Link>
          <Link href="/contact" className="btn-secondary">
            Kërko ofertë
          </Link>
        </div>
      </div>
    </section>
  )
}

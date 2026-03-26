import Link from 'next/link'
import { ImageWithFallback } from './ImageWithFallback'
import { images } from '@/lib/images'

export function ProjectsPreview() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-slate-50 dark:bg-slate-900/50 bg-grid-pattern overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Projektet tona
            </h2>
            <div className="section-title-accent-left" aria-hidden />
            <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              Ne kemi realizuar projekte të shumta në terren, duke përfshirë:
            </p>
            <ul className="mt-6 space-y-3">
              {['Linja të tensionit të mesëm dhe të lartë', 'Trafostacione private dhe industriale', 'Ndriçim publik dhe objekte funksionale'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <span className="flex h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/projects"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3.5 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md transition-all duration-200"
            >
              Shiko projektet
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {images.projects.map((src, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-slate-200/50 dark:ring-slate-700/50 aspect-[3/4]"
              >
                <ImageWithFallback
                  src={src}
                  alt={`Projekt energjetik ${i + 1} — Enpower sh.p.k`}
                  fill
                  sizes="(max-width: 1024px) 33vw, 200px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

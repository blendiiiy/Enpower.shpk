import Link from 'next/link'
import { ImageWithFallback } from './ImageWithFallback'
import { images } from '@/lib/images'

export function AboutPreview() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-slate-900 bg-grid-pattern overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Rreth nesh
            </h2>
            <div className="section-title-accent-left" aria-hidden />
            <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              Enpower sh.p.k është kompani kosovare e specializuar në sektorin e energjisë elektrike. Aktiviteti ynë përfshin ndërtimin, instalimin dhe mirëmbajtjen e rrjeteve elektrike të tensionit të lartë dhe të mesëm, ndriçimin elektrik dhe trafostacionet.
            </p>
            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              Me staf profesional dhe përvojë në terren, ne realizojmë projekte që plotësojnë kërkesat teknike dhe ligjore, duke garantuar siguri dhe performancë afatgjatë.
            </p>
            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              Misioni ynë është të ofrojmë zgjidhje energjetike të besueshme, që mbështesin zhvillimin industrial dhe infrastrukturor të Kosovës.
            </p>
            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3.5 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md transition-all duration-200"
            >
              Mëso më shumë
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-card-hover ring-1 ring-slate-200/50 dark:ring-slate-700/50 bg-slate-100 dark:bg-slate-800/40 p-2">
            <ImageWithFallback
              src={images.about}
              alt="Enpower sh.p.k — Ekipi dhe projekte energjetike"
              width={1200}
              height={1600}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto max-h-[82vh] object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

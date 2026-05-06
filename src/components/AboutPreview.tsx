import Link from 'next/link'
import { ImageWithFallback } from './ImageWithFallback'
import { images } from '@/lib/images'

export function AboutPreview() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-brand-950/80 bg-grid-pattern overflow-hidden">
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
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { k: 'Siguri', v: 'Procedura dhe kontroll në çdo fazë' },
                { k: 'Teknikë moderne', v: 'Pajisje dhe praktika bashkëkohore' },
                { k: 'Saktësi', v: 'Zbatim sipas specifikimeve' },
              ].map((p) => (
                <li
                  key={p.k}
                  className="rounded-xl border border-slate-100 dark:border-slate-700/70 bg-white dark:bg-slate-900/40 px-4 py-4 shadow-sm"
                >
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{p.k}</p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-snug">{p.v}</p>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link href="/about" className="btn-primary">
                Mëso më shumë
              </Link>
              <Link href="/services" className="cta-inline">
                Shërbimet tona
                <span aria-hidden> →</span>
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-card-hover ring-1 ring-slate-200/70 dark:ring-slate-700/50 bg-white dark:bg-slate-900/35 p-2 lg:mt-2">
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

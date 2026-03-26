import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageWithFallback } from '@/components/ImageWithFallback'
import { images } from '@/lib/images'

const base = 'https://enpower-ks.com'
export const metadata: Metadata = {
  title: 'Rreth nesh | Enpower sh.p.k',
  description:
    'Njihuni me Enpower sh.p.k: ekip profesional për rrjete elektrike TL/TM, trafostacione dhe ndriçim. Zbatim i sigurt dhe profesional në Kosovë.',
  alternates: { canonical: `${base}/about` },
  openGraph: {
    type: 'website',
    title: 'Rreth nesh | Enpower sh.p.k',
    description:
      'Njihuni me Enpower sh.p.k: ekip profesional për rrjete elektrike TL/TM, trafostacione dhe ndriçim.',
    url: `${base}/about`,
    images: [
      {
        url: `${base}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Enpower sh.p.k',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <article className="section-shell">
      <div className="section-container">
        <header className="section-header">
          <p className="eyebrow">Rreth kompanisë</p>
          <h1 className="section-title mt-2">
            Rreth nesh
          </h1>
          <div className="section-title-accent-left" aria-hidden />
          <p className="section-subtitle">
            Enpower sh.p.k — partneri juaj i besueshëm në energji elektrike.
          </p>
        </header>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Enpower sh.p.k është kompani kosovare e specializuar në sektorin e energjisë elektrike. Aktiviteti ynë përfshin ndërtimin, instalimin dhe mirëmbajtjen e rrjeteve elektrike të tensionit të lartë dhe të mesëm, ndriçimin elektrik dhe trafostacionet.
            </p>
            <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              Me staf profesional dhe përvojë në terren, ne realizojmë projekte që plotësojnë kërkesat teknike dhe ligjore, duke garantuar siguri dhe performancë afatgjatë.
            </p>
            <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              Misioni ynë është të ofrojmë zgjidhje energjetike të besueshme, që mbështesin zhvillimin industrial dhe infrastrukturor të Kosovës.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="cta-inline">
                Shiko shërbimet →
              </Link>
              <Link href="/contact" className="cta-inline">
                Kërko ofertë →
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-700/50 bg-slate-100 dark:bg-slate-800/40 p-2">
            <ImageWithFallback
              src={images.about}
              alt="Enpower sh.p.k — Ekipi dhe projekte energjetike"
              width={1200}
              height={1600}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto max-h-[88vh] object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </article>
  )
}

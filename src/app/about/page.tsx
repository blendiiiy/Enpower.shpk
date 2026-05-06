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
  const values = [
    {
      title: 'Siguri teknike',
      description: 'Punime sipas standardeve teknike dhe kontroll i vazhdueshëm gjatë gjithë zbatimit.',
    },
    {
      title: 'Cilësi në ekzekutim',
      description: 'Materiale të certifikuara dhe dorëzim i punimeve me dokumentim të plotë.',
    },
    {
      title: 'Përkushtim ndaj afateve',
      description: 'Planifikim i qartë i fazave për realizim në kohë pa komprometuar standardin.',
    },
  ]

  const capabilities = [
    'Rrjete elektrike të tensionit të lartë dhe të mesëm (TL/TM)',
    'Montim dhe mirëmbajtje e trafostacioneve',
    'Ndriçim elektrik për infrastrukturë dhe ambiente industriale',
    'Shërbime mirëmbajtjeje periodike dhe ndërhyrje teknike',
  ]

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
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Kërko ofertë
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200/70 dark:ring-slate-700/50 bg-white dark:bg-slate-900/35 p-2">
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

        <section className="mt-16 sm:mt-20 rounded-2xl border border-slate-200/70 bg-white/80 p-6 sm:p-8 lg:p-10 shadow-card dark:border-slate-700/60 dark:bg-slate-900/40">
          <p className="eyebrow">Çfarë na dallon</p>
          <h2 className="section-title mt-2 text-2xl sm:text-3xl">Vlerat tona në çdo projekt</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-xl border border-slate-200/70 bg-white p-5 dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 sm:mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 sm:p-8 shadow-card dark:border-slate-700/60 dark:bg-slate-900/40">
            <p className="eyebrow">Ekspertizë</p>
            <h2 className="section-title mt-2 text-2xl sm:text-3xl">Fushat kryesore të punës</h2>
            <ul className="mt-5 space-y-3">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-brand-600" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-6 sm:p-8 shadow-card dark:border-slate-700/60 dark:bg-slate-900/40">
            <p className="eyebrow">Procesi ynë</p>
            <h2 className="section-title mt-2 text-2xl sm:text-3xl">Si punojmë me klientin</h2>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">1. Analizë dhe planifikim</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Vlerësojmë nevojat teknike dhe përgatisim plan realizimi të qartë.</p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">2. Zbatim në terren</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Ekipi ynë realizon punimet sipas standardeve të sigurisë dhe cilësisë.</p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">3. Testim dhe dorëzim</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Bëjmë verifikimet finale për funksionim të qëndrueshëm dhe afatgjatë.</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/services" className="btn-secondary">
                Shiko shërbimet
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}

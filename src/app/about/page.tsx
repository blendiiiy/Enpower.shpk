import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageWithFallback } from '@/components/ImageWithFallback'
import { images } from '@/lib/images'
import { SITE } from '@/lib/site'

const base = SITE.url
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
  const stats = [
    { label: 'Përkushtuar energjisë elektrike', value: '2015+', hint: 'vite eksperiencë e skadrit' },
    { label: 'Projekte TL / TM & infrastrukturë', value: '120+', hint: 'punime të dokumentuara në terren' },
    { label: 'Fokusi i ekipit', value: 'Siguri', hint: 'sipas kërkesave teknike lokale' },
  ]

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

        <section
          className="mb-14 sm:mb-16 grid gap-4 sm:grid-cols-3"
          aria-label="Statistika për Enpower sh.p.k"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/90 p-6 shadow-card dark:border-slate-700/60 dark:from-brand-900/40 dark:to-brand-950/60"
            >
              <p className="text-3xl font-extrabold tracking-tight text-brand-800 dark:text-blue-300">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{item.label}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.hint}</p>
            </div>
          ))}
        </section>

        <section className="mb-14 sm:mb-16 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200/70 bg-white/90 p-6 sm:p-8 shadow-card dark:border-slate-700/60 dark:bg-slate-900/50">
            <p className="eyebrow">Rruga jonë</p>
            <h2 className="section-title mt-2 text-2xl sm:text-3xl text-balance">
              Nga planifikimi tek energjia e qëndrueshme në rrjet
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              Punojmë së bashku me partnerë publikë dhe privatë për të garantuar që çdo linjë energetike dhe çdo
              pikë kontakti teknike plotësojnë standarde sigurie. Fokusi ynë është përfundimi i punës me testim,
              dokumentacion dhe mbështetje pas dorëzimit.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { year: 'Fillimi', text: 'Ndërtimi i kapaciteteve për punime në rrjete TM dhe ndriçim publik.' },
                { year: 'Zgjerimi', text: 'Montim trafostacionesh, trafo private për industrinë dhe shërbimin e mirëmbajtjes.' },
                { year: 'Sot', text: 'Ekip i certifikuar që mbulon të gjithë ciklin jetësor të një projekti energjetik.' },
              ].map((step) => (
                <div key={step.year}>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-blue-400">{step.year}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-brand-900 p-6 text-white shadow-glow dark:border-brand-700 dark:bg-brand-900/90">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">Synimi</p>
            <h2 className="mt-3 text-xl font-bold leading-snug">Çdo punë e sigurt, e matshme dhe e mbështetur me raport</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              Nëse keni nevojë për zëvendësimin e linjave ekzistuese, konstruksion të ri ose mirëmbajtje periodike,
              ekipi ynë vlerëson skenarin, jep zgjidhjen teknike dhe e zbaton sipas afatit.
            </p>
            <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm text-slate-100">
              <strong className="text-primary-300">Këshillë:</strong> na dërgoni skicën e projektit ose foto nga terreni;
              ne kthejmë përgjigje me hapat e mëpasshëm teknikë.
            </div>
          </div>
        </section>

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

        <section className="mt-14 sm:mt-16 rounded-2xl border border-dashed border-brand-300/60 bg-brand-50/40 p-6 sm:p-8 lg:p-10 dark:border-brand-700/50 dark:bg-brand-950/30">
          <p className="eyebrow">Bashkëpunim</p>
          <h2 className="section-title mt-2 text-2xl sm:text-3xl">Ku na gjeni më shpesh</h2>
          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Projekte urbane, zonat industriale dhe objekte që kërkojnë përshtatje të menjëhershme në rrjet janë fusha ku
            kontribuojmë çdo muaj. Mund të na kontaktoni për auditim fillestar ose për ofertë të detajuar për punime në
            kryqëzime me linja të tensionit të lartë.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {['Klina & regjioni', 'Kontrata publike & private', 'Industria & logjistika', 'Ndriçimi i infrastrukturës'].map(
              (tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-brand-200/80 bg-white px-4 py-2 text-sm font-medium text-brand-900 dark:border-brand-600/60 dark:bg-brand-900/60 dark:text-blue-100"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </section>

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
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="btn-secondary">
                Shiko shërbimet
              </Link>
              <Link href="/projects" className="btn-primary">
                Projekte në terren
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-12 sm:mt-14 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-8 text-center text-white shadow-glow sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-200">Hapi tjetër</p>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Diskutojmë projektin tuaj energjetik?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-100/90">
            Lini mesazh ose telefononi drejtpërdrejt — përgjigjemi me planin e punës dhe përgjegjësin e fushës.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-brand-900 shadow-lg transition hover:bg-primary-50">
              Na kontaktoni
            </Link>
            <Link
              href={`tel:${SITE.phoneE164}`}
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20"
            >
              {SITE.phoneDisplay}
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}

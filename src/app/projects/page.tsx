import type { Metadata } from 'next'
import Link from 'next/link'
import { ProjectsGallery } from '@/components/ProjectsGallery'
import { galleryItems } from '@/lib/images'

const base = 'https://enpower-ks.com'
export const metadata: Metadata = {
  title: 'Projektet tona | Enpower sh.p.k',
  description:
    'Projektet energjetike të Enpower sh.p.k në Kosovë: linja TL/TM, trafostacione dhe ndriçim publik me zbatim profesional.',
  alternates: { canonical: `${base}/projects` },
  openGraph: {
    type: 'website',
    title: 'Projektet tona | Enpower sh.p.k',
    description:
      'Shikoni projektet e realizuara nga Enpower sh.p.k në rrjete elektrike, trafostacione dhe ndriçim.',
    url: `${base}/projects`,
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

export default function ProjectsPage() {
  return (
    <article className="section-shell">
      <div className="section-container">
        <header className="section-header">
          <p className="eyebrow">Punimet e realizuara</p>
          <h1 className="section-title mt-2">
            Projektet tona
          </h1>
          <div className="section-title-accent-left" aria-hidden />
          <p className="section-subtitle max-w-2xl">
            Çdo projekt përfshin planifikim teknik, zbatim në terren dhe testim final për siguri.
          </p>
          <Link href="/contact" className="btn-primary mt-6">
            Planifiko projektin tënd
          </Link>
        </header>
        <section className="surface-card p-6 sm:p-8 mb-10 sm:mb-12">
          <p className="eyebrow">Shembull projekti</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Rehabilitim i rrjetit dhe stabilitet më i mirë i furnizimit
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
            Në një nga projektet tona të fundit, ekipi realizoi rehabilitimin e linjës ekzistuese,
            instalimin e pajisjeve të reja mbrojtëse dhe optimizimin e pikës së furnizimit.
            Rezultati ishte rritje e sigurisë operacionale dhe funksionim më stabil për përdoruesit lokalë.
          </p>
        </section>
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Detaje për secilin projekt</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {galleryItems.map((item) => (
              <article key={item.id} className="surface-card-premium p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{item.desc}</p>
                <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                  Fokus: zbatim i sigurt, standard teknik dhe dorëzim brenda afatit.
                </p>
              </article>
            ))}
          </div>
        </section>
        <ProjectsGallery />
      </div>
    </article>
  )
}

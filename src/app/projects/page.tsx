import type { Metadata } from 'next'
import Link from 'next/link'
import { ProjectsGallery } from '@/components/ProjectsGallery'

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
            Ne kemi realizuar projekte të shumta në terren, duke përfshirë:
          </p>
          <Link href="/contact" className="cta-inline mt-6">
            Planifiko projektin tënd me ekipin tonë →
          </Link>
        </header>
        <section className="surface-card p-6 sm:p-8 mb-10 sm:mb-12">
          <p className="eyebrow">Case Study i shkurtër</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Rehabilitim i rrjetit dhe stabilitet më i mirë i furnizimit
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
            Në një nga projektet tona të fundit, ekipi realizoi rehabilitimin e linjës ekzistuese,
            instalimin e pajisjeve të reja mbrojtëse dhe optimizimin e pikës së furnizimit.
            Rezultati ishte rritje e sigurisë operacionale dhe funksionim më stabil për përdoruesit lokalë.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">Analizë në terren</span>
            <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">Instalim i pajisjeve</span>
            <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">Testim & komisionim</span>
          </div>
        </section>
        <ProjectsGallery />
      </div>
    </article>
  )
}

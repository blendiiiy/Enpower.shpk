import type { Metadata } from 'next'
import Link from 'next/link'
import { ProjectsGallery } from '@/components/ProjectsGallery'
import { galleryItems } from '@/lib/images'
import { SITE } from '@/lib/site'

const base = SITE.url
export const metadata: Metadata = {
  title: 'Projektet',
  description:
    'Galeria e punimeve të Enpower sh.p.k: rrjete TL/TM, trafostacione dhe ndriçim elektrik në Kosovë.',
  alternates: { canonical: `${base}/projects` },
  openGraph: {
    type: 'website',
    title: 'Projektet | Enpower sh.p.k',
    description:
      'Pamje nga fushat e punës së Enpower sh.p.k — rrjete elektrike, trafostacione dhe ndriçim.',
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
          <p className="eyebrow">Punimet</p>
          <h1 className="section-title mt-2">Projektet & galeria</h1>
          <div className="section-title-accent-left" aria-hidden />
          <p className="section-subtitle max-w-2xl">
            Pamje ilustruese të fushave ku punojmë. Për referenca të detajuara ose foto nga terreni juaj, na kontaktoni.
          </p>
          <Link href="/contact" className="btn-primary mt-6">
            Kërko ofertë
          </Link>
        </header>

        <section className="mb-10 sm:mb-12" aria-label="Fushat e projekteve">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-900 dark:text-white">
            Fushat e punës
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-5 sm:gap-6">
            {galleryItems.map((item) => (
              <article
                key={item.id}
                className="rounded-[1.25rem] border border-slate-200 bg-white p-5 sm:p-6 shadow-soft dark:border-white/10 dark:bg-brand-900/40"
              >
                <h3 className="font-display text-lg font-semibold text-brand-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <ProjectsGallery />
      </div>
    </article>
  )
}

import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { WhyEnpower } from '@/components/WhyEnpower'
import { AboutPreview } from '@/components/AboutPreview'
import { ServicesSection } from '@/components/ServicesSection'
import { ProjectsPreview } from '@/components/ProjectsPreview'
import { CTA } from '@/components/CTA'
import { AnimatedSection } from '@/components/AnimatedSection'

const base = 'https://enpower-ks.com'
export const metadata: Metadata = {
  title: 'Kryefaqja | Enpower sh.p.k',
  description:
    'Enpower sh.p.k ofron zgjidhje profesionale në energji elektrike në Kosovë: TL/TM, trafostacione, ndriçim dhe mirëmbajtje.',
  alternates: { canonical: base },
  openGraph: {
    title: 'Enpower sh.p.k | Zgjidhje Profesionale në Energji Elektrike',
    description:
      'Partneri juaj për projekte energjetike të sigurta, efikase dhe profesionale në Kosovë.',
    url: base,
  },
}

export default function HomePage() {
  return (
    <>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection delay={0.03}>
        <section className="py-8 sm:py-10 bg-white/90 dark:bg-slate-900/70 border-y border-slate-200/60 dark:border-slate-800/70">
          <div className="section-container grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'Ekip profesional', text: 'Eksperiencë praktike në terren' },
              { title: 'Zbatim i sigurt', text: 'Standard teknik dhe cilësi afatgjatë' },
              { title: 'Partner i besueshëm', text: 'Bashkëpunim serioz për çdo projekt' },
            ].map((item) => (
              <article key={item.title} className="surface-card p-5">
                <h2 className="text-base font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <WhyEnpower />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <AboutPreview />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <ProjectsPreview />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <section className="section-shell !min-h-0">
          <div className="section-container">
            <header className="text-center section-header">
              <p className="eyebrow">Çfarë thonë klientët</p>
              <h2 className="section-title mt-2 text-3xl sm:text-4xl lg:text-5xl">Besimi i klientëve tanë</h2>
              <div className="section-title-accent" aria-hidden />
            </header>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: 'Komunikim korrekt dhe zbatim shumë profesional në terren.',
                  by: 'Klient biznesi, Klinë',
                },
                {
                  quote: 'Punimet u kryen me standard të lartë dhe brenda afatit.',
                  by: 'Investitor privat, Pejë',
                },
                {
                  quote: 'Ekip serioz, i organizuar dhe shumë i përgjegjshëm.',
                  by: 'Partner lokal, Kosovë',
                },
              ].map((item) => (
                <article key={item.by} className="surface-card p-6">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-4 text-sm font-semibold text-amber-600 dark:text-amber-400">{item.by}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <CTA />
      </AnimatedSection>
    </>
  )
}

import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { WhyEnpower } from '@/components/WhyEnpower'
import { AboutPreview } from '@/components/AboutPreview'
import { ServicesSection } from '@/components/ServicesSection'
import { ProjectsPreview } from '@/components/ProjectsPreview'
import { StatsSection } from '@/components/StatsSection'
import { CTA } from '@/components/CTA'
import { AnimatedSection } from '@/components/AnimatedSection'
import { TrustPartnersStrip } from '@/components/TrustPartnersStrip'
import { TestimonialsSection } from '@/components/TestimonialsSection'

const base = 'https://enpower-ks.com'
export const metadata: Metadata = {
  title: 'Kryefaqja | Enpower sh.p.k',
  description:
    'Enpower sh.p.k ofron zgjidhje profesionale në energji elektrike në Kosovë: TL/TM, trafostacione, ndriçim dhe mirëmbajtje.',
  alternates: { canonical: base },
  openGraph: {
    type: 'website',
    title: 'Enpower sh.p.k | Zgjidhje Profesionale në Energji Elektrike',
    description:
      'Partneri juaj për projekte energjetike të sigurta, efikase dhe profesionale në Kosovë.',
    url: base,
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

export default function HomePage() {
  return (
    <>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection delay={0.03}>
        <TrustPartnersStrip />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <WhyEnpower />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <AboutPreview />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <StatsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <ProjectsPreview />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <CTA />
      </AnimatedSection>
    </>
  )
}

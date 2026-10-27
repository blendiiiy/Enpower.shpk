import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { WhyEnpower } from '@/components/WhyEnpower'
import { AboutPreview } from '@/components/AboutPreview'
import { ServicesSection } from '@/components/ServicesSection'
import { ProjectsPreview } from '@/components/ProjectsPreview'
import { CTA } from '@/components/CTA'
import { AnimatedSection } from '@/components/AnimatedSection'
import { TrustPartnersStrip } from '@/components/TrustPartnersStrip'
import { SITE } from '@/lib/site'

const base = SITE.url
export const metadata: Metadata = {
  title: 'Kryefaqja',
  description:
    'Enpower sh.p.k — zgjidhje profesionale në energji elektrike në Kosovë: rrjete TL/TM, trafostacione, ndriçim dhe mirëmbajtje.',
  alternates: { canonical: base },
  openGraph: {
    type: 'website',
    title: 'Enpower sh.p.k | Energji elektrike profesionale në Kosovë',
    description:
      'Rrjete TL/TM, trafostacione, ndriçim dhe mirëmbajtje për sektorin publik dhe privat.',
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
      <Hero />
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
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <ProjectsPreview />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <CTA />
      </AnimatedSection>
    </>
  )
}

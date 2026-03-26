export function StructuredData() {
  const siteUrl = 'https://enpower-ks.com'

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Enpower sh.p.k',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/icon`,
      width: 512,
      height: 512,
    },
    description:
      'Kompani energjetike në Kosovë. Tension i lartë, tension i mesëm, ndriçim elektrik, trafostacione. Projekte të sigurta dhe efikase për sektorin publik dhe privat.',
    foundingDate: '2020',
    sameAs: ['https://www.facebook.com/EnpowerShpk'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kline',
      addressRegion: 'Kosovë',
      addressCountry: 'XK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'enpower@gmail.com',
      telephone: '+38344222836',
      contactType: 'customer service',
      areaServed: 'XK',
      availableLanguage: 'Albanian',
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Enpower sh.p.k',
    description:
      'Zgjidhje profesionale në energji elektrike në Kosovë. Tension i lartë, tension i mesëm, ndriçim elektrik, trafostacione.',
    publisher: { '@id': `${siteUrl}/#organization` },
    inLanguage: 'sq-AL',
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: 'Enpower sh.p.k',
    image: `${siteUrl}/opengraph-image`,
    url: siteUrl,
    telephone: '+38344222836',
    email: 'enpower@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kline',
      addressRegion: 'Kosovë',
      addressCountry: 'XK',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Shërbimet energjetike',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rrjete elektrike TL & TM' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trafostacione dhe trafo private' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ndriçim publik dhe industrial' } },
      ],
    },
  }

  const scripts = [organization, website, localBusiness].map((data, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  ))

  return <>{scripts}</>
}

/**
 * Shërbimet e verifikuara nga përmbajtja ekzistuese e kompanisë (about / services).
 * Mos shtoni shërbime të reja pa konfirmim nga Enpower.
 */
export type ServiceItem = {
  id: string
  title: string
  summary: string
  items: string[]
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'rrjete-tl-tm',
    title: 'Rrjete elektrike TL & TM',
    summary:
      'Ndërtim, instalim dhe rehabilitim i rrjeteve të tensionit të lartë dhe të mesëm për furnizim të qëndrueshëm.',
    items: [
      'Linja ajrore dhe nëntokësore të tensionit të lartë / të mesëm',
      'Instalime elektrike industriale',
      'Testim, vënie në funksion dhe mirëmbajtje',
    ],
  },
  {
    id: 'trafostacione',
    title: 'Trafostacione & trafo private',
    summary:
      'Ndërtim, montim dhe modernizim i trafostacioneve për sektorin publik, privat dhe industrial.',
    items: [
      'Ndërtim i trafostacioneve të reja',
      'Montim i trafove private për biznese dhe industri',
      'Modernizim, servis teknik dhe mirëmbajtje',
    ],
  },
  {
    id: 'ndricim',
    title: 'Ndriçim elektrik',
    summary:
      'Sisteme ndriçimi për infrastrukturë publike, ambiente industriale dhe objekte komerciale.',
    items: [
      'Ndriçim publik (rrugë, sheshe, zona urbane)',
      'Ndriçim industrial dhe komercial',
      'Zgjidhje efikase energjetike',
    ],
  },
  {
    id: 'mirembajtje',
    title: 'Mirëmbajtje & rehabilitim',
    summary:
      'Mirëmbajtje periodike dhe ndërhyrje teknike për rrjete, trafostacione dhe instalime ekzistuese.',
    items: [
      'Kontroll dhe mirëmbajtje periodike',
      'Rehabilitim i linjave dhe infrastrukturës ekzistuese',
      'Ndërhyrje teknike sipas nevojës së projektit',
    ],
  },
]

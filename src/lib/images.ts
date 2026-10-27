/**
 * Path-et e fotove në public/images/.
 * Titullat përshkruajnë llojin e punës — jo projekte të inventuara me emër klienti.
 */
export const images = {
  hero: '/images/hero/background.jpg',
  about: '/images/about/about-enpower.jpg',
  projects: [
    '/images/projects/project-1.jpg',
    '/images/projects/project-2.jpg',
    '/images/projects/project-3.jpg',
    '/images/projects/project-4.jpg',
  ],
} as const

export type MediaItemType = {
  id: number
  type: 'image' | 'video'
  title: string
  desc: string
  url: string
  span: string
}

export const galleryItems: MediaItemType[] = [
  {
    id: 1,
    type: 'image',
    title: 'Rrjete të tensionit të lartë',
    desc: 'Infrastrukturë dhe linja TL',
    url: '/images/projects/project-1.jpg',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 2,
    type: 'image',
    title: 'Trafostacione',
    desc: 'Montim dhe infrastruktura e furnizimit',
    url: '/images/projects/project-2.jpg',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 3,
    type: 'image',
    title: 'Ndriçim elektrik',
    desc: 'Ndriçim publik dhe industrial',
    url: '/images/projects/project-3.jpg',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 4,
    type: 'image',
    title: 'Rrjete të tensionit të mesëm',
    desc: 'Instalime dhe rrjete TM',
    url: '/images/projects/project-4.jpg',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2',
  },
]

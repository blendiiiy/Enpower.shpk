/**
 * Path-et e fotove në public/images/.
 * Ndryshoni këtu kur shtoni ose riemëroni skedarë.
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

/** Galeria e projekteve për MediaItem / GalleryModal */
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
    title: 'Linja Tension i Lartë',
    desc: 'Ndërtim dhe mirëmbajtje profesionale',
    url: '/images/projects/project-1.jpg',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 2,
    type: 'image',
    title: 'Trafostacione',
    desc: 'Instalime moderne dhe të sigurta',
    url: '/images/projects/project-2.jpg',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 3,
    type: 'image',
    title: 'Ndriçim Elektrik',
    desc: 'Zgjidhje efikase për ndriçim publik',
    url: '/images/projects/project-3.jpg',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 4,
    type: 'image',
    title: 'Rrjete TM',
    desc: 'Tension i mesëm — instalime profesionale',
    url: '/images/projects/project-4.jpg',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2',
  },
]

/**
 * Path-et e fotove. Përdorni /images/... kur keni fotot reale në public/images/.
 * Tani përdoren placeholder-e nga placehold.co.
 */
export const images = {
  hero: '/images/hero/background.png',
  about: '/images/about/about-enpower.png',
  projects: [
    '/images/projects/project-1.png',
    '/images/projects/project-2.png',
    '/images/projects/project-3.png',
    '/images/projects/project-4.png',
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
    url: '/images/projects/project-1.png',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 2,
    type: 'image',
    title: 'Trafostacione',
    desc: 'Instalime moderne dhe të sigurta',
    url: '/images/projects/project-2.png',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 3,
    type: 'image',
    title: 'Ndriçim Elektrik',
    desc: 'Zgjidhje efikase për ndriçim publik',
    url: '/images/projects/project-3.png',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 4,
    type: 'image',
    title: 'Rrjete TM',
    desc: 'Tension i mesëm — instalime profesionale',
    url: '/images/projects/project-4.png',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2',
  },
]

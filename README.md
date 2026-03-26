# Enpower sh.p.k — Website

Faqe moderne profesionale për **Enpower sh.p.k**, ndërtuar me Next.js 14, Tailwind CSS dhe e optimizuar për SEO.

## Teknologjitë

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **framer-motion**, **lucide-react**, **@radix-ui/react-slot**, **class-variance-authority**, **clsx**, **tailwind-merge**
- **SEO**: metadata, sitemap, robots, JSON-LD (Schema.org)
- **UI**: `components/ui/` (Button, Input, Textarea), galeri projektesh me modal, formë kontakti

## Si të ekzekutosh

```bash
npm install
npm run dev
```

**Shënim:** Projekti përdor `framer-motion`, `lucide-react`, `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge`. Ato instalohen me `npm install`. Nëse ndonjëra mungon, ekzekuto `npm install` përsëri.

Hap [http://localhost:3000](http://localhost:3000) në shfletues.

**Nëse shfaqet ChunkLoadError (timeout):** ndaloni serverin (`Ctrl+C`), pastaj:
```bash
npm run dev:fresh
```
Ose: `rm -rf .next && npm run dev`. Më pas bëni **hard refresh** në shfletues (`Cmd+Shift+R` / `Ctrl+Shift+R`) ose hapni faqen në **privit** (incognito).

**Nëse shfaqet “Can't resolve next-flight-client-entry-loader” ose build dështon:** bëni instalim të pastër:
```bash
npm run clean
npm run build
```
Ose manualisht: `rm -rf node_modules .next package-lock.json` → `npm install` → `npm run build`.

## Build për prodhim

```bash
npm run build
npm start
```

## Struktura

- **Kryefaqja**: Hero, Pse Enpower?, Rreth nesh, Shërbimet, Projektet, Si punojmë, CTA
- **Rreth nesh** (`/about`)
- **Shërbimet** (`/services`): Rrjete TL & TM, Trafostacione, Ndriçim
- **Projektet** (`/projects`)
- **Kontakti** (`/contact`)

## Fotot

- **Struktura**: `public/images/hero/`, `public/images/about/`, `public/images/projects/`.
- **Konfigurimi**: Path-et janë në `src/lib/images.ts`. Tani përdoren placeholder-e nga placehold.co.
- **Foto reale**: Vendosni skedarët (p.sh. `banner.jpg`, `about.jpg`, `1.jpg`, `2.jpg`) në ato foldera dhe përditësoni `images` në `src/lib/images.ts` me `/images/hero/banner.jpg` etj.

## Forma e kontaktit

Forma në `/contact` dërgon mesazhe përmes **Formspree**. Për ta aktivizuar:

1. Krijo një formë në [formspree.io](https://formspree.io) dhe merr Form ID.
2. Shto në `.env.local`: `NEXT_PUBLIC_FORMSPREE_ID=xxx`
3. Rindiz `npm run dev`. Forma do të dërgojë në Formspree.

Pa këtë variabël, forma është e çaktivizuar dhe shfaqet një mesazh udhëzues.

## Ndryshime që mund të bësh

1. **Fotot**: Shto imazhe në `public/images/` dhe përditëso `src/lib/images.ts`. Galeria përdor edhe `galleryItems` në të njëjtin skedar.
2. **Kontakt**: Ndrysho email-in, telefonin dhe Facebook në `Footer`, `Contact` dhe `StructuredData`. Formspree: si më sipër.
3. **Domeni**: Përditëso `metadataBase`, `sitemap.ts` dhe `robots.ts` me domenin real.

## Keywords SEO (tashmë të përdorura)

- kompani energjetike Kosovë
- tension i mesëm Kosovë
- tension i lartë Kosovë
- trafostacione Kosovë
- trafo private Kosovë
- ndriçim elektrik Kosovë

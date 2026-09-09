# Enpower sh.p.k — Website

Faqe profesionale për **Enpower sh.p.k**, ndërtuar me Next.js 14, Tailwind CSS dhe e optimizuar për SEO.

## Teknologjitë

- **Next.js 14** (App Router) · **TypeScript** · **Tailwind CSS**
- **framer-motion**, **lucide-react**, **Resend** (email), **mysql2** (mesazhet e kontaktit)
- **SEO**: metadata, sitemap, robots, JSON-LD (Schema.org)

## Si të ekzekutosh

```bash
npm install
npm run dev
```

Hap [http://localhost:3000](http://localhost:3000).

Kopjo `.env.example` → `.env.local` dhe plotëso vlerat (MySQL + Resend).

**Nëse shfaqet ChunkLoadError:** `npm run dev:fresh` ose `rm -rf .next && npm run dev`, pastaj hard refresh.

**Nëse build dështon:** `npm run clean` pastaj `npm run build`.

## Build për prodhim

```bash
npm run build
npm start
```

## Faqet

- **/** — Hero, shërbime, projekte, dëshmi, CTA
- **/about** — Rreth nesh
- **/services** — TL/TM, trafostacione, ndriçim
- **/projects** — Galeria e projekteve
- **/contact** — Të dhënat + forma e kontaktit

## Forma e kontaktit (MySQL + Resend)

Forma në `/contact` bën dy gjëra:

1. **Ruan** mesazhin në MySQL (`contact_messages`)
2. **Dërgon** email njoftimi te ju (Resend) + opsionalisht konfirmim te klienti

### Hapat

1. Krijo databazën në MySQL / phpMyAdmin (p.sh. `En-power.shpk`)
2. Vendos `MYSQL_*` në `.env.local`
3. Krijo tabelën: `npm run db:init` (ose ekzekuto `database/schema.sql`)
4. Hap llogari te [resend.com](https://resend.com), merre `RESEND_API_KEY`
5. Vendos `CONTACT_NOTIFY_EMAIL` (emaili ku merr njoftimet) dhe opsionalisht `RESEND_FROM_EMAIL`
6. Rinis `npm run dev` dhe testo formën

Udhëzime për probleme me email: `docs/email-resend.md`.  
Kontrollo konfigurimin: `GET /api/health`.

## Fotot

- Foldera: `public/images/hero/`, `about/`, `projects/`, `logo/`
- Path-et: `src/lib/images.ts` dhe `src/lib/logo.ts`

## Të dhënat e kompanisë

Email, telefon, adresë, Facebook dhe URL e sajtit janë në **`src/lib/site.ts`**.  
Ndrysho atje që Footer, kontakti, WhatsApp dhe SEO të mbeten të njëjta.

Për faqen `/contact` mund të mbivendosësh me env: `CONTACT_PAGE_EMAIL`, `CONTACT_PAGE_PHONE`, `CONTACT_PAGE_ADDRESS`.

## Domeni / SEO

Domeni aktual në kod: `https://enpower-ks.com` (`src/lib/site.ts`, `sitemap.ts`, `robots.ts`, metadata).

## Keywords SEO

- kompani energjetike Kosovë
- tension i mesëm / i lartë Kosovë
- trafostacione · trafo private · ndriçim elektrik Kosovë

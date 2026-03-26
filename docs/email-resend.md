# Pse nuk vjen emaili? (Resend)

Kur forma e kontaktit dërgon mesazh, aplikacioni përpiqet të dërgojë **dy emaila**:

1. **Njoftim te ti** (adresa në `CONTACT_NOTIFY_EMAIL`) – përmbajtja e mesazhit  
2. **Konfirmim te klienti** (emaili që vizitori vendos në formë) – “Kërkesa juaj u pranua”

Nëse nuk të vjen asnjë email, kontrollo këto:

---

## 1. A ke vendosur variablat në `.env.local`?

Duhet të kesh (pas ndryshimit rinisje serverin: `Ctrl+C` pastaj `npm run dev`):

- **RESEND_API_KEY** – API key nga [resend.com](https://resend.com) → API Keys → Create
- **CONTACT_NOTIFY_EMAIL** – emaili **ku do të marrësh ti** njoftimet (p.sh. emaili yt personal ose i kompanisë)

Nëse njëra mungon, në terminal do të shfaqet:  
`[Contact] Email nuk u dërgua: vendos RESEND_API_KEY dhe CONTACT_NOTIFY_EMAIL...`

---

## 2. Me planin **falas** të Resend, mund të dërgohet vetëm te adresa të **verifikuara**

- **Njoftimi te ti:**  
  `CONTACT_NOTIFY_EMAIL` duhet të jetë **emaili me të cilin u regjistrove në Resend**, ose një adresë që e ke shtuar dhe verifikuar në Resend → **Audiences** (ose te Domain).

- **Konfirmimi te klienti:**  
  Drejt çdo adrese që vizitori shkruan në formë **nuk** dërgohet me planin falas, përveçse nëse e ke verifikuar domenin tënd në Resend. Derisa të verifikosh domenin, vetëm adresat e verifikuara marrin email.

**Për test të shpejtë:**  
Vendos në `.env.local`:

```env
CONTACT_NOTIFY_EMAIL=delivered@resend.dev
```

Kjo është adresa test e Resend; emailat “mbërrijnë” te ata. Mund t’i shikosh në [resend.com](https://resend.com) → **Emails** (historik dërgesash).

---

## 3. Kontrollo **Spam / Junk**

Shiko edhe te Spam në inbox. Ndonjëherë emailat e parë nga Resend shkojnë atje.

---

## 4. Çfarë tregon **terminali** kur dërgon një mesazh?

Kur plotëson formën dhe shtyp “Dërgo”, në terminalin ku vrapon `npm run dev` duhet të shikosh diçka si:

- `[Contact] Njoftim do të dërgohet te: xxx@... | Konfirmim te klienti: yyy@...`
- `[Email] Resend pranoi dërgesën. Tek: xxx@...` **ose** `[Email] Resend ktheu gabim: ...`
- `[Contact] Rezultat: njoftim te ti = dërguar/dështuar | konfirmim te klienti = dërguar/dështuar`

Nëse shikon **dështuar**, gabimi i Resend shfaqet pak më sipër (p.sh. “recipient not verified”).  
Nëse shikon **dërguar** por nuk të vjen email, kontrollo Spam dhe te Resend → Emails nëse dërgia është “Delivered”.

---

## Përmbledhje

| Dëshironi… | Çfarë të bëni |
|------------|----------------|
| Të marrësh **ju** njoftimin për çdo mesazh | Vendosni `CONTACT_NOTIFY_EMAIL` = emaili juaj i regjistruar në Resend (ose i verifikuar te Audiences). |
| **Klienti** të marrë “Kërkesa u pranua” | Me planin falas: vetëm në adresa të verifikuara; për çdo adresë verifikoni domenin në Resend. |
| Test pa verifikuar adresa | Përdorni `CONTACT_NOTIFY_EMAIL=delivered@resend.dev` dhe shikoni te Resend → Emails. |

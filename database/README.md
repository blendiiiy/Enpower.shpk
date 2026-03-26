# Databaza – contact_messages

Forma e kontaktit ruan mesazhet në tabelën **contact_messages**. Nëse merr gabimin  
*"Kontrollo: MySQL duke u ekzekutuar? Tabela contact_messages ekziston?"*, bëj një nga këto:

## Mënyra 1: Skript (rekomandohet)

Nga rrënja e projektit, ekzekuto:

```bash
npm run db:init
```

Skripti lexon `.env.local` dhe krijon tabelën në databazën që ke konfiguruar. Sigurohu që **MySQL të jetë i ndezur** dhe që databaza (p.sh. `En-power.shpk`) të ekzistojë.

## Mënyra 2: phpMyAdmin

1. Hap phpMyAdmin dhe zgjidh databazën (p.sh. **En-power.shpk**).
2. Shko te **SQL** dhe ngjit përmbajtjen e skedarit `database/schema.sql`.
3. Kliko **Ekzekuto**.

## Krijimi i databazës (nëse nuk ekziston)

Në phpMyAdmin → **Databaza të reja** → emri p.sh. `En-power.shpk` (ose pa pikë) → Krijimi.  
Pastaj ekzekuto skedarin SQL ose `npm run db:init`.

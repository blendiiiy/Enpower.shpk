#!/usr/bin/env node
/**
 * Kontrollo .env.local (ekzekuto: node scripts/check-env.js)
 */
const fs = require('fs')
const path = require('path')

const envPath = path.join(process.cwd(), '.env.local')
if (!fs.existsSync(envPath)) {
  console.log('✗ .env.local nuk ekziston! Krijoje në rrënjën e projektit.')
  process.exit(1)
}

const content = fs.readFileSync(envPath, 'utf8')
const vars = ['MYSQL_HOST', 'MYSQL_USER', 'MYSQL_PASSWORD', 'MYSQL_DATABASE']
console.log('Kontroll i .env.local:\n')
let ok = true
for (const v of vars) {
  const re = new RegExp(`${v}=([^\\r\\n]+)`, 'm')
  const m = content.match(re)
  const val = m ? m[1].trim() : null
  const status = val ? '✓' : '✗ MUNGON'
  if (!val) ok = false
  console.log(`  ${v}: ${status}`)
}
console.log(ok ? '\n✓ Konfigurimi duket në rregull. Rinisni: npm run dev' : '\n✗ Ploteso variablat që mungojnë.')
process.exit(ok ? 0 : 1)

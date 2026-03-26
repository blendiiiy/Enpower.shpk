/**
 * Krijon tabelën contact_messages në MySQL.
 * Përdor variablat nga .env.local (MYSQL_HOST, MYSQL_USER, etj).
 *
 * Ekzekutimi: node scripts/init-contact-table.js
 * (Duhet të jesh në rrënjë të projektit; MySQL duhet të jetë i ndezur.)
 */

const fs = require('fs')
const path = require('path')
const mysql = require('mysql2/promise')

function loadEnvLocal() {
  const envPath = path.join(__dirname, '..', '.env.local')
  if (!fs.existsSync(envPath)) {
    console.error('Skedari .env.local nuk u gjet. Krijoje me MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE.')
    process.exit(1)
  }
  const content = fs.readFileSync(envPath, 'utf8')
  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('#')) {
      const eq = trimmed.indexOf('=')
      if (eq > 0) {
        const key = trimmed.slice(0, eq).trim()
        const value = trimmed.slice(eq + 1).trim()
        if (!process.env[key]) process.env[key] = value
      }
    }
  }
}

const schema = `
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NULL,
  message TEXT NOT NULL,
  request_type VARCHAR(20) NOT NULL DEFAULT 'general',
  preferred_date DATE NULL,
  preferred_time VARCHAR(50) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`.trim()

async function main() {
  loadEnvLocal()

  const host = process.env.MYSQL_HOST || 'localhost'
  const port = parseInt(process.env.MYSQL_PORT || '3306', 10)
  const user = process.env.MYSQL_USER
  const password = process.env.MYSQL_PASSWORD
  const database = process.env.MYSQL_DATABASE

  if (!user || !password || !database) {
    console.error('Mungojnë MYSQL_USER, MYSQL_PASSWORD ose MYSQL_DATABASE në .env.local')
    process.exit(1)
  }

  try {
    const conn = await mysql.createConnection({
      host,
      port,
      user,
      password,
      database,
    })
    await conn.query(schema)
    console.log('Tabela contact_messages u krijua (ose ekziston tashmë).')
    await conn.end()
  } catch (err) {
    const msg = err.message || err.code || String(err)
    console.error('Gabim MySQL:', msg)
    if (err.code === 'ECONNREFUSED') {
      console.error('→ Sigurohu që MySQL është i ndezur (p.sh. MAMP/XAMPP ose mysql server).')
    }
    if (err.code === 'ER_BAD_DB_ERROR') {
      console.error('→ Databaza "' + database + '" nuk ekziston. Krijoje fillimisht në phpMyAdmin.')
    }
    if (err.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('→ Emri ose fjalëkalimi i MySQL në .env.local është gabim.')
    }
    process.exit(1)
  }
}

main()

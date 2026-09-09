import { NextResponse } from 'next/server'
import { getPool } from '@/lib/db'

export async function GET() {
  const missing: string[] = []
  if (!process.env.MYSQL_USER?.trim()) missing.push('MYSQL_USER')
  if (!process.env.MYSQL_PASSWORD) missing.push('MYSQL_PASSWORD')
  if (!process.env.MYSQL_DATABASE?.trim()) missing.push('MYSQL_DATABASE')
  if (!process.env.RESEND_API_KEY?.trim()) missing.push('RESEND_API_KEY')
  if (!process.env.CONTACT_NOTIFY_EMAIL?.trim()) missing.push('CONTACT_NOTIFY_EMAIL')

  const pool = getPool()
  let dbOk = false
  if (pool) {
    try {
      const conn = await pool.getConnection()
      await conn.ping()
      conn.release()
      dbOk = true
    } catch {
      dbOk = false
    }
  }

  if (missing.length > 0 || !dbOk) {
    return NextResponse.json(
      {
        ok: false,
        error: missing.length > 0 ? 'Mungojnë variablat e mjedisit' : 'MySQL nuk përgjigjet',
        missing: missing.length > 0 ? missing : undefined,
        database: dbOk ? 'connected' : 'unavailable',
        hint: 'Kontrollo .env.local, MySQL, dhe rinisni serverin (npm run dev). Shih database/README.md.',
      },
      { status: 503 }
    )
  }

  return NextResponse.json({
    ok: true,
    message: 'Forma e kontaktit është gati (MySQL + Resend).',
    config: {
      database: 'connected',
      emailProvider: 'Resend',
      notifyTo: process.env.CONTACT_NOTIFY_EMAIL,
    },
  })
}

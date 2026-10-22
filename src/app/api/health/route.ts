import { NextResponse } from 'next/server'
import { getPool } from '@/lib/db'

export async function GET() {
  const missingEmail: string[] = []
  if (!process.env.RESEND_API_KEY?.trim()) missingEmail.push('RESEND_API_KEY')
  if (!process.env.CONTACT_NOTIFY_EMAIL?.trim()) missingEmail.push('CONTACT_NOTIFY_EMAIL')

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

  const emailOk = missingEmail.length === 0
  const ok = dbOk || emailOk

  if (!ok) {
    return NextResponse.json(
      {
        ok: false,
        error: 'As MySQL as Resend nuk janë gati',
        missing: missingEmail.length ? missingEmail : undefined,
        database: dbOk ? 'connected' : 'unavailable',
        hint: 'Vendos RESEND_API_KEY + CONTACT_NOTIFY_EMAIL, ose ndez MySQL (XAMPP) dhe MYSQL_* në .env.local.',
      },
      { status: 503 }
    )
  }

  return NextResponse.json({
    ok: true,
    message: 'Forma e kontaktit është gati.',
    config: {
      database: dbOk ? 'connected' : 'optional/unavailable',
      emailProvider: emailOk ? 'Resend' : 'not configured',
      notifyTo: process.env.CONTACT_NOTIFY_EMAIL || null,
    },
  })
}

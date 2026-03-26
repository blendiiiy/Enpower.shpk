import mysql from 'mysql2/promise'

let pool: mysql.Pool | null = null

export function getPool(): mysql.Pool | null {
  const host = process.env.MYSQL_HOST ?? 'localhost'
  const user = process.env.MYSQL_USER
  const password = process.env.MYSQL_PASSWORD
  const database = process.env.MYSQL_DATABASE

  if (!user || !password || !database) {
    return null
  }

  if (!pool) {
    pool = mysql.createPool({
      host,
      port: parseInt(process.env.MYSQL_PORT ?? '3306', 10),
      user,
      password,
      database,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    })
  }

  return pool
}

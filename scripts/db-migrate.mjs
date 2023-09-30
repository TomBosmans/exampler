import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import { exit } from "process"
import { migrate } from "drizzle-orm/postgres-js/migrator"

async function dbMigrate() {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) throw Error("No DATABASE_URL environment variable")

  try {
    const migrationClient = postgres(databaseUrl, { max: 1 })
    await migrate(drizzle(migrationClient), { migrationsFolder: "migrations" })
    exit(0)
  } catch (error) {
    console.error(error)
    exit(1)
  }
}

dbMigrate()

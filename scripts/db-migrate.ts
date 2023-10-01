import config from "../src/config"
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import { exit } from "process"
import { migrate } from "drizzle-orm/postgres-js/migrator"

async function dbMigrate() {
  console.log(config.databaseUrl)
  try {
    const migrationClient = postgres(config.databaseUrl, { max: 1 })
    await migrate(drizzle(migrationClient), { migrationsFolder: "migrations" })
    exit(0)
  } catch (error) {
    console.error(error)
    exit(1)
  }
}

void dbMigrate()

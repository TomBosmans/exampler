import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import config from "./config"

const dbClient = postgres(config.databaseUrl)
const db = drizzle(dbClient)

export default db
export type Database = typeof db
export * from "drizzle-orm/pg-core"

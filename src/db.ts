import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const dbClient = postgres(process.env.DATABASE_URL || "");
const db = drizzle(dbClient);

export default db;
export type Database = typeof db;
export * from "drizzle-orm/pg-core";

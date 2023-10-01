import type { Config } from "drizzle-kit"

export default {
  schema: "src/**/*.table.ts",
  out: "migrations",
  driver: "pg",
  dbCredentials: {
    host: "postgres",
    port: 5432,
    user: "postgres",
    database: "development",
  },
} satisfies Config

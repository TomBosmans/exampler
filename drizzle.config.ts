import type { Config } from "drizzle-kit"

export default {
  schema: "src/**/*.table.ts",
  out: "migrations",
  driver: "pg",
} satisfies Config

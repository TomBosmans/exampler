import { z } from "zod"

const configSchema = z.object({
  NODE_ENV: z.enum(["test", "development", "production"]).default("development"),
  PORT: z.preprocess(Number, z.number()),
  DATABASE_PORT: z.preprocess(Number, z.number()),
  DATABASE_USER: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_PASSWORD: z.string(),
}).transform((data) => ({
  env: data.NODE_ENV,
  port: data.PORT,
  databaseUrl: `postgres://${data.DATABASE_USER}:${data.DATABASE_PASSWORD}@${data.DATABASE_HOST}:${data.DATABASE_PORT}/${data.DATABASE_NAME}`,
}))

const config = configSchema.parse(process.env)
export type Config = z.output<typeof configSchema>
export default config

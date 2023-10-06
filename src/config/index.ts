import { z } from "zod"

const configSchema = z
  .object({
    NODE_ENV: z
      .enum(["test", "development", "production"])
      .default("development"),
    PORT: z.preprocess(Number, z.number()),
    DATABASE_PORT: z.preprocess(Number, z.number()),
    DATABASE_USER: z.string(),
    DATABASE_HOST: z.string(),
    DATABASE_NAME: z.string(),
    DATABASE_PASSWORD: z.string(),
    WATCH_WEB_COMPONENTS: z.preprocess((v) => v === "true", z.boolean()),
    PASSWORD_SALT_ROUNDS: z.preprocess(Number, z.number()),
  })
  .transform((data) => ({
    env: data.NODE_ENV,
    port: data.PORT,
    watch: {
      webComponents: data.WATCH_WEB_COMPONENTS,
    },
    database: {
      port: data.DATABASE_PORT,
      user: data.DATABASE_USER,
      host: data.DATABASE_HOST,
      name: data.DATABASE_NAME,
      password: data.DATABASE_PORT,
      url: `postgres://${data.DATABASE_USER}:${data.DATABASE_PASSWORD}@${data.DATABASE_HOST}:${data.DATABASE_PORT}/${data.DATABASE_NAME}`,
    },
    password: {
      saltRounds: data.PASSWORD_SALT_ROUNDS,
    },
  }))

const config = configSchema.parse(process.env)
export type Config = z.output<typeof configSchema>
export default config

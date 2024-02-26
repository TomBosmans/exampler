import toBoolean from "@utils/transformers/to-boolean"
import toNumber from "@utils/transformers/to-number"
import { z } from "zod"

const rawConfigSchema = z.object({
  DATABASE_HOST: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_PORT: z.preprocess(toNumber, z.number()),
  DATABASE_USER: z.string(),
  NODE_ENV: z.enum(["test", "development", "production"]).default("development"),
  PASSWORD_SALT_ROUNDS: z.preprocess(toNumber, z.number()),
  PORT: z.preprocess(toNumber, z.number()),
  REDIS_HOST: z.string(),
  REDIS_NAME: z.preprocess(toNumber, z.number()),
  REDIS_PASSWORD: z.string(),
  REDIS_PORT: z.preprocess(toNumber, z.number()),
  REDIS_USER: z.string(),
  WATCH_WEB_COMPONENTS: z.preprocess(toBoolean, z.boolean().default(false)),
})

export const configSchema = rawConfigSchema.transform((data) => ({
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
  redis: {
    port: data.REDIS_PORT,
    user: data.REDIS_USER,
    host: data.REDIS_HOST,
    name: data.REDIS_NAME,
    password: data.REDIS_PASSWORD,
    url: `redis://${data.REDIS_USER}:${data.REDIS_PASSWORD}@${data.REDIS_HOST}:${data.REDIS_PORT}/${data.REDIS_NAME}`,
  },
  password: {
    saltRounds: data.PASSWORD_SALT_ROUNDS,
  },
}))

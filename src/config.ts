import { object, output, string } from "zod"

const configSchema = object({
  DATABASE_URL: string(),
})

const config = configSchema.parse(process.env)
export type Config = output<typeof configSchema>
export default config

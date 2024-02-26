import { z } from "zod"
import { configSchema } from "./schemas"

const config = configSchema.parse(process.env)
export type Config = z.output<typeof configSchema>
export default config

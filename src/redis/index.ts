import config from "@config"
import { createClient } from "redis"

const client = createClient({ url: config.redis.url })
client.on("error", (err) => console.error("Redis Client Error", err))
await client.connect()

export type Redis = typeof client
export default client

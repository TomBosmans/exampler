import { Pool } from "pg"
import type { DB } from "kysely-codegen"
import * as k from "kysely"
import config from "../config"

const dialect = new k.PostgresDialect({
  pool: new Pool({
    database: config.database.name,
    host: config.database.host,
    user: config.database.user,
    port: config.database.port,
    max: 10,
  }),
})

const db = new k.Kysely<DB>({ dialect })
export type { DB } from "kysely-codegen"
export default db
export type Database = typeof db
export { sql } from "kysely"
export type SelectQuery<Table extends keyof DB> = k.SelectQueryBuilder<DB, Table, {}>

import { Pool } from "pg"
import { DB } from "kysely-codegen"
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
export default db
export const queryBuilder = <T extends keyof DB>() => k.expressionBuilder<DB, T>()
export type Database = typeof db
export { sql } from "kysely"
export type QueryBuilder<T extends keyof DB> = k.ExpressionBuilder<DB, T>

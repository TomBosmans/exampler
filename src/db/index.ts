import { Pool } from "pg"
import { DB } from "kysely-codegen"
import {
  Kysely,
  PostgresDialect,
  ExpressionBuilder,
  expressionBuilder,
} from "kysely"
import config from "../config"

const dialect = new PostgresDialect({
  pool: new Pool({
    database: config.database.name,
    host: config.database.host,
    user: config.database.user,
    port: config.database.port,
    max: 10,
  }),
})

const db = new Kysely<DB>({ dialect })
export default db
export const queryBuilder = <T extends keyof DB>() => expressionBuilder<DB, T>()
export type Database = typeof db
export type QueryBuilder<T extends keyof DB> = ExpressionBuilder<DB, T>

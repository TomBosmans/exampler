import BaseQueryBuilder from "./base.query-builder"
import { DB } from "kysely-codegen"

export default function KysleyQueryBuilder<Table extends keyof DB>(table: Table) {
  return class extends BaseQueryBuilder<Table> {
    public tableName = table
  }
}

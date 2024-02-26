import * as kysley from "kysely"
import QueryBuilder from "@lib/core/query-builder"
import { DB } from "kysely-codegen"

export type SelectReturn<Table extends keyof DB> = kysley.Selectable<DB[Table]>

export type SelectQuery<Table extends keyof DB> = kysley.SelectQueryBuilder<
  DB,
  Table,
  SelectReturn<Table>
>
export type InsertQuery<Table extends keyof DB> = kysley.InsertQueryBuilder<DB, Table, {}>
export type UpdateQuery<Table extends keyof DB> = kysley.UpdateQueryBuilder<DB, Table, Table, {}>
export type DeleteQuery<Table extends keyof DB> = kysley.DeleteQueryBuilder<DB, Table, {}>

export type DeleteParams<Table extends keyof DB> = Pick<BaseParams<Table>, "where" | "schema">
export type InsertParams<Table extends keyof DB> = Pick<BaseParams<Table>, "values" | "schema">
export type SelectParams<Table extends keyof DB> = Pick<
  BaseParams<Table>,
  "where" | "orderBy" | "select" | "schema"
>
export type UpdateParams<Table extends keyof DB> = Pick<
  BaseParams<Table>,
  "where" | "set" | "schema"
>

type WherableQuery<Table extends keyof DB> =
  | SelectQuery<Table>
  | UpdateQuery<Table>
  | DeleteQuery<Table>

type Query<Table extends keyof DB> =
  | SelectQuery<Table>
  | InsertQuery<Table>
  | UpdateQuery<Table>
  | DeleteQuery<Table>

export type WhereParams<Table extends keyof DB> = Partial<{
  [Key in keyof DB[Table]]: {
    eq?: kysley.OperandValueExpressionOrList<DB, Table, Key>
    in?: Array<kysley.OperandValueExpressionOrList<DB, Table, Key>>
  }
}>
export type DataParams<Table extends keyof DB> = {
  [Key in keyof DB[Table]]: kysley.OperandValueExpressionOrList<DB, Table, Key>
}

export type BaseParams<Table extends keyof DB> = {
  schema?: string
  select?: Array<keyof DB[Table]>
  orderBy?: Partial<Record<keyof DB[Table], "asc" | "desc">>
  where?: WhereParams<Table>
  values?: DataParams<Table>
  set?: Partial<DataParams<Table>>
}

export default abstract class BaseQueryBuilder<Table extends keyof DB>
  implements QueryBuilder<BaseParams<Table>, Query<Table>>
{
  constructor(public readonly db: kysley.Kysely<DB>) { }

  public abstract tableName: Table

  public select(params: SelectParams<Table>) {
    let query = this.db.selectFrom(this.tableName) as SelectQuery<Table>
    query = this.orderByClause(params, query)
    query = this.selectClause(params, query)
    query = this.whereClause(params, query)
    return query
  }

  public delete(params: DeleteParams<Table>) {
    let query = this.db.deleteFrom(this.tableName) as DeleteQuery<Table>
    query = this.whereClause(params, query)
    return query
  }

  public update(params: UpdateParams<Table>) {
    let query = this.db.updateTable(this.tableName) as UpdateQuery<Table>
    query = this.setClause(params, query)
    query = this.whereClause(params, query)
    return query
  }

  public insert(params: InsertParams<Table>) {
    let query = this.db.insertInto(this.tableName) as InsertQuery<Table>
    query = this.valuesClause(params, query)
    return query
  }

  public selectClause(params: BaseParams<Table>, query: SelectQuery<Table>) {
    const values = params.select
    if (!values) return query

    return query.select(values as any)
  }

  public orderByClause(params: BaseParams<Table>, query: SelectQuery<Table>) {
    const orderBy = params.orderBy
    if (!orderBy) return query

    const attributes = Object.keys(orderBy) as Array<keyof BaseParams<Table>["orderBy"]>
    for (const attribute of attributes) {
      query = query.orderBy(attribute, orderBy[attribute])
    }
    return query
  }

  public whereClause<Query extends WherableQuery<Table>>(params: BaseParams<Table>, query: Query) {
    const where = params.where
    if (!where) return query

    const attributes = Object.keys(where) as Array<keyof typeof where>
    for (const attribute of attributes) {
      const conditionals = Object.keys(where[attribute] as any) as Array<
        keyof (typeof where)[typeof attribute]
      >
      for (const conditional of conditionals) {
        query = (
          this[conditional as keyof this] as (
            attribute: keyof DB[Table],
            params: BaseParams<Table>,
            query: Query,
          ) => Query
        )(attribute, params, query)
      }
    }

    return query
  }

  public valuesClause(params: BaseParams<Table>, query: InsertQuery<Table>) {
    const values = params.values
    if (!values) return query

    return query.values(values as any)
  }

  public setClause(params: BaseParams<Table>, query: UpdateQuery<Table>) {
    const set = params.set
    if (!set) return query

    return query.set(set as any)
  }

  public eq(
    attribute: kysley.ReferenceExpression<DB, Table>,
    params: BaseParams<Table>,
    query: WherableQuery<Table>,
  ) {
    const value = params.where?.[attribute]?.eq
    if (!value) return query

    return (query as SelectQuery<Table>).where(attribute, "=", value) as WherableQuery<Table>
  }

  public in(
    attribute: kysley.ReferenceExpression<DB, Table>,
    params: BaseParams<Table>,
    query: WherableQuery<Table>,
  ) {
    const value = params.where?.[attribute]?.in
    if (!value) return query

    return (query as SelectQuery<Table>).where(attribute, "in", value) as WherableQuery<Table>
  }
}

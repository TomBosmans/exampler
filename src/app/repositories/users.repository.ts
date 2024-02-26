import Logger from "@lib/core/logger"
import User from "@app/models/user.model"
import UsersQueryBuilder from "@app/query-builders/users.query-builder"
import { Database } from "@db"
import { InferResult, CompiledQuery } from "kysely"
import {
  SelectParams,
  SelectReturn,
  WhereParams,
} from "@lib/kysley-query-builder/base.query-builder"
import * as types from "@types"

type Params = {
  where?: types.KeysToCamelCase<WhereParams<"users">>
}

export default class UsersRepository {
  constructor(
    private readonly usersQueryBuilder: UsersQueryBuilder,
    private readonly db: Database,
    private readonly logger: Logger,
  ) { }

  public async findOne(params: Params, db: Database = this.db) {
    const query = this.usersQueryBuilder.select(params).selectAll().compile()
    const [data] = await this.execute(query, db)
    if (!data) return null

    const user = this.mapToModel(data)
    return user
  }

  public async findOneOrThrow(params: SelectParams<"users">) {
    const user = await this.findOne(params)
    if (user) return user
    throw new Error("not found")
  }

  public async findMany() {
    const query = this.usersQueryBuilder.select({})
    const data = await query.selectAll().execute()
    return data.map(this.mapToModel)
  }

  public async create() {
    const query = this.usersQueryBuilder.insert({})
    const data = await query.returningAll().execute()
    return data.map(this.mapToModel)
  }

  public async update() {
    const query = this.usersQueryBuilder.update({})
    const data = await query.returningAll().execute()
    return data.map(this.mapToModel)
  }

  public async delete() {
    const query = this.usersQueryBuilder.delete({})
    const data = await query.returningAll().execute()
    return data.map(this.mapToModel)
  }

  private async execute<Query extends CompiledQuery>(query: Query, db: Database) {
    this.logger.sql(query.sql, query.parameters)
    const users = await db.executeQuery(query)
    return users as unknown as InferResult<typeof query>
  }

  private mapToModel(user: SelectReturn<"users">) {
    return new User({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      password: user.password,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
    })
  }
}

const repo = new UsersRepository({} as any, {} as any, {} as any)
repo.findOne({
  where: {
    lastName: { eq: "users" },
  },
})

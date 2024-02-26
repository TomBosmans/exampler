import { EditUser, NewUser, User } from "@app/schemas/user.schemas"
import { DB } from "kysely-codegen"

export type QueryObject<Entity> = {
  where: Partial<Entity>
}

type FindOne<Entity> = { queryObject: QueryObject<Entity> }

export default interface Repository<Entity, NewEntity, EditEntity> {
  findOne: (queryObject: QueryObject<Entity>) => Promise<Entity> | Entity | null
  findOneOrThrow: (QueryObject: QueryObject<Entity>) => Promise<Entity> | Entity
  findMany: (queryObject: QueryObject<Entity>) => Entity[]
  create: (data: NewEntity) => Promise<Entity> | Entity
  update: (data: EditEntity, queryObject: QueryObject<Entity>) => Promise<Entity> | Entity
  // update(value: unknown): void
  // delete(value: unknown): void
  // count(value: unknown): void
}

export class BaseRepository implements Repository<User, NewUser, EditUser> {
  constructor(private readonly db: DB) {}

  public findOne(queryObject: QueryObject<User>) {
    console.log(queryObject)
    return {} as unknown as User
  }

  public findOneOrThrow(queryObject: QueryObject<User>) {
    const user = this.findOne(queryObject)
    if (user) return user
    throw "not found"
  }

  public findMany(queryObject: QueryObject<User>) {
    console.log(queryObject)
    return [] as unknown as User[]
  }

  public create(data: NewUser) {
    return { ...data } as User
  }

  public update(data: EditUser, queryObject: QueryObject<User>) {
    return { ...data } as User
  }
}

const userRepository = new BaseRepository()

userRepository.findOne({
  where: {
    password: "123",
  },
})

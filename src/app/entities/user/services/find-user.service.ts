import { Database } from "@db"
import isPresent from "@utils/conditionals/is-present"
import { selectUserSchema } from "../schemas"

type Data = {
  id?: string
  email?: string
}

export type FindUser = ReturnType<typeof findUser>
export default function findUser(db: Database) {
  return async ({ id, email }: Data, transaction: Database = db) => {
    const queryObject = transaction.selectFrom("users")
    if (isPresent(id)) queryObject.where("id", "=", id)
    if (isPresent(email)) queryObject.where("email", "=", email)

    return selectUserSchema.parse(queryObject.executeTakeFirst())
  }
}

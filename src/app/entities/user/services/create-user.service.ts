import { HashPassword } from "@app/services/hash-password.service"
import { Database } from "@db"
import { NewUser } from "../types"
import { insertUserSchema } from "../schemas"

export type CreateUser = ReturnType<typeof createUser>
export default function createUser(hashPassword: HashPassword, db: Database) {
  return async (data: NewUser, transaction: Database = db) => {
    const { password, email, firstName, lastName } = data
    const hashedPassword = await hashPassword(password)

    const user = await transaction
      .insertInto("users")
      .values(insertUserSchema.parse({
        firstName,
        lastName,
        email,
        password: hashedPassword
      }))
      .returningAll()
      .executeTakeFirst()

    return user
  }
}

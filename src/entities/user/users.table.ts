import { pgTable, uuid, varchar } from "../../db"

const usersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  email: varchar("email").notNull(),
  password: varchar("password").notNull(),
})

export default usersTable

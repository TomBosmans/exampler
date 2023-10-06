import { z } from "zod"
import { insertUserSchema, selectUserSchema, updateUserSchema } from "./schemas"

export type User = z.output<typeof selectUserSchema>
export type EditUser = z.input<typeof updateUserSchema>
export type NewUser = z.input<typeof insertUserSchema>

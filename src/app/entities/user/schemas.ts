import { transformKeysToCamel, transformKeysToSnake } from "@utils/transform-keys"
import { z } from "zod"

export const selectUserSchema = z
  .object({
    id: z.string().uuid(),
    email: z.string().email(),
    first_name: z.string(),
    last_name: z.string(),
    password: z.string(),
  })
  .transform(transformKeysToCamel)

export const updateUserSchema = z
  .object({
    email: z.string().email().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z.string().optional(),
  })
  .transform(transformKeysToSnake)

export const insertUserSchema = z
  .object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string(),
  })
  .transform(transformKeysToSnake)

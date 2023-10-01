import { RegisterData } from "../core/container"

export type RegisterItem = {
  type: RegisterData["type"]
  registration: unknown
}

export type Registry = Record<string, RegisterItem>

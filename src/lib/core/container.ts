import { ClassType, FunctionType } from "../types"

export type RegisterData = {
  name: string
  type?: "value" | "function" | "class"
}

export default interface Container {
  register<Registration>(
    registration: Registration,
    { name, type }: RegisterData,
  ): void
  resolve<T>(name: RegisterData["name"]): T
  build<T>(registration: ClassType<T> | FunctionType<T> | T): T
  createScope(): Container
  dispose(): void
  loadModules(modules: string[] | RegExp[], directory: string): void
  registrations(pattern?: RegExp): string[]
}

import Container, { RegisterData } from "../core/container"
import findFilesMatchingPattern from "./utils/find-files-matching-pattern"
import typeOf from "./utils/type-of"
import { ClassType, FunctionType } from "../types"
import { Registry } from "./types"

export default class BasicContainer implements Container {
  private registry: Registry = {}

  constructor(registry: Registry = {}) {
    this.registry = registry
  }

  public register<T>(registration: T, { name, type = "class" }: RegisterData) {
    this.registry[name] = {
      type,
      registration,
    }
  }

  public resolve<T>(name: string): T {
    const match = this.registry[name]
    if (!match) throw new Error(`Dependency not found: ${name}`)
    const { type, registration } = match

    if (type === "class") {
      const dependencies = this.resolveDependencies(registration, type)
      const classRegistration = registration as ClassType<T>
      return new classRegistration(...dependencies)
    }
    if (type === "function") {
      const dependencies = this.resolveDependencies(registration, type)
      const functionRegistration = registration as FunctionType<T>
      return functionRegistration(...dependencies)
    }
    return registration as T
  }

  public build<T>(resolver: ClassType<T> | FunctionType<T>) {
    const type = typeOf(resolver)
    const dependencies = this.resolveDependencies(resolver, type)

    if (type === "function") {
      const functionResolver = resolver as FunctionType<T>
      return functionResolver(...dependencies)
    } else if (type === "class") {
      const classResolver = resolver as ClassType<T>
      return new classResolver(...dependencies)
    } else {
      return resolver as T
    }
  }

  public createScope() {
    const copyRegistry = { ...this.registry }
    return new BasicContainer(copyRegistry)
  }

  public dispose() { }

  public loadModules(modules: RegExp[], directory: string) {
    const files = modules.reduce<string[]>((result, module) => {
      const files = findFilesMatchingPattern(directory, module)
      return [...result, ...files]
    }, [])

    for (const file of files) {
      const fileContent = require(file)
      const registration = fileContent.default
      const name = registration.name
      const type = typeOf(registration)
      this.register(registration, { name, type })
    }
  }

  public registrations(pattern?: RegExp) {
    if (!pattern) return Object.keys(this.registry)
    return Object.keys(this.registry).filter((name) => pattern.test(name))
  }

  private resolveDependencies(
    constructor: any,
    type: "class" | "function" | "value",
  ) {
    if (type === "value") return []

    const parameterNames =
      type === "function"
        ? this.getFunctionParameterNames(constructor)
        : this.getConstructorParameterNames(constructor)

    return parameterNames.map((paramName) => this.resolve(paramName))
  }

  private getFunctionParameterNames(func: Function) {
    const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm
    const ARGUMENT_NAMES = /([^\s,]+)/g
    const fnStr = func.toString().replace(STRIP_COMMENTS, "")
    const result = fnStr
      .slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")"))
      .match(ARGUMENT_NAMES)
    return result || []
  }

  private getConstructorParameterNames<T>(
    constructor: new (...args: any[]) => T,
  ): string[] {
    const constructorStr = constructor.toString()
    const constructorMatch = constructorStr.match(/constructor\s*\(([^)]+)/)
    if (constructorMatch) {
      const parameters = constructorMatch[1].split(",").map((param) => param.trim())
      return parameters
    } else {
      return []
    }
  }
}

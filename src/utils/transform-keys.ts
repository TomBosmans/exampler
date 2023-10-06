import toCamelCase from "./to-camel-case"
import { toSnakeCase } from "kysely-codegen"
import { KeysToCamelCase, KeysToSnakeCase } from "./types"

function transform(
  object: Record<string, unknown>,
  transformer: (string: string) => string,
) {
  return Array.from(Object.entries(object)).reduce(
    (obj, [key, value]) => {
      obj[transformer(key)] = value
      return obj
    },
    {} as Record<string, unknown>,
  )
}

export function transformKeysToCamel<T extends Record<string, unknown>>(
  object: T,
) {
  return transform(object, toCamelCase) as KeysToCamelCase<T>
}

export function transformKeysToSnake<T extends Record<string, unknown>>(
  object: T,
) {
  return transform(object, toSnakeCase) as KeysToSnakeCase<T>
}

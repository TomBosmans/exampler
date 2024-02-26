import { describe, expect, it } from "bun:test"
import toCamelCase from "./to-snake-case"

describe("toSnakeCase", () => {
  it.each([
    ["", ""],
    ["camelCase", "camel_case"],
    ["first_name", "first_name"],
    ["password", "password"],
    ["last name", "last_name"],
    ["kebab-case", "kebab_case"],
    ["hello_world-this-isA test", "hello_world_this_is_a_test"],
  ])("transforms %s into %s", (value, expected) => {
    expect(toCamelCase(value)).toEqual(expected)
  })
})

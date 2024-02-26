import { describe, expect, it } from "bun:test"
import toCamelCase from "./to-camel-case"

describe("toCamelCase", () => {
  it.each([
    ["", ""],
    ["camelCase", "camelCase"],
    ["first_name", "firstName"],
    ["password", "password"],
    ["last name", "lastName"],
    ["kebab-case", "kebabCase"],
    ["hello_world-this-isA test", "helloWorldThisIsATest"],
  ])("transforms %s into %s", (value, expected) => {
    expect(toCamelCase(value)).toEqual(expected)
  })
})

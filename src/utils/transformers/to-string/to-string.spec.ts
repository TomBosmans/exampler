import { describe, expect, it } from "bun:test"
import toString from "./to-string"

const date = new Date()
const symbol = Symbol("hello world")

describe("toString", () => {
  it.each([
    ["number", 10, "10"],
    ["date", date, date.toISOString()],
    ["boolean false", false, "false"],
    ["boolean true", true, "true"],
    ["symbol", symbol, "Symbol(hello world)"],
  ])("transforms %s into string", (_, value, expected) => {
    expect(toString(value)).toEqual(expected)
  })

  it("keeps null as null", () => expect(toString(null)).toEqual(null))
  it("keeps undefined as undefined", () => expect(toString(undefined)).toEqual(undefined))
})

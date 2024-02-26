import { describe, expect, it } from "bun:test"
import { SpecTable } from "../types"
import isSymbol from "./is-symbol"

describe("isSymbol", () => {
  it.each<SpecTable>([
    [false, "array", [1, 2, 3]],
    [false, "boolean false", false],
    [false, "boolean true", true],
    [false, "date", new Date()],
    [false, "empty array", []],
    [false, "empty object", {}],
    [false, "empty string", ""],
    [true, "empty symbol", Symbol()],
    [false, "negative number", -10],
    [false, "null", null],
    [false, "number 0", 0],
    [false, "object", { hello: "world" }],
    [false, "positive number", 10],
    [false, "string", "hello world"],
    [true, "symbol", Symbol("hello world")],
    [false, "undefined", undefined],
  ])("returns %s when value is %s", (expected, _, value) => {
    expect(isSymbol(value)).toBe(expected)
  })
})

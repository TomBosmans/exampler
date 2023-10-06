import isString from "./is-string"
import { SpecTable } from "../types"
import { describe, expect, it } from "bun:test"

describe("isString", () => {
  it.each<SpecTable>([
    [false, "array", [1, 2, 3]],
    [false, "boolean false", false],
    [false, "boolean true", true],
    [false, "date", new Date()],
    [false, "empty array", []],
    [false, "empty object", {}],
    [true, "empty string", ""],
    [false, "empty symbol", Symbol()],
    [false, "negative number", -10],
    [false, "null", null],
    [false, "number 0", 0],
    [false, "object", { hello: "world" }],
    [false, "positive number", 10],
    [true, "string", "hello world"],
    [false, "symbol", Symbol("hello world")],
    [false, "undefined", undefined],
  ])("returns %s when value is %s", (expected, _, value) => {
    expect(isString(value)).toBe(expected)
  })
})

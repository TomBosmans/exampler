import isPresent from "./is-present"
import { SpecTable } from "../types"
import { describe, expect, it } from "bun:test"

describe("isPresent", () => {
  it.each<SpecTable>([
    [true, "array", [1, 2, 3]],
    [true, "boolean false", false],
    [true, "boolean true", true],
    [true, "date", new Date()],
    [true, "empty array", []],
    [true, "empty object", {}],
    [true, "empty string", ""],
    [true, "empty symbol", Symbol()],
    [true, "negative number", -10],
    [false, "null", null],
    [true, "number 0", 0],
    [true, "object", { hello: "world" }],
    [true, "positive number", 10],
    [true, "string", "hello world"],
    [true, "symbol", Symbol("hello world")],
    [false, "undefined", undefined],
  ])("returns %s when value is %s", (expected, _, value) => {
    expect(isPresent(value)).toBe(expected)
  })
})

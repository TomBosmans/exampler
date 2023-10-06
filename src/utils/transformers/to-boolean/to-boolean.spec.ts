import toBoolean from "./to-boolean"
import { describe, expect, it } from "bun:test"

describe("toBoolean", () => {
  it.each([
    ["boolean false", false, false],
    ["boolean true", true, true],
    ["string", "random", false],
    ["string", "true", true],
    ["string", "True", true],
    ["string", "TRUE", true],
    ["string", "tRue", true],
    ["string", "false", false],
    ["number", 0, false],
    ["number", 1, true],
    ["number", 69, false],
    ["date", new Date(), false],
    ["object", { hello: true }, false],
    ["empty string", "", false],
  ])("transforms %s into boolean", (_, value, expected) => {
    expect(toBoolean(value)).toEqual(expected)
  })

  it("keeps null as null", () => expect(toBoolean(null)).toEqual(null))
  it("keeps undefined as undefined", () => expect(toBoolean(undefined)).toEqual(undefined))
})

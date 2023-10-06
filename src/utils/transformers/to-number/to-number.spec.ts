import toNumber from "./to-number"
import { describe, expect, it } from "bun:test"

const date = new Date()

describe("toString", () => {
  it.each([
    ["boolean false", false, 0],
    ["boolean true", true, 1],
    ["string", "23", 23],
    ["date", date, Number(date)],
  ])("transforms %s into string", (_, value, expected) => {
    expect(toNumber(value)).toEqual(expected)
  })

  it("keeps null as null", () => expect(toNumber(null)).toEqual(null))
  it("keeps undefined as undefined", () =>
    expect(toNumber(undefined)).toEqual(undefined))
})

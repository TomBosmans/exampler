import { describe, expect, it } from "bun:test"
import toDate from "./to-date"

describe("toDate", () => {
  it.each([["2020-03-02"], ["2020-03-02T23:00"]])("transforms %s into Date", (value) => {
    expect(toDate(value)).toEqual(new Date(value))
  })

  it("keeps null as null", () => expect(toDate(null)).toEqual(null))
  it("keeps undefined as undefined", () => expect(toDate(undefined)).toEqual(undefined))
})

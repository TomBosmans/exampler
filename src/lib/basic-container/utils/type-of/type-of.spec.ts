import { describe, expect, it } from "bun:test"
import typeOf from "./type-of"

describe("typeOf", () => {
  it("can check if something is a class", () => {
    const myClass = class MyClass {}
    expect(typeOf(myClass)).toEqual("class")
  })

  it("can check if something is a function with arraw function", () => {
    const myFunction = () => null
    expect(typeOf(myFunction)).toEqual("function")
  })

  it("can check if something is a function with classic function", () => {
    function myFunction() {}
    expect(typeOf(myFunction)).toEqual("function")
  })

  it("can check if something is a value", () => {
    const myValue = { hello: "world" }
    expect(typeOf(myValue)).toEqual("value")
  })
})

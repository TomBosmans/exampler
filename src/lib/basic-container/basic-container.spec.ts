import { beforeEach, describe, expect, it } from "bun:test"
import BasicContainer from "./basic-container"
import Container from "../core/container"

describe("BasicContainer", () => {
  let container: Container

  beforeEach(() => {
    container = new BasicContainer()
  })

  describe(".registrations", () => {
    it("returns all registrations when no regexp given", () => {
      container.register("hello world", { name: "helloWorld", type: "value" })
      container.register("bye world", { name: "byeWorld", type: "function" })
      const result = container.registrations()
      expect(result).toHaveLength(2)
      expect(result).toContain("helloWorld")
      expect(result).toContain("byeWorld")
    })

    it("returns registrations matching the regexp given", () => {
      container.register("hello world", { name: "helloWorld", type: "value" })
      container.register("bye world", { name: "byeWorld", type: "function" })
      const result = container.registrations(/bye/)
      expect(result).toHaveLength(1)
      expect(result).toContain("byeWorld")
    })
  })

  describe(".createScope", () => {
    it("returns a new container", () => {
      container.register("hello world", { name: "helloWorld", type: "value" })
      const scope = container.createScope()
      expect(scope).toBeInstanceOf(BasicContainer)
    })

    it("can resolve dependencies from parent container", () => {
      container.register("hello world", { name: "helloWorld", type: "value" })
      const scope = container.createScope()
      const result = scope.resolve("helloWorld")
      expect(result).toEqual("hello world")
    })

    it("can add new depencenies, that the parent has no access to", () => {
      container.register("hello world", { name: "helloWorld", type: "value" })
      const scope = container.createScope()
      scope.register("bye world", { name: "byeWorld", type: "value" })
      expect(scope.resolve("byeWorld")).toEqual("bye world")
      try {
        container.resolve("byeWorld")
        expect(false).toBeTruthy()
      } catch (e) {
        expect(e).toBeDefined()
      }
    })
  })

  it("can register and resolve a class", () => {
    const myClass = class MyClass {}
    container.register(myClass, { name: "myClass", type: "class" })
    const result = container.resolve("myClass")
    expect(result).toBeDefined()
  })

  it("can register and resolve a function", () => {
    function myFunction() {
      return "hello world"
    }

    container.register(myFunction, { name: "myFunction", type: "function" })
    const result = container.resolve("myFunction")
    expect(result).toBeDefined()
  })

  it("can register and resolve an arrow function", () => {
    const myFunction = () => "hello world"

    container.register(myFunction, { name: "myFunction", type: "function" })
    const result = container.resolve("myFunction")
    expect(result).toBeDefined()
  })

  it("can register and resolve a value", () => {
    const myValue = "hello world"

    container.register(myValue, { name: "myValue", type: "value" })
    const result = container.resolve("myValue")
    expect(result).toBeDefined()
  })
  describe("for a class with dependencies", () => {
    it("can resolve", () => {
      const myValue = "hello world"
      const myFunction = (myValue: string) => myValue
      function mySecondFunction(myFunction: string) {
        return myFunction
      }
      class MyClass {
        constructor(
          public myFunction: string,
          public mySecondFunction: string,
          public myValue: string,
        ) {}
      }

      container.register(myFunction, { type: "function", name: "myFunction" })
      container.register(mySecondFunction, {
        type: "function",
        name: "mySecondFunction",
      })
      container.register(myValue, { type: "value", name: "myValue" })
      container.register(MyClass, { type: "class", name: "myClass" })

      const result = container.resolve<MyClass>("myClass")
      expect(result.mySecondFunction).toEqual(myValue)
      expect(result.myFunction).toEqual(myValue)
      expect(result.myValue).toEqual(myValue)
    })

    it("can build", () => {
      const myValue = "hello world"
      const myFunction = (myValue: string) => myValue
      function mySecondFunction(myFunction: string) {
        return myFunction
      }
      class MyClass {
        constructor(
          public myFunction: string,
          public mySecondFunction: string,
          public myValue: string,
        ) {}
      }

      container.register(myFunction, { type: "function", name: "myFunction" })
      container.register(mySecondFunction, {
        type: "function",
        name: "mySecondFunction",
      })
      container.register(myValue, { type: "value", name: "myValue" })

      const result = container.build(MyClass)
      expect(result.mySecondFunction).toEqual(myValue)
      expect(result.myFunction).toEqual(myValue)
      expect(result.myValue).toEqual(myValue)
    })
  })

  describe("for a function with dependencies", () => {
    it("can build", () => {
      const myValue = "hello world"
      const myFunction = (myClass: MyClass) => myClass.myValue
      function mySecondFunction(myFunction: string, myClass: MyClass) {
        return myFunction === myClass.myValue
      }
      class MyClass {
        constructor(public myValue: string) {}
      }

      container.register(myFunction, { type: "function", name: "myFunction" })
      container.register(myValue, { type: "value", name: "myValue" })
      container.register(MyClass, { type: "class", name: "myClass" })

      const result = container.build(mySecondFunction)
      expect(result).toBeTruthy()
    })

    it("can resolve", () => {
      const myValue = "hello world"
      const myFunction = (myClass: MyClass) => myClass.myValue
      function mySecondFunction(myFunction: string, myClass: MyClass) {
        return myFunction === myClass.myValue
      }
      class MyClass {
        constructor(public myValue: string) {}
      }

      container.register(myFunction, { type: "function", name: "myFunction" })
      container.register(mySecondFunction, {
        type: "function",
        name: "mySecondFunction",
      })
      container.register(myValue, { type: "value", name: "myValue" })
      container.register(MyClass, { type: "class", name: "myClass" })

      const result =
        container.resolve<ReturnType<typeof mySecondFunction>>(
          "mySecondFunction",
        )
      expect(result).toBeTruthy()
    })
  })
})

import { expect, describe, it } from "bun:test"
import BasicRouter from "./basic-router"
import Route from "@core/route"

describe("BasicRouter", () => {
  const router = new BasicRouter()
  router.register(
    new Route({
      path: "/users",
      method: "GET",
      handler: () => new Response("get"),
    }),
  )

  router.register(
    new Route({
      path: "/users/:id/edit",
      method: "GET",
      handler: () => new Response("get edit"),
    }),
  )

  router.register(
    new Route({
      path: "/users/:id",
      method: "GET",
      handler: () => new Response("get id"),
    }),
  )

  router.register(
    new Route({
      path: "/users/new",
      method: "GET",
      handler: () => new Response("get new"),
    }),
  )

  router.register(
    new Route({
      path: "/users",
      method: "POST",
      handler: () => new Response("post"),
    }),
  )

  router.register(
    new Route({
      path: "/users/:id",
      method: "PATCH",
      handler: () => new Response("patch"),
    }),
  )

  router.register(
    new Route({
      path: "/users/:id",
      method: "DELETE",
      handler: () => new Response("delete"),
    }),
  )

  it("returns the index route", () => {
    const request = new Request("http://localhost:3000/users", {
      method: "GET",
    })
    const { route, params } = router.match(request)
    expect(route).toMatchObject({ path: "/users", method: "GET" })
    expect(params).toEqual({})
  })

  it("returns the show route", () => {
    const request = new Request("http://localhost:3000/users/123", {
      method: "GET",
    })
    const { route, params } = router.match(request)
    expect(route).toMatchObject({ path: "/users/:id", method: "GET" })
    expect(params).toEqual({ id: "123" })
  })

  it("returns the edit route", () => {
    const request = new Request("http://localhost:3000/users/123/edit", {
      method: "GET",
    })
    const { route, params } = router.match(request)
    expect(route).toMatchObject({ path: "/users/:id/edit", method: "GET" })
    expect(params).toEqual({ id: "123" })
  })

  it("returns the new route", () => {
    const request = new Request("http://localhost:3000/users/new", {
      method: "GET",
    })
    const { route, params } = router.match(request)
    expect(route).toMatchObject({ path: "/users/new", method: "GET" })
    expect(params).toEqual({})
  })

  it("returns the create route", () => {
    const request = new Request("http://localhost:3000/users", {
      method: "POST",
    })
    const { route, params } = router.match(request)
    expect(route).toMatchObject({ path: "/users", method: "POST" })
    expect(params).toEqual({})
  })

  it("returns the delete route", () => {
    const request = new Request("http://localhost:3000/users/123", {
      method: "DELETE",
    })
    const { route, params } = router.match(request)
    expect(route).toMatchObject({ path: "/users/:id", method: "DELETE" })
    expect(params).toEqual({ id: "123" })
  })

  it("returns the update route", () => {
    const request = new Request("http://localhost:3000/users/123", {
      method: "PATCH",
    })
    const { route, params } = router.match(request)
    expect(route).toMatchObject({ path: "/users/:id", method: "PATCH" })
    expect(params).toEqual({ id: "123" })
  })
})

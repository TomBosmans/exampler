import Route from "@core/route"
import Router from "@core/router"
import parsePath from "@utils/parse-path"
import sortRoutes from "./utils/sort-routes"
import { HttpMethod } from "@constants"

type MatchResponse = {
  route: Route | null
  params: Record<string, string>
}

type RouterParams = {
  routes: Route[]
}

export default class BasicRouter implements Router {
  private routes: RouterParams["routes"]

  constructor(params?: RouterParams) {
    this.routes = sortRoutes(params?.routes || [])
  }

  public register(route: Route) {
    this.routes = sortRoutes([...this.routes, route])
    return this
  }

  public match(request: Request): MatchResponse {
    const url = new URL(request.url)
    const pathName = url.pathname
    const method = request.method as HttpMethod

    for (const route of this.routes) {
      if (route.method === method) {
        const { matched, params } = this.matchPath(route, pathName)
        if (matched) return { route, params }
      }
    }

    return { route: null, params: {} }
  }

  private matchPath(route: Route, pathName: string) {
    const pathSegments = parsePath(pathName)
    const params: Record<string, string> = {}

    const hasLengthMatch = pathSegments.length === route.pathSegments.length
    if (!hasLengthMatch) return { matched: false, params: {} }

    for (const [index, routeSegment] of route.pathSegments.entries()) {
      const requestSegment = pathSegments[index]
      const hasParams = routeSegment.startsWith(":")
      const noMatch = routeSegment !== requestSegment

      if (noMatch && !hasParams) return { matched: false, params: {} }
      if (hasParams) params[routeSegment.slice(1)] = requestSegment
    }

    return { matched: true, params }
  }
}

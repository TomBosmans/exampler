import Handler from "./handler"
import parsePath from "../utils/parse-path"
import { HttpMethod } from "../constants"

type RouteParams = {
  path: string
  method: HttpMethod
  handler: Handler
  context?: Record<string, unknown>
}

export default class Route {
  public path: RouteParams["path"]
  public method: RouteParams["method"]
  public handler: RouteParams["handler"]
  public context: NonNullable<RouteParams["context"]>
  public pathSegments: string[]

  constructor({ path, method, handler, context = {} }: RouteParams) {
    this.path = path
    this.method = method
    this.handler = handler
    this.pathSegments = parsePath(path)
    this.context = context
  }
}

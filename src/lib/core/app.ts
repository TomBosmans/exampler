import Container from "./container"
import Logger from "./logger"
import Route from "./route"

export default interface App {
  container: Container
  logger: Logger

  registerRoute(route: Route): App
  registerStaticFolder(path: string): App
  start(): void
}

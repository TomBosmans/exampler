import BasicContainer from "@lib/basic-container"
import BasicLogger from "@lib/basic-logger"
import BasicRouter from "@lib/basic-router"
import Container from "@lib/core/container"
import Handler from "@lib/core/handler"
import Logger from "@lib/core/logger"
import Route from "@lib/core/route"
import Router from "@lib/core/router"
import { Errorlike, Server } from "bun"

type AppStartParams = {
  port?: number
  development?: boolean
}

const defaultStartParams: AppStartParams = {
  port: 3000,
  development: false,
}

type AppParams = {
  container?: Container
  errorHandler: Handler
  notFoundHandler: Handler
  logger?: Logger
  modules?: RegExp[]
  publicPath?: string
  router?: Router
  srcPath?: string
}

export default class App {
  public container: Container
  public errorHandler: Handler
  public notFoundHandler: Handler
  public logger: Logger
  public publicPath: string
  public router: Router
  public srcPath: string
  public server?: Server

  constructor({
    container = new BasicContainer(),
    errorHandler,
    notFoundHandler,
    logger = new BasicLogger(),
    modules = [
      /\.injectable\.(ts|tsx)$/,
      /\.route\.(ts|tsx)$/,
    ],
    publicPath = "public",
    router = new BasicRouter(),
    srcPath = "",
  }: AppParams) {
    this.container = container
    this.errorHandler = errorHandler
    this.notFoundHandler = notFoundHandler
    this.logger = logger
    this.publicPath = publicPath
    this.router = router
    this.srcPath = srcPath

    this.container.register(logger, { name: "logger", type: "value" })
    this.container.loadModules(modules, this.srcPath)

    const routeNames = this.container.registrations(/Route/)
    for (const routeName of routeNames) {
      const route = this.container.resolve<Route>(routeName)
      this.router.register(route)
      this.logger.info(`${route.method} ${route.path}`)
    }
  }

  public stop() {
    this.server?.stop()
  }

  public async restart() {
    if (!this.server) return

    const port = this.server.port
    const development = this.server.development
    this.stop()
    this.start({ port, development })
  }

  public start(params?: AppStartParams) {
    const { port, development } = {
      ...defaultStartParams,
      ...params,
    }

    this.server = Bun.serve({
      development,
      port,
      fetch: async (request) => {
        const url = new URL(request.url)
        const isPublicUrl = url.pathname.split("/")[1] === this.publicPath
        const response = isPublicUrl
          ? await this.handleStaticFiles(url)
          : await this.handleRoute(request)

        if (response) return response
        return this.handleNotFound(request)
      },
      error: async (error) => await this.handleError(error),
    })
  }

  private async handleError(error: Errorlike) {
    const context = this.container.createScope()
    context.register(error, { name: "error", type: "value" })
    return await context.build(this.errorHandler)
  }

  private async handleRoute(request: Request) {
    const { route, params } = this.router.match(request)
    const context = this.container.createScope()
    if (!route) return null

    context.register(request, { name: "request", type: "value" })
    context.register(params, { name: "params", type: "value" })
    Object.keys(route.context).map((name) =>
      context.register(route.context?.[name], { name, type: "value" }),
    )
    return await context.build(route.handler)
  }

  private async handleStaticFiles(url: URL) {
    const filePath = url.pathname.slice(1)
    const file = Bun.file(filePath)
    if (await file.exists()) return new Response(file)
  }

  private async handleNotFound(request: Request) {
    const context = this.container.createScope()
    context.register(request, { name: "request", type: "value" })
    return await context.build(this.notFoundHandler)
  }
}

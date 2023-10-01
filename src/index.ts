/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { join } from "path"
import App from "./lib/app"
import db from "./db"
import config from "./config"

const app = new App({
  srcPath: join(import.meta.dir),
  publicPath: join("assets"),
  notFoundHandler: () => new Response("not found", { status: 404 }),
  errorHandler: () => new Response("something went wrong", { status: 500 })
})

app.container.register(db, { name: "db", type: "value" })
app.container.register(config, { name: "config", type: "value" })
app.start({ port: config.port, development: config.env === "development" })

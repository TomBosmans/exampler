/// <reference types="@kitajs/html/htmx.d.ts" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference types="../types/web-components.d.ts" />

import "@kitajs/html/register"
import App from "./app"
import config from "../config"
import db from "@db"
import notFoundHandler from "./routes/not-found/not-found.handler"
import { join } from "path"

const app = new App({
  srcPath: join(import.meta.dir),
  publicPath: join("assets"),
  notFoundHandler,
  errorHandler: () => new Response("something went wrong", { status: 500 }),
})

app.container.register(db, { name: "db", type: "value" })
app.container.register(config, { name: "config", type: "value" })
app.start({ port: config.port, development: config.env === "development" })

import BasicContainer from "@lib/basic-container"
import config from "@config"
import db from "@db"
import redis from "@redis"
import Container from "@lib/core/container"

const testContainer = new BasicContainer()
testContainer.register(db, { name: "db", type: "value" })
testContainer.register(redis, { name: "redis", type: "value" })
testContainer.register(config, { name: "config", type: "value" })
export default testContainer as Container

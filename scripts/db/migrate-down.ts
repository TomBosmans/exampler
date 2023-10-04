import db from "../../src/db"
import buildMigrator from "./utils/build-migrator"
import generateTypes from "./utils/generate-types"
import logMigrationResult from "./utils/log-migration-result"

const migrator = buildMigrator(db)
const result = await migrator.migrateDown()
logMigrationResult(result)
generateTypes()
await db.destroy()

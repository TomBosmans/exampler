import db from "@db"
import buildMigrator from "./utils/build-migrator"
import generateDump from "./utils/generate-dump"
import generateTypes from "./utils/generate-types"
import logMigrationResult from "./utils/log-migration-result"

const migrator = buildMigrator(db)
const result = await migrator.migrateToLatest()
logMigrationResult(result)
await generateTypes()
await generateDump()
await db.destroy()

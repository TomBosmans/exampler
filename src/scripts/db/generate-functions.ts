import db from "@db"
import generateFunctions from "./utils/generate-functions"
import generateDump from "./utils/generate-dump"

await generateFunctions(db)
await generateDump()
process.exit(0)

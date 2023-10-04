import { MigrationResultSet } from "kysely"

export default function logMigrationResult({
  results,
  error,
}: MigrationResultSet) {
  results?.forEach((result) => {
    if (result.status === "Success") {
      console.log(
        `migration "${result.migrationName}" was executed successfully`,
      )
    } else if (result.status === "Error") {
      console.error(`failed to execute migration "${result.migrationName}"`)
    }
  })

  if (error) {
    console.error("failed to migrate")
    console.error(error)
    process.exit(1)
  }
}

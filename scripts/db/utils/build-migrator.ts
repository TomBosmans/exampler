import * as path from "path"
import { promises as fs } from "fs"
import { Migrator, FileMigrationProvider, Kysely } from "kysely"

export default function buildMigrator(db: Kysely<any>) {
  return new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder: path.join(__dirname, "../../../migrations"),
    }),
  })
}

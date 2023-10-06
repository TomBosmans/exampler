import * as path from "path"
import dbFolder from "../constants/db-folder"
import { Migrator, FileMigrationProvider, Kysely } from "kysely"
import { promises as fs } from "fs"

export default function buildMigrator(db: Kysely<any>) {
  return new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder: `${dbFolder}/migrations`,
    }),
  })
}

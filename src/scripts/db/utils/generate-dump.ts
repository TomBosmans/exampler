import config from "@config"
import dbFolder from "../constants/db-folder"
import exec from "@utils/exec"

export default async function generateDump() {
  await exec(`
    pg_dump -U ${config.database.user}\
            -h ${config.database.host}\
            -p ${config.database.port}\
            ${config.database.url} --no-owner --schema-only -U postgres > ${dbFolder}/structure.sql
  `)

  await exec(`
    pg_dump -U ${config.database.user}\
            -h ${config.database.host}\
            -p ${config.database.port}\
            ${config.database.url} --no-owner -t kysely_migration -t kysely_migration_lock --data-only > ${dbFolder}/data.sql
  `)
}

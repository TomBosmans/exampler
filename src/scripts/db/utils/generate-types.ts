import config from "@config"
import exec from "@utils/exec"

export default async function generateTypes() {
  await exec(`DATABASE_URL=${config.database.url} kysely-codegen`)
}

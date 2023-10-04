import { exec } from "child_process"
import config from "../../../src/config"

export default function generateTypes() {
  exec(
    `DATABASE_URL=${config.database.url} kysely-codegen`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`)
        return
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`)
        return
      }
      console.log(`Output: ${stdout}`)
    },
  )
}

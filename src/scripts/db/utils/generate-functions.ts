import dbFolder from "../constants/db-folder"
import { Kysely } from "kysely"
import { readdir } from "fs/promises"

export default async function generateFunctions(db: Kysely<any>) {
  const functionsFolder = `${dbFolder}/functions`
  const files = await readdir(functionsFolder)

  return await db.transaction().execute(async (trx) => {
    for (const file of files) {
      const module = await import(`${functionsFolder}/${file}`)
      await module.default().execute(trx)
      console.info(module.default().compile(trx).sql)
    }
  })
}

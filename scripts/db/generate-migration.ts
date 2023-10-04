import * as path from "path"
import fs from "fs"

const TEMPLATE = `import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
}

export async function down(db: Kysely<any>): Promise<void> {
}
`

const nameIndex = process.argv.indexOf("--name")
const name = process.argv[nameIndex + 1]

const migrationFolder = path.join(__dirname, "../../migrations")

const dateStr = new Date().toISOString().replace(/[-:]/g, "").split(".")[0]
const fileName = `${migrationFolder}/${dateStr}-${name}.ts`
const mkdir = () => fs.mkdirSync(migrationFolder)
try {
  if (!fs.lstatSync(migrationFolder).isDirectory()) {
    mkdir()
  }
} catch {
  fs.mkdirSync(migrationFolder)
}

fs.writeFileSync(fileName, TEMPLATE, "utf8")
console.log("Created Migration:", fileName)

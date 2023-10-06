import * as path from "path"
import fs from "fs"
import dbFolder from "./constants/db-folder"

const templateFolder = path.join(__dirname, "./templates")
const templateFile = Bun.file(`${templateFolder}/migration.template.ts`)
const nameIndex = process.argv.indexOf("--name")
const name = process.argv[nameIndex + 1]
const migrationFolder = `${dbFolder}/migrations`
const dateStr = new Date().toISOString().replace(/[-:]/g, "").split(".")[0]
const fileName = `${migrationFolder}/${dateStr}-${name}.ts`
const mkdir = () => fs.mkdirSync(migrationFolder)

try {
  if (!fs.lstatSync(migrationFolder).isDirectory()) mkdir()
} catch {
  fs.mkdirSync(migrationFolder)
}

Bun.write(fileName, templateFile)
console.info("Created Migration:", fileName)

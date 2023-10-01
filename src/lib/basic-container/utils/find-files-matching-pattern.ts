import fs from "fs"
import path from "path"

export default function findFilesMatchingPattern(
  directory: string,
  pattern: RegExp,
): string[] {
  const files = fs.readdirSync(directory)

  return files.reduce<string[]>((fileList, file) => {
    const filePath = path.join(directory, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      return [...fileList, ...findFilesMatchingPattern(filePath, pattern)]
    } else if (stats.isFile() && pattern.test(file)) {
      return [...fileList, filePath]
    }

    return fileList
  }, [])
}

import util from "util"
import child_process from "child_process"

export default async function exec(command: string): Promise<void> {
  const exec = util.promisify(child_process.exec)
  const { stdout, stderr } = await exec(command)

  if (stdout) console.info(stdout)
  if (stderr) console.info(stderr)
}

export default function parsePath(path: string) {
  return path.split("/").filter((segment) => segment !== "")
}

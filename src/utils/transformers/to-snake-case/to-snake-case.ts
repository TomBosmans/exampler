export default function toSnakeCase(input: string): string {
  return input
    .replace(/[\s]/g, "_")
    .replace(/([a-z])-([a-z])/g, "$1_$2")
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .toLowerCase()
}

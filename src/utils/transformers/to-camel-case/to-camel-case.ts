export default function toCamelCase(input: string) {
  return input.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
}

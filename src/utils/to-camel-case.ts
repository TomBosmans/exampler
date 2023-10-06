export default function toCamelCase(input: string): string {
  const words = input.split(/[\s_]+/)
  if (words.length === 0) return ""

  const camelCasedWords = words.map((word, index) => {
    if (index === 0) return word.toLowerCase()
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })

  return camelCasedWords.join("")
}

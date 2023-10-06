export default function cssClasses(array: Array<string | undefined | boolean>) {
  return array.filter(x => x).join(" ")
}

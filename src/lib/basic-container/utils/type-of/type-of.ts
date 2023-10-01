export default function typeOf(
  unknown: unknown,
): "function" | "value" | "class" {
  if (
    typeof unknown === "function" &&
    unknown.toString().startsWith("class ")
  ) {
    return "class"
  } else if (typeof unknown === "function") {
    return "function"
  } else {
    return "value"
  }
}

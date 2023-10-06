/**
 * Checks if the given value is a string.
 * @param value The value to be checked.
 * @returns Returns `true` if the given value is a string, `false` otherwise.
 * @example
 *
 * isString('hello world'); // true
 * isString(123); // false
 */
export default function isString(value: unknown): value is string {
  return typeof value === "string"
}

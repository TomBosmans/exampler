/**
 * Checks if the given value is a boolean.
 * @param value The value to be checked.
 * @returns Returns `true` if the given value is a boolean, `false` otherwise.
 * @example
 * isBoolean(true); // true
 * isBoolean(false); // true
 * isBoolean('hello world'); // false
 */
export default function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean"
}

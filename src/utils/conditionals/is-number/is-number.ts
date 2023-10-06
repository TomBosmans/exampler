/**
 * Checks if the given value is a number.
 * @param value The value to be checked.
 * @returns Returns `true` if the given value is a number, `false` otherwise.
 * @example
 * isNumber(123); // true
 * isNumber('hello world'); // false
 */
export default function isNumber(value: unknown): value is number {
  return typeof value === "number"
}

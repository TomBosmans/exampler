/**
 * Checks if the given value is null.
 * @param value The value to be checked.
 * @returns Returns `true` if the given value is null, `false` otherwise.
 * @example
 * isNull(null); // true
 * isNull(undefined); // false
 * isNull('hello world'); // false
 */
export default function isNull(value: unknown): value is null {
  return value === null
}

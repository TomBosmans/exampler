/**
 * Checks if the given value is undefined.
 * @param value The value to be checked.
 * @returns Returns `true` if the given value is undefined, `false` otherwise.
 * @example
 * isUndefined(undefined); // true
 * isUndefined(null); // false
 */
export default function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

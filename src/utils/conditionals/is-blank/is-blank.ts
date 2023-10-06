import isNull from "../is-null"
import isUndefined from "../is-undefined"

/**
 * Checks if the given value is `null` or `undefined`.
 * @param value The value to be checked.
 * @returns Returns `true` if the given value is `null` or `undefined`, `false` otherwise.
 * @example
 * isBlank(null); // true
 * isBlank(undefined); // true
 * isBlank('hello world'); // false
 */
export default function isBlank<V>(value: V | null | undefined): value is null | undefined {
  if (isNull(value)) return true
  if (isUndefined(value)) return true

  return false
}

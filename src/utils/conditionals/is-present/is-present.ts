import isNull from "../is-null"
import isUndefined from "../is-undefined"

/**
 * Checks if the given value is not `null` and not `undefined`.
 * @param value The value to be checked.
 * @returns Returns `true` if the given value is not `null` and not `undefined`, `false` otherwise.
 * @example
 * isPresent(null); // false
 * isPresent(undefined); // false
 * isPresent('hello world'); // true
 */
export default function isPresent<V>(value: V | null | undefined): value is V {
  if (isNull(value)) return false
  if (isUndefined(value)) return false

  return true
}

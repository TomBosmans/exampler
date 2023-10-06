/**
 * Checks if the given value is a Date object.
 * @param value The value to be checked.
 * @returns Returns `true` if the given value is a Date object, `false` otherwise.
 * @example
 * isDate(new Date()); // true
 * isDate('2022-04-16'); // false
 */
export default function isDate(value: unknown): value is Date {
  return Object.prototype.toString.call(value) === "[object Date]"
}

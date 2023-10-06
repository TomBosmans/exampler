import isBlank from "@utils/conditionals/is-blank"
import isBoolean from "@utils/conditionals/is-boolean"
import isDate from "@utils/conditionals/is-date"
import isString from "@utils/conditionals/is-string"

/**
 * Converts a string, Date object, or boolean to a number.
 * @param value The value to be converted to a number.
 * @returns Returns a number if the input value is a string, Date object, or boolean, otherwise returns null or undefined.
 * @throws Throws an error if the input value is not a string, Date object, boolean, null, or undefined.
 * @example
 *
 * toNumber('123'); // 123
 * toNumber(new Date('2022-01-01T00:00:00.000Z')); // 1640995200000
 * toNumber(true); // 1
 * toNumber(null); // null
 * toNumber(undefined); // undefined
 * toNumber({}); // Error: can't be cast to number
 */
export default function toNumber(value: unknown) {
  if (isBlank(value)) return value
  if (isString(value)) return Number(value)
  if (isDate(value)) return Number(value)
  if (isBoolean(value)) return Number(value)
  throw Error("can't be cast to number")
}

import * as c from "@utils/conditionals"

/**
 * Converts a string to a Date object.
 * @param value The string value to be converted.
 * @returns Returns a Date object if the input value is a string, otherwise returns null or undefined.
 * @throws Throws an error if the input value is not a string, null, or undefined.
 * @example
 * toDate('2022-01-01'); // new Date('2022-01-01')
 * toDate(null); // null
 * toDate(undefined); // undefined
 * toDate(123); // Error: can't be cast to Date
 */
export default function toDate(value: unknown) {
  if (c.isBlank(value)) return value
  if (c.isString(value)) return new Date(value)
  throw Error("can't be cast to Date")
}

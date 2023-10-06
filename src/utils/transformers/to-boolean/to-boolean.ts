import isBlank from "@utils/conditionals/is-blank"
import isBoolean from "@utils/conditionals/is-boolean"
import isNumber from "@utils/conditionals/is-number"
import isString from "@utils/conditionals/is-string"

/**
 * Converts a value to a boolean.
 * @param value The value to be converted to a boolean.
 * @returns Returns a boolean if the input value is a boolean, a string with value "true", or a number equal to 1.
 *          Returns false if the input value is a string with value other than "true" or a number other than 1,
 *          Returns itself when value is null or undefined.
 * @example
 *
 * toBoolean('true'); // true
 * toBoolean('TRUE'); // true
 * toBoolean(true); // true
 * toBoolean(1); // true
 * toBoolean('false'); // false
 * toBoolean(false); // false
 * toBoolean(0); // false
 * toBoolean(null); // null
 * toBoolean(undefined); // undefined
 * toBoolean(''); // false
 */
export default function toBoolean(value: unknown) {
  if (isBlank(value)) return value
  if (isBoolean(value)) return value
  if (isString(value)) return value.toLowerCase() === "true"
  if (isNumber(value)) return value === 1
  return false
}

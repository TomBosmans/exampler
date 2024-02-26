/**
 * Checks if the given value is a symbol.
 * @param value The value to be checked.
 * @returns Returns `true` if the given value is a symbol, `false` otherwise.
 * @example
 * const mySymbol = Symbol('my symbol');
 * isSymbol(mySymbol); // true
 * isSymbol('hello world'); // false
 */
export default function isSymbol(value: unknown): value is symbol {
  return typeof value === "symbol"
}

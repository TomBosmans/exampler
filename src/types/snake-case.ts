type UpperCaseLetters =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z"
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"

type SnakeCaseSeq<S extends string> = S extends `${infer P1}${infer P2}`
  ? P1 extends UpperCaseLetters
  ? `_${Lowercase<P1>}${SnakeCaseSeq<P2>}`
  : `${P1}${SnakeCaseSeq<P2>}`
  : Lowercase<S>

export type SnakeCase<S extends string> = S extends `${infer P1}${infer P2}`
  ? `${Lowercase<P1>}${SnakeCaseSeq<P2>}`
  : Lowercase<S>

type ObjectToSnakeCase<T> = {
  [K in keyof T as SnakeCase<string & K>]: T[K] extends Record<string, any>
  ? KeysToSnakeCase<T[K]>
  : T[K]
}

export type KeysToSnakeCase<T> = {
  [K in keyof T as SnakeCase<string & K>]: T[K] extends Array<any>
  ? KeysToSnakeCase<T[K][number]>[]
  : ObjectToSnakeCase<T[K]>
}

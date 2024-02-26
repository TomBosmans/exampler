export * from "./camel-case"
export * from "./snake-case"
export * from "./web-components"
export type ClassType<T> = new (...args: any[]) => T
export type FunctionType<T> = (...args: any[]) => T
export type ValueOf<T> = T[keyof T]

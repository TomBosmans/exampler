export default interface Logger {
  info(value: unknown): void
  warn(value: unknown): void
  log(value: unknown): void
  error(value: unknown): void
  sql(sql: string, params: unknown): void
}

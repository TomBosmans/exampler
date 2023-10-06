import { Config } from "@config"

export type HashPassword = ReturnType<typeof hashPassword>

export default function hashPassword(config: Config) {
  return async (password: string) =>
    await Bun.password.hash(password, {
      algorithm: "bcrypt",
      cost: config.password.saltRounds,
    })
}

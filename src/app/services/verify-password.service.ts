export type VerifyPassword = ReturnType<typeof verifyPassword>

export default function verifyPassword() {
  return async (password: string, hashedPassword: string) => {
    return await Bun.password.verify(password, hashedPassword)
  }
}

import * as z from "zod"
import config from "@config"
import BaseModel from "./base.model"

export default class Password extends BaseModel({
  value: z.string(),
}) {
  static async hash(password: string) {
    return await Bun.password.hash(password, {
      algorithm: "bcrypt",
      cost: config.password.saltRounds,
    })
  }

  public async verify(password: string) {
    return await Bun.password.verify(password, this.value)
  }
}

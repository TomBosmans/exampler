import * as z from "zod";
import BaseModel from "./base.model";
import Password from "./password.model";

export default class User extends BaseModel({
  id: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().transform(value => new Password({ value })),
  createdAt: z.date().or(z.string().datetime({ offset: true }).transform(x => new Date(x))),
  updatedAt: z.date().or(z.string().datetime({ offset: true }).transform(x => new Date(x))),
}) {
  public get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

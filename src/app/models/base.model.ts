import * as z from "zod"

export default interface BaseModel<T extends z.ZodRawShape> {
  schema: z.ZodObject<T>
  attributes: string[]

  new(data: z.input<z.ZodObject<T>>): z.output<z.ZodObject<T>> & {
    toJson(): string
  }
}

export default function BaseModel<T extends z.ZodRawShape>(shape: T): BaseModel<T> {
  const zodSchema = z.object(shape)

  return class {
    static schema = zodSchema
    static attributes = Object.keys(zodSchema.shape)

    constructor(value: z.input<z.ZodObject<T>>) {
      Object.assign(this, zodSchema.parse(value))
    }

    public toJson() {
      return JSON.stringify(this)
    }
  } as any
}

import toCamelCase from "@utils/to-camel-case"
import { SafeParseReturnType, ZodError, Schema } from "zod"

export type GetFormData<T> = () => Promise<SafeParseReturnType<ZodError<T>, T>>

export default function getFormData(
  request: Request,
  schemas: { body: Schema },
) {
  return async () => {
    const formData = await request.formData()

    const formObject = Array.from(formData.entries()).reduce(
      (obj, [key, value]) => {
        obj[toCamelCase(key)] = value
        return obj
      },
      {} as Record<string, unknown>,
    )

    return schemas.body.safeParse(formObject)
  }
}

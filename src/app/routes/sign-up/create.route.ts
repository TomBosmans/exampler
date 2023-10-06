import Route from "@core/route"
import { CreateUser } from "../../entities/user"
import { GetFormData } from "../_middleware/get-form-data.middleware"
import { HttpHeader, HttpMethod, HttpResponseCode } from "@constants"
import { z } from "zod"

type Body = z.output<typeof body>
const body = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  passwordConfirmation: z.string(),
})


export default function createSignUpRoute() {
  return new Route({
    path: "/sign-up",
    method: HttpMethod.POST,
    context: {
      schemas: {
        body,
      },
    },
    handler: async (getFormData: GetFormData<Body>, createUser: CreateUser) => {
      const formData = await getFormData()
      if (formData.success) {
        const newUser = formData.data
        await createUser(newUser)

        return new Response(null, {
          status: HttpResponseCode.TemporaryRedirect,
          headers: {
            [HttpHeader.HXRedirect]: "/test",
          },
        })
      }

      return new Response("fuck", { status: 400 })
    },
  })
}

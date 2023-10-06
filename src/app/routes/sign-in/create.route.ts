import Route from "@core/route"
import { FindUser } from "../../entities/user/services/find-user.service"
import { GetFormData } from "../_middleware/get-form-data.middleware"
import { HttpMethod } from "@constants"
import { VerifyPassword } from "../../services/verify-password.service"
import { z } from "zod"

type Body = z.output<typeof body>
const body = z.object({
  email: z.string().email(),
  password: z.string(),
})

export default function createSignInRoute() {
  return new Route({
    path: "/sign-in",
    method: HttpMethod.POST,
    context: {
      schemas: {
        body,
      },
    },
    handler: async (
      getFormData: GetFormData<Body>,
      verifyPassword: VerifyPassword,
      findUser: FindUser,
    ) => {
      const formData = await getFormData()
      if (formData.success) {
        const user = await findUser({ })
        return new Response("success")
      } else {
        console.log(formData.error)
        return new Response("failure")
      }
    },
  })
}

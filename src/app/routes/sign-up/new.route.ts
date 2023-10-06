import Route from "@core/route"
import SignUpPage from "../../pages/sign-up.page"
import { HttpHeader, HttpMethod, HttpResponseCode, MimeType } from "@constants"

export default function newSignUpRoute() {
  return new Route({
    path: "/sign-up",
    method: HttpMethod.GET,
    handler: async () => {
      return new Response(SignUpPage() as string, {
        status: HttpResponseCode.OK,
        headers: { [HttpHeader.ContentType]: MimeType.html },
      })
    },
  })
}

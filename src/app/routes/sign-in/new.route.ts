import Route from "@core/route"
import SignInPage from "../../pages/sign-in.page"
import { HttpHeader, HttpMethod, HttpResponseCode, MimeType } from "@constants"

export default function newSignInRoute() {
  return new Route({
    path: "/sign-in",
    method: HttpMethod.GET,
    handler: async () => {
      return new Response(SignInPage() as string, {
        status: HttpResponseCode.OK,
        headers: { [HttpHeader.ContentType]: MimeType.html },
      })
    },
  })
}

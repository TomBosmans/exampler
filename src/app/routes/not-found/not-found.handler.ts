import { HttpHeader, HttpResponseCode, MimeType } from "@constants"
import NotFoundPage from "../../pages/not-found.page"

export default function notFoundHandler() {
  return new Response(NotFoundPage() as string, {
    status: HttpResponseCode.NotFound,
    headers: { [HttpHeader.ContentType]: MimeType.html },
  })
}

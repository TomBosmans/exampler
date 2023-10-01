export const HttpMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
} as const

export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod]

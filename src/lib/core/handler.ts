type Handler =
  | ((...args: any[]) => Promise<Response> | Response)
  | (() => Promise<Response> | Response)

export default Handler

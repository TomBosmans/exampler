/**
 * @enum {number} Enumeration of common HTTP response status codes.
 * @readonly
 */
export const HttpResponseCode = {
  /**
   * Used when the initial part of the request has been received and the client should continue with the request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100}
   * @example
   *   100 Continue
   * @type {number}
   */
  Continue: 100,

  /**
   * Used when the server is switching to a different protocol, as requested by the client.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101}
   * @example
   *   101 Switching Protocols
   * @type {number}
   */
  SwitchingProtocols: 101,

  /**
   * Indicates that the request has been successfully processed and the response contains the requested data.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200}
   * @example
   *   200 OK
   * @type {number}
   */
  OK: 200,

  /**
   * Indicates that a new resource has been successfully created as a result of the request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201}
   * @example
   *   201 Created
   * @type {number}
   */
  Created: 201,

  /**
   * Indicates that the request has been accepted for processing, but the processing has not been completed.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202}
   * @example
   *   202 Accepted
   * @type {number}
   */
  Accepted: 202,

  /**
   * Indicates that the response is a representation of the target resource from a different source.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203}
   * @example
   *   203 Non-Authoritative Information
   * @type {number}
   */
  NonAuthoritativeInformation: 203,

  /**
   * Indicates that the request has been successfully processed, but there is no response body to return.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204}
   * @example
   *   204 No Content
   * @type {number}
   */
  NoContent: 204,

  /**
   * Used to instruct the client to reset the document view, typically after form submission.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205}
   * @example
   *   205 Reset Content
   * @type {number}
   */
  ResetContent: 205,

  /**
   * Used for partial GET requests, indicating that the response contains only part of the requested content.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206}
   * @example
   *   206 Partial Content
   * @type {number}
   */
  PartialContent: 206,

  /**
   * Indicates that the requested resource corresponds to multiple possible choices.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300}
   * @example
   *   300 Multiple Choices
   * @type {number}
   */
  MultipleChoices: 300,

  /**
   * Informs the client that the requested resource has permanently moved to a different location.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301}
   * @example
   *   301 Moved Permanently
   * @type {number}
   */
  MovedPermanently: 301,

  /**
   * Indicates a temporary redirection to a different URL for the requested resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302}
   * @example
   *   302 Found
   * @type {number}
   */
  Found: 302,

  /**
   * Similar to 302, but suggests that the client should use a GET request to retrieve the resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303}
   * @example
   *   303 See Other
   * @type {number}
   */
  SeeOther: 303,

  /**
   * Indicates that the client's cached copy of the resource is still valid and can be used.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304}
   * @example
   *   304 Not Modified
   * @type {number}
   */
  NotModified: 304,

  /**
   * Reserved for older HTTP versions and is no longer used.
   * @type {number}
   */
  UseProxy: 305,

  /**
   * Indicates a temporary redirection similar to 302 but with the same HTTP method.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307}
   * @example
   *   307 Temporary Redirect
   * @type {number}
   */
  TemporaryRedirect: 307,

  /**
   * Indicates a permanent redirection similar to 301 but with the same HTTP method.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308}
   * @example
   *   308 Permanent Redirect
   * @type {number}
   */
  PermanentRedirect: 308,

  /**
   * Indicates that the client's request is malformed or invalid.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400}
   * @example
   *   400 Bad Request
   * @type {number}
   */
  BadRequest: 400,

  /**
   * Indicates that authentication is required for access to the requested resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401}
   * @example
   *   401 Unauthorized
   * @type {number}
   */
  Unauthorized: 401,

  /**
   * Reserved for future use and is not commonly used in practice.
   * @type {number}
   */
  PaymentRequired: 402,

  /**
   * Indicates that the client does not have permission to access the requested resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403}
   * @example
   *   403 Forbidden
   * @type {number}
   */
  Forbidden: 403,

  /**
   * Indicates that the requested resource could not be found on the server.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404}
   * @example
   *   404 Not Found
   * @type {number}
   */
  NotFound: 404,

  /**
   * Indicates that the HTTP method used in the request is not allowed for the resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405}
   * @example
   *   405 Method Not Allowed
   * @type {number}
   */
  MethodNotAllowed: 405,

  /**
   * Indicates that the server cannot produce a response matching the list of acceptable values defined by the client.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406}
   * @example
   *   406 Not Acceptable
   * @type {number}
   */
  NotAcceptable: 406,

  /**
   * Indicates that the client must authenticate itself with the proxy.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407}
   * @example
   *   407 Proxy Authentication Required
   * @type {number}
   */
  ProxyAuthenticationRequired: 407,

  /**
   * Indicates that the server timed out while waiting for the client's request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408}
   * @example
   *   408 Request Timeout
   * @type {number}
   */
  RequestTimeout: 408,

  /**
   * Indicates that there is a conflict with the current state of the target resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409}
   * @example
   *   409 Conflict
   * @type {number}
   */
  Conflict: 409,

  /**
   * Indicates that the requested resource has been permanently removed and will not be available again.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410}
   * @example
   *   410 Gone
   * @type {number}
   */
  Gone: 410,

  /**
   * Indicates that the server requires the "Content-Length" header to be specified in the request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411}
   * @example
   *   411 Length Required
   * @type {number}
   */
  LengthRequired: 411,

  /**
   * Indicates that one or more conditions specified in the request headers were not met.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412}
   * @example
   *   412 Precondition Failed
   * @type {number}
   */
  PreconditionFailed: 412,

  /**
   * Indicates that the request payload is larger than the server is willing or able to process.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413}
   * @example
   *   413 Payload Too Large
   * @type {number}
   */
  PayloadTooLarge: 413,

  /**
   * Indicates that the URI (Uniform Resource Identifier) provided in the request is too long for the server to process.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414}
   * @example
   *   414 URI Too Long
   * @type {number}
   */
  URITooLong: 414,

  /**
   * Indicates that the server does not support the media type of the request payload.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415}
   * @example
   *   415 Unsupported Media Type
   * @type {number}
   */
  UnsupportedMediaType: 415,

  /**
   * Indicates that the server could not meet the requirements specified in the "Expect" header field.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417}
   * @example
   *   417 Expectation Failed
   * @type {number}
   */
  ExpectationFailed: 417,

  /**
   * An April Fools' joke status code, not meant for serious use.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418}
   * @example
   *   418 I'm a teapot
   * @type {number}
   */
  ImATeapot: 418,

  /**
   * Indicates that the server was unable to produce a response due to a problem with the current connection.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421}
   * @example
   *   421 Misdirected Request
   * @type {number}
   */
  MisdirectedRequest: 421,

/**
   * Indicates that the client should switch to a different protocol version.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426}
   * @example
   *   426 Upgrade Required
   * @type {number}
   */
  UpgradeRequired: 426,

  /**
   * Indicates that the client has sent too many requests in a given amount of time.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429}
   * @example
   *   429 Too Many Requests
   * @type {number}
   */
  TooManyRequests: 429,

 /**
   * Indicates that the server encountered an unexpected error while processing the request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500}
   * @example
   *   500 Internal Server Error
   * @type {number}
   */
  InternalServerError: 500,

  /**
   * Indicates that the server does not support the functionality required to fulfill the request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501}
   * @example
   *   501 Not Implemented
   * @type {number}
   */
  NotImplemented: 501,

  /**
   * Indicates that a server acting as a gateway or proxy received an invalid response from an upstream server.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502}
   * @example
   *   502 Bad Gateway
   * @type {number}
   */
  BadGateway: 502,

  /**
   * Indicates that the server is currently unable to handle the request due to temporary overloading or maintenance of the server.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503}
   * @example
   *   503 Service Unavailable
   * @type {number}
   */
  ServiceUnavailable: 503,

  /**
   * Indicates that a server acting as a gateway or proxy did not receive a timely response from an upstream server.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504}
   * @example
   *   504 Gateway Timeout
   * @type {number}
   */
  GatewayTimeout: 504,

  /**
   * Indicates that the server does not support the HTTP protocol version used in the request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505}
   * @example
   *   505 HTTP Version Not Supported
   * @type {number}
   */
  HTTPVersionNotSupported: 505,
  
  /**
   * Indicates that the server encountered an unexpected error while processing the request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506}
   * @example
   *   506 Variant Also Negotiates
   * @type {number}
   */
  VariantAlsoNegotiates: 506,

  /**
   * Indicates that the server is unable to store the representation needed to complete the request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507}
   * @example
   *   507 Insufficient Storage
   * @type {number}
   */
  InsufficientStorage: 507,

  /**
   * Indicates that the server detected an infinite loop while processing the request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508}
   * @example
   *   508 Loop Detected
   * @type {number}
   */
  LoopDetected: 508,

  /**
   * Indicates that the server has not yet been set up to produce a response.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510}
   * @example
   *   510 Not Extended
   * @type {number}
   */
  NotExtended: 510,

  /**
   * Indicates that further extensions to the request are required for it to be fulfilled.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511}
   * @example
   *   511 Network Authentication Required
   * @type {number}
   */
  NetworkAuthenticationRequired: 511,
} as const

export type HttpResponseCode =
  (typeof HttpResponseCode)[keyof typeof HttpResponseCode]

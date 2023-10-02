/**
 * @enum {string} Enumeration of common HTTP headers.
 * @readonly
 */
export const HttpHeader = {
  /**
   * The type of content that the client can understand and accept.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept}
   * @example 
   *   Accept: <MIME_type>/<MIME_subtype>
   *   Accept: <MIME_type>/*
   *   Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp
   * @type {string}
   */
  Accept: "Accept",

  /**
   * The encoding methods the client can accept.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding}
   * @example 
   *   Accept-Encoding: gzip, deflate, br
   * @type {string}
   */
  AcceptEncoding: "Accept-Encoding",

  /**
   * Directives for caching mechanisms in requests and responses.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control}
   * @example 
   *   Cache-Control: no-cache, max-age=0
   * @type {string}
   */
  CacheControl: "Cache-Control",

  /**
   * The media type of the resource sent or received.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type}
   * @example 
   *   Content-Type: application/json; charset=utf-8
   * @type {string}
   */
  ContentType: "Content-Type",

  /**
   * The size of the entity-body, in decimal number of octets.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length}
   * @example 
   *   Content-Length: 12345
   * @type {string}
   */
  ContentLength: "Content-Length",

  /**
   * The date and time at which the message was sent.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date}
   * @example 
   *   Date: Wed, 02 Oct 2023 12:34:56 GMT
   * @type {string}
   */
  Date: "Date",

  /**
   * Used in redirections or when a new resource has been created.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location}
   * @example 
   *   Location: https://example.com/new-location
   * @type {string}
   */
  Location: "Location",

  /**
   * Information about the software used by the origin server.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server}
   * @example 
   *   Server: Apache/2.4.38 (Unix) OpenSSL/1.1.1c
   * @type {string}
   */
  Server: "Server",

  /**
   * Information about the user agent (browser or client) making the request.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent}
   * @example 
   *   User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
   * @type {string}
   */
  UserAgent: "User-Agent",

  /**
   * Credentials for authenticating the client with the server.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization}
   * @example 
   *   Authorization: Basic base64encodedcredentials
   * @type {string}
   */
  Authorization: "Authorization",

  /**
   * Data stored in the user's browser.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie}
   * @example 
   *   Cookie: sessionid=1234567890
   * @type {string}
   */
  Cookie: "Cookie",

  /**
   * Instructions to set cookies in the response.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie}
   * @example 
   *   Set-Cookie: sessionId=12345; Path=/; HttpOnly
   * @type {string}
   */
  SetCookie: "Set-Cookie",

  /**
   * The address of the previous web page from which a link to the currently requested page was followed.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer}
   * @example 
   *   Referer: https://example.com/previous-page
   * @type {string}
   */
  Referer: "Referer",

  /**
   * The domain name of the server (useful for virtual hosting).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host}
   * @example 
   *   Host: example.com
   * @type {string}
   */
  Host: "Host",

  /**
   * Control options for the current connection.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection}
   * @example 
   *   Connection: keep-alive
   * @type {string}
   */
  Connection: "Connection",

  /**
   * Allows conditional GET requests based on modification dates.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since}
   * @example 
   *   If-Modified-Since: Thu, 01 Sep 2023 00:00:00 GMT
   * @type {string}
   */
  IfModifiedSince: "If-Modified-Since",

  /**
   * An identifier for a specific version of a resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag}
   * @example 
   *   ETag: "abc123"
   * @type {string}
   */
  ETag: "ETag",

  /**
   * The preferred natural language(s) for the response.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language}
   * @example 
   *   Accept-Language: en-US, en;q=0.9, fr;q=0.8
   * @type {string}
   */
  AcceptLanguage: "Accept-Language",

  /**
   * Specifies presentation information for the attached file.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition}
   * @example 
   *   Content-Disposition: attachment; filename="example.txt"
   * @type {string}
   */
  ContentDisposition: "Content-Disposition",

  /**
   * Identifies Ajax requests.
   * @type {string}
   */
  XRequestedWith: "X-Requested-With",

  /**
   * Pushes a new URL into the browser’s address bar.
   * @see {@link https://htmx.org/docs/#response-headers}
   * @example 
   *  HX-Push: /new-url
   * @type {string}
   */
  HXPush: "HX-Push",

  /**
   * Triggers a client-side redirect to a new location.
   * @see {@link https://htmx.org/docs/#response-headers}
   * @example 
   *   HX-Redirect: /new-location
   * @type {string}
   */
  HXRedirect: "HX-Redirect",

  /**
   * Triggers a client-side redirect to a new location that acts as a swap.
   * @see {@link https://htmx.org/docs/#response-headers}
   * @example 
   *   HX-Location: /new-swap-location
   * @type {string}
   */
  HXLocation: "HX-Location",

  /**
   * If set to “true” the client side will do a full refresh of the page.
   * @see {@link https://htmx.org/docs/#response-headers}
   * @example 
   *   HX-Refresh: true
   * @type {string}
   */
  HXRefresh: "HX-Refresh",

  /**
   * Triggers client side events.
   * @see {@link https://htmx.org/docs/#response-headers}
   * @example 
   *   HX-Trigger: my-custom-event
   * @type {string}
   */
  HXTrigger: "HX-Trigger",

  /**
   * Triggers client side events after the swap step.
   * @see {@link https://htmx.org/docs/#response-headers}
   * @example 
   *   HX-Trigger-After-Swap: my-custom-event
   * @type {string}
   */
  HXTriggerAfterSwap: "HX-Trigger-After-Swap",

  /**
   * Triggers client side events after the settle step.
   * @see {@link https://htmx.org/docs/#response-headers}
   * @example 
   *   HX-Trigger-After-Settle: my-custom-event
   * @type {string}
   */
  HXTriggerAfterSettle: "HX-Trigger-After-Settle",
} as const


export type HttpHeader =
  | (typeof HttpHeader)[keyof typeof HttpHeader]
  | (string & {}) // (string & {}) allows any string but we still keep autocompletion.

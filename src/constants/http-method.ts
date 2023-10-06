/**
 * @enum {string} Enumeration of HTTP request methods.
 * @readonly
 */
export const HttpMethod = {
  /**
   * Represents an HTTP GET request method.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET}
   * @example
   *   GET /api/resource
   * @type {string}
   */
  GET: "GET",

  /**
   * Represents an HTTP POST request method.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST}
   * @example
   *   POST /api/resource
   * @type {string}
   */
  POST: "POST",

  /**
   * Represents an HTTP PUT request method.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT}
   * @example
   *   PUT /api/resource/123
   * @type {string}
   */
  PUT: "PUT",

  /**
   * Represents an HTTP PATCH request method.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH}
   * @example
   *   PATCH /api/resource/123
   * @type {string}
   */
  PATCH: "PATCH",

  /**
   * Represents an HTTP DELETE request method.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE}
   * @example
   *   DELETE /api/resource/123
   * @type {string}
   */
  DELETE: "DELETE",
} as const;

export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod]

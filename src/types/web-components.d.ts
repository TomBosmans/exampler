export declare global {
  namespace JSX {
    interface IntrinsicElements {
      "toggle-content": HtmlTag & {
        "on-event": "click" | "dblclick";
      };
    }

    interface HtmlTag {
      ["slot"]?: string;
    }
  }
}

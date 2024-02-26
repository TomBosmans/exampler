class ToggleContent extends HTMLElement {
  public shadowRoot = this.attachShadow({ mode: "open" })
  private slotA: HTMLSlotElement | null = null
  private slotB: HTMLSlotElement | null = null
  private onEvent: string | null = null

  static get observedAttributes() {
    return ["on-event"]
  }

  constructor() {
    super()
    this.shadowRoot.innerHTML = `
      <slot name="a" style="display: block"></slot>
      <slot name="b" style="display: none"></slot>
    `
  }

  protected connectedCallback() {
    this.slotA = this.shadowRoot.querySelector('slot[name="a"]')
    this.slotB = this.shadowRoot.querySelector('slot[name="b"]')
  }

  protected disconnectedCallback() {
    if (this.onEvent) {
      this.removeEventListener(this.onEvent, this.toggleSlots)
    }
  }

  protected attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ) {
    if (oldValue === newValue) return
    if (name === "on-event") return this.changeOnEvent(newValue)
  }

  private changeOnEvent(newValue: string | null) {
    if (this.onEvent) this.removeEventListener(this.onEvent, this.toggleSlots)
    this.onEvent = newValue
    if (this.onEvent) this.addEventListener(this.onEvent, this.toggleSlots)
  }

  private toggleSlots() {
    if (!this.slotA || !this.slotB) return

    if (this.slotA.style.display === "none") {
      this.slotA.style.display = "block"
      this.slotB.style.display = "none"
    } else {
      this.slotA.style.display = "none"
      this.slotB.style.display = "block"
    }
  }
}

customElements.define("toggle-content", ToggleContent)

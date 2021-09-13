export class Component extends HTMLElement {
    observers = new Set();

    static get observedAttributes() { return []; }

    connectedCallback() {
        for (const observer of this.observers) {
            observer.observe(this);
        }
    }

    disconnectedCallback() {
        for (const observer of this.observers) {
            observer.unobserve(this);
        }
    }

    // adoptedCallback() {
    // }

    // attributeChangedCallback(attribute, previousValue, currentValue) {
    // }

    // slotChangedCallback(slot, added, removed, current) {
    // }
}
export default class Component extends HTMLElement {
    constructor(template) {
        super();
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, previousValue, currentValue) {
    }

    connectedCallback() {
    }

    disconnectedCallback() {
    }

    adoptedCallback() {
    }
}

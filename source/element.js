export default class Element extends HTMLElement {
    constructor(container) {
        super();

        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.appendChild(container);
    }
}

export const define = (name, type) => customElements.define(`${name}-component`, type);
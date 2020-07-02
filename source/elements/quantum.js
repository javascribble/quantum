import { getAttribute, setAttribute } from '../decorators/element.js';

export class Quantum extends HTMLElement {
    #renderers = {};

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.appendChild(this.template.content.cloneNode(true));
        this.initializeShadowCallback(shadow);

        // const observeSlot = (slot, onAdd, onDelete) => {
        //     let previousElements = [];
        //     slot.addEventListener('slotchange', event => {
        //         const currentElements = slot.assignedElements();
        //         currentElements.subtract(previousElements).forEach(onAdd);
        //         previousElements.subtract(currentElements).forEach(onDelete);
        //         previousElements = currentElements;
        //     });
        // };
    }

    static attributes = {};
    static events = {};

    static get observedAttributes() {
        const attributes = Object.keys(this.attributes);
        for (const attribute of attributes) {
            Object.defineProperty(this.prototype, attribute, {
                get() { return getAttribute(this, attribute); },
                set(value) { setAttribute(this, attribute, value); }
            });
        }

        return attributes;
    }

    attributeChangedCallback(attribute, previous, current) {
        this.#renderers[attribute](current, previous);
    }

    initializeShadowCallback(shadow) {
        const { attributes, events } = this.constructor;
        this.#renderers = attributes.map(entry => [entry[0], entry[1](shadow)]);
        events.forEach(entry => entry[1](shadow, options => this.dispatchEvent(new CustomEvent(entry[0], options))));
    }
}
import { attributeOptions, shadowOptions } from '../constants/options.js';
import { getAttribute, setAttribute } from '../decorators/element.js';

export class Quantum extends HTMLElement {
    constructor(template) {
        super();

        this.attachShadow(shadowOptions).appendChild(template.content.cloneNode(true));
    }

    static attributes = [];

    static get observedAttributes() {
        const observableAttributes = [];
        for (const attribute of this.attributes) {
            if (this.prototype.hasOwnProperty(attributeOptions.formatChangedCallback(attribute))) {
                observableAttributes.push(attribute);
            }

            Object.defineProperty(this.prototype, attribute, {
                get() { return getAttribute(this, attribute); },
                set(value) { setAttribute(this, attribute, value); }
            });
        }

        return observableAttributes;
    }

    attributeChangedCallback(attribute, previous, current) {
        this[attributeOptions.formatChangedCallback(attribute)](current, previous);
    }
}
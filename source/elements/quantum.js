import { append, shadow, clone } from '../aliases/elements.js';

export class Quantum extends HTMLElement {
    constructor(template) {
        super();

        append(shadow(this), clone(template));
    }

    static get observedAttributes() {
        if (this.attributes) {
            for (const name in this.attributes) {
                if (this.hasOwnProperty(name)) {
                    throw new Error(`Attribute '${name}' already in use.`);
                } else {
                    Object.defineProperty(this.prototype, name, {
                        get() {
                            return this.getAttribute(name);
                        },
                        set(value) {
                            this.setAttribute(name, value);
                        }
                    });
                }
            }

            return Object.keys(this.attributes);
        }
    }

    attributeChangedCallback(attribute, previous, current) {
        this.constructor.attributes[attribute](this, current, previous);
    }
}
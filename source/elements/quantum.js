import { append, shadow, clone } from '../aliases/elements.js';
import { warn } from '../aliases/console.js';

export class Quantum extends HTMLElement {
    constructor(template) {
        super();

        append(shadow(this), clone(template));
    }

    static get observedAttributes() {
        if (this.attributes) {
            for (const name in this.attributes) {
                if (this.hasOwnProperty(name)) {
                    warn(`Attribute '${name}' hides existing property.`);
                }

                Object.defineProperty(this.prototype, name, {
                    get() {
                        return this.getAttribute(name);
                    },
                    set(value) {
                        this.setAttribute(name, value);
                    }
                });
            }

            return Object.keys(this.attributes);
        }
    }

    attributeChangedCallback(attribute, previous, current) {
        this.constructor.attributes[attribute](this, current, previous);
    }
}
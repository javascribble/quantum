import { getTyped, setTyped } from '../utilities/attributes.js';

export class Quantum extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        if (this.attributes) {
            for (const name in this.attributes) {
                Object.defineProperty(this.prototype, name, {
                    get() {
                        return getTyped(this, name);
                    },
                    set(value) {
                        setTyped(this, name, value);
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
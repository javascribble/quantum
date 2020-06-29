import { defineProperty, keys } from '../aliases/object.js';
import { getAttribute, setAttribute } from '../decorators/element.js';
import { iterate, map } from '../extensions/object.js';
import { createDispatcher } from '../utilities/elements.js';

export class Quantum extends HTMLElement {
    #renderers = {};

    constructor(template) {
        super();

        const root = this.attachShadow({ mode: 'closed' });
        root.appendChild(template.content.cloneNode(true));

        const { attributes, events } = this.constructor;
        this.#renderers = map(attributes, entry => [entry[0], entry[1](root)]);
        iterate(events, entry => entry[1](root, createDispatcher(this, entry[0])));
    }

    static attributes = {};
    static events = {};

    static get observedAttributes() {
        const attributes = keys(this.attributes);
        for (const attribute of attributes) {
            defineProperty(this.prototype, attribute, {
                get() {
                    return getAttribute(this, attribute);
                },
                set(value) {
                    setAttribute(this, attribute, value);
                }
            });
        }

        return attributes;
    }

    static define(prefix = 'quantum', converter = type => type.name.toLowerCase()) {
        customElements.define(`${prefix}-${converter(this)}`, this);
    }

    attributeChangedCallback(attribute, previous, current) {
        this.#renderers[attribute](current, previous);
    }
}
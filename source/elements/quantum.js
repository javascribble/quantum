import { defineProperty, keys } from '../aliases/object.js';
import { getAttribute, setAttribute } from '../decorators/element.js';
import { createDispatcher } from '../extensions/element.js';
import { forEach, map } from '../extensions/object.js';

export class Quantum extends HTMLElement {
    #renderers = {};

    constructor(template) {
        super();

        const root = this.attachShadow({ mode: 'open' });
        root.appendChild(template.content.cloneNode(true));

        const { attributes, events } = this.constructor;
        const applyEntries = delegate => argument => delegate(...argument);
        this.#renderers = map(attributes, applyEntries((name, handler) => [name, handler(root)]));
        forEach(events, applyEntries((name, handler) => handler(root, createDispatcher(this, name))));
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

    attributeChangedCallback(attribute, previous, current) {
        this.#renderers[attribute](current, previous);
    }
}
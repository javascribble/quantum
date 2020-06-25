import { defineProperty, keys } from '../aliases/object.js';
import { attachShadow, cloneNode, dispatchEvent, getAttribute, setAttribute } from '../decorators/element.js';
import { forEach, map } from '../extensions/object.js';

export class Quantum extends HTMLElement {
    #renderers = {};

    constructor(template) {
        super();

        const root = attachShadow(this);
        root.appendChild(cloneNode(template));

        const { attributes, events } = this.constructor;
        const apply = delegate => entry => delegate(...entry);
        this.#renderers = map(attributes, apply((attribute, renderer) => [attribute, renderer(root)]));
        forEach(events, apply((event, dispatcher) => dispatcher(root, options => dispatchEvent(this, event, options))));
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
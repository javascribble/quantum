import { defineProperty, keys } from '../aliases/object.js';
import { getAttribute, setAttribute } from '../decorators/element.js';
import { apply } from '../decorators/function.js';
import { forEach, map } from '../extensions/object.js';
import { createDispatcher } from '../functions/event.js';

export class Quantum extends HTMLElement {
    #renderers = {};

    constructor(template) {
        super();

        const root = this.attachShadow({ mode: 'open' });
        root.appendChild(template.content.cloneNode(true));

        const { attributes, events } = this.constructor;
        this.#renderers = map(attributes, apply((attribute, renderer) => [attribute, renderer(root)]));
        forEach(events, apply((event, dispatcher) => dispatcher(root, createDispatcher(this, event))));
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
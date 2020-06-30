import { attachShadow, appendChild, cloneNode } from '../abstractions/element.js';
import { defineProperty, keys } from '../abstractions/object.js';
import { iterateEntries, mapEntries } from '../extensions/object.js';
import { getTypedAttribute, setTypedAttribute } from '../utilities/elements.js';
import { createDispatcher } from '../utilities/events.js';
import { shadowDefault } from '../constants/defaults.js';

export class Quantum extends HTMLElement {
    #renderers = {};

    constructor(template) {
        super();

        const root = attachShadow(this, shadowDefault);
        appendChild(root, cloneNode(template.content, true));

        const { attributes, events } = this.constructor;
        this.#renderers = mapEntries(attributes, entry => [entry[0], entry[1](root)]);
        iterateEntries(events, entry => entry[1](root, createDispatcher(entry[0], this)));
    }

    static attributes = {};
    static events = {};

    static get observedAttributes() {
        const attributes = keys(this.attributes);
        for (const attribute of attributes) {
            defineProperty(this.prototype, attribute, {
                get() {
                    return getTypedAttribute(this, attribute);
                },
                set(value) {
                    setTypedAttribute(this, attribute, value);
                }
            });
        }

        return attributes;
    }

    attributeChangedCallback(attribute, previous, current) {
        this.#renderers[attribute](current, previous);
    }
}
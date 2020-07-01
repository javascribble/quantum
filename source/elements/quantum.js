import { defineAttributes } from '../utilities/elements.js';
import { createDispatcher } from '../utilities/events.js';

export class Quantum extends HTMLElement {
    #renderers = {};

    constructor(template) {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));
        this.initializeShadowCallback(shadow);
    }

    static attributes = {};
    static events = {};

    static get observedAttributes() {
        return defineAttributes(this.prototype, Object.keys(this.attributes));
    }

    attributeChangedCallback(attribute, previous, current) {
        this.#renderers[attribute](current, previous);
    }

    initializeShadowCallback(shadow) {
        const { attributes, events } = this.constructor;
        this.#renderers = attributes.map(entry => [entry[0], entry[1](shadow)]);
        events.forEach(entry => entry[1](shadow, createDispatcher(entry[0], this)));
    }
}
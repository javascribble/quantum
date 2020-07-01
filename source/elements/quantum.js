import { attachShadow, appendChild } from '../abstractions/element.js';
import { keys } from '../abstractions/object.js';
import { shadowDefault } from '../constants/defaults.js';
import { iterateEntries, mapEntries } from '../extensions/object.js';
import { defineAttributes } from '../utilities/elements.js';
import { createDispatcher } from '../utilities/events.js';
import { cloneTemplate } from '../utilities/templates.js';

export class Quantum extends HTMLElement {
    #renderers = {};

    constructor(template) {
        super();

        const shadow = attachShadow(this, shadowDefault);
        appendChild(shadow, cloneTemplate(template));
        this.initializeShadowCallback(shadow);
    }

    static attributes = {};
    static events = {};

    static get observedAttributes() {
        return defineAttributes(this.prototype, keys(this.attributes));
    }

    attributeChangedCallback(attribute, previous, current) {
        this.#renderers[attribute](current, previous);
    }

    initializeShadowCallback(shadow) {
        const { attributes, events } = this.constructor;
        this.#renderers = mapEntries(attributes, entry => [entry[0], entry[1](shadow)]);
        iterateEntries(events, entry => entry[1](shadow, createDispatcher(entry[0], this)));
    }
}
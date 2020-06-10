import { keys } from '../aliases/object.js';
import { append, query } from '../aliases/element.js';
import { defineAccessors } from '../utilities/attributes.js';
import { iterate, map } from '../utilities/objects.js';
import { dispatcher } from '../utilities/events.js';
import { shadow } from '../utilities/elements.js';
import { clone } from '../utilities/templates.js';

export class Quantum extends HTMLElement {
    #renderers = {};

    constructor(template) {
        super();

        const root = shadow(this);
        append(root, clone(template));
        const { attributes, elements, events } = this.constructor;
        const mappedElements = map(elements, (property, selector) => [property, query(root, selector)]);
        this.#renderers = map(attributes, (property, renderer) => [property, renderer(mappedElements)]);
        iterate(events, (event, delegate) => delegate(mappedElements, dispatcher(this, event), this));
    }

    static attributes = {};
    static elements = {};
    static events = {};

    static get observedAttributes() {
        const attributes = keys(this.attributes || {});
        defineAccessors(this.prototype, attributes);
        return attributes;
    }

    attributeChangedCallback(attribute, previous, current) {
        this.#renderers[attribute](current, previous);
    }
}
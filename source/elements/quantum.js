import { append, query } from '../aliases/element.js';
import { keys } from '../aliases/object.js';
import { defineAttributes } from '../utilities/attributes.js';
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
        const filteredAttributes = filter(this, attributes);
        const mappedElements = map(elements, selector => query(root, selector));
        this.#renderers = map(attributes, renderer => renderer(mappedElements));
        iterate(events, (event, delegate) => delegate(dispatcher(this, event), mappedElements, filteredAttributes));
    }

    static get observedAttributes() {
        const attributes = keys(this.attributes || {});
        defineAttributes(this.prototype, attributes);
        return attributes;
    }

    attributeChangedCallback(attribute, previous, current) {
        this.#renderers[attribute](current, previous);
    }
}
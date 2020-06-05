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

        const constructor = this.constructor;
        const elements = map(constructor.elements, selector => query(root, selector));
        this.#renderers = map(constructor.attributes, renderer => renderer(elements));
        iterate(constructor.events, (event, delegate) => delegate(this, elements, dispatcher(this, event)));

        // const slots = root.querySelectorAll('slot');
        // for (const slot of slots) {
        //     slot.addEventListener('slotchange', (event) => {
        //         for (const element of slot.assignedElements()) {
        //             // TODO: add/remove slot events, named slot data structures.
        //         }
        //     });
        // }
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
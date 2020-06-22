import { keys } from '../aliases/object.js';
import { append } from '../aliases/element.js';
import { defineAttributes } from '../utilities/attributes.js';
import { iterate, map } from '../utilities/objects.js';
import { dispatch } from '../utilities/events.js';
import { shadow } from '../utilities/elements.js';
import { clone } from '../utilities/templates.js';

export class Quantum extends HTMLElement {
    #renderers = {};

    constructor(template) {
        super();

        const root = shadow(this);
        append(root, clone(template));

        const { attributes, events } = this.constructor;
        this.#renderers = map(attributes, (attribute, renderer) => [attribute, renderer(root)]);
        iterate(events, (event, dispatcher) => dispatcher(root, options => dispatch(this, event, options)));
    }

    static attributes = {};
    static events = {};

    static get observedAttributes() {
        return defineAttributes(this.prototype, keys(this.attributes));
    }

    attributeChangedCallback(attribute, previous, current) {
        this.#renderers[attribute](current, previous);
    }
}
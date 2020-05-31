import { append, shadow, clone } from '../aliases/elements.js';

export class Quantum extends HTMLElement {
    constructor(template) {
        super();

        append(shadow(this), clone(template));
    }

    //static get observedAttributes() { return []; }

    attributeChangedCallback(attribute, previous, current) {
        this[attribute] = current;
    }

    //connectedCallback
    //disconnectedCallback
    //adoptedCallback
}
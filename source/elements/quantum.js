import { append, shadow, clone } from '../aliases/elements.js';

export class Quantum extends HTMLElement {
    constructor(template) {
        super();

        append(shadow(this), clone(template));
    }
}
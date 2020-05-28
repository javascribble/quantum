import { append, shadow, clone } from '../aliases/elements.js';

export class Component extends HTMLElement {
    constructor(template) {
        super();

        append(shadow(this), clone(template));
    }
}
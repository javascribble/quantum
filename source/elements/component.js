import { shadow } from '../aliases/elements.js';

export class Component extends HTMLElement {
    constructor() {
        super();

        shadow(this);
    }
}
import { shadow } from '../utilities/elements.js';

export class Component extends HTMLElement {
    constructor(root) {
        super();

        shadow(this).appendChild(root);
    }
}
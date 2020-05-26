import { shadow } from './aliases/element.js';

export class Component extends HTMLElement {
    constructor() {
        super();

        shadow(this);
    }
}
import { defineOverride } from '../utilities/components.js';

export default class Button extends HTMLImageElement {
    constructor() {
        super();
    }
}

defineOverride('image', Button, 'img');
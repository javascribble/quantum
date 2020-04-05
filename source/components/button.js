import { defineOverride } from '../utilities/components.js';

export default class Button extends HTMLButtonElement {
    constructor() {
        super();
    }
}

const buttonTag = 'button';
defineOverride(buttonTag, Button, buttonTag);

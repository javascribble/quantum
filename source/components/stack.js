import { define } from '../utilities/components.js';
import { clone } from '../utilities/templates.js';

const template = document.createElement('template');
template.innerHTML = '<slot name="test" />';

export default class Stack extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.appendChild(clone(template));
    }
}

define('stack', Stack);

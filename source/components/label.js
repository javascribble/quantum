import { define } from '../utilities/components.js';
import { clone } from '../utilities/templates.js';

const template = document.createElement('template');
template.innerHTML = '<div>Hello World!</div>';

export default class Label extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.appendChild(clone(template));
    }
};

define('label', Label);

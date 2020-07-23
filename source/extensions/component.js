import { componentOptions, shadowOptions } from '../constants/options.js';

export class Component extends HTMLElement {
    constructor(options) {
        super();

        const { template } = this.constructor;
        const { shadow, mode } = {
            ...componentOptions,
            ...shadowOptions,
            ...options
        };

        const root = shadow ? this.attachShadow({ mode }) : this;
        if (template) {
            root.appendChild((template.content || template).cloneNode(true));
        }
    }
}
import { componentOptions } from '../constants/options.js';
import { cloneTemplate } from '../decorators/template.js';
import { createTemplate } from '../document/templates.js';
import { defineElement } from '../window/elements.js';

export class Quantum extends HTMLElement {
    observers = new Set();

    constructor(options) {
        super();

        const { shadow, mode } = { ...componentOptions, ...options };
        const root = (shadow ? this.attachShadow({ mode }) : this);

        const { template } = this.constructor;
        if (template) {
            this.template = root.appendChild(cloneTemplate(template));
            this.template.onchange = this.slotChangedCallback?.bind(this);
        }
    }

    static define(name, html) {
        if (html) this.template = createTemplate(html);
        defineElement(name, this);
    }

    connectedCallback() {
        for (const observer of this.observers) observer.observe(this);
    }

    disconnectedCallback() {
        for (const observer of this.observers) observer.unobserve(this);
    }
}
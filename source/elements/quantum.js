import { componentOptions } from '../constants/options.js';
import { cloneTemplate } from '../decorators/template.js';
import { createTemplate } from '../document/templates.js';
import { defineElement } from '../window/elements.js';

export class Quantum extends HTMLElement {
    observers = new Set();

    constructor(options) {
        super();

        const { template } = this.constructor;
        if (template) {
            const { shadow, mode } = { ...componentOptions, ...options };
            const root = shadow ? this.attachShadow({ mode }) : this;
            root.appendChild(this.template = cloneTemplate(template));
        }
    }

    static define(name, html) {
        if (html) {
            this.template = createTemplate(html);
        }

        defineElement(name, this);
    }

    connectedCallback() {
        for (const observer of this.observers) {
            observer.observe(this);
        }
    }

    disconnectedCallback() {
        for (const observer of this.observers) {
            observer.unobserve(this);
        }
    }
}
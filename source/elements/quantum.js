import { componentOptions, shadowOptions } from '../constants/options.js';
import { getAttribute, setAttribute } from '../decorators/element.js';
import { createTemplate } from '../document/templates.js';
import { Component } from './component.js';

export class Quantum extends Component {
    slots = new Map();

    constructor(options) {
        super();

        const { shadow, mode } = { ...componentOptions, ...shadowOptions, ...options };
        const { template } = this.constructor;
        if (template) {
            const root = shadow ? this.attachShadow({ mode }) : this;
            root.appendChild(template.content.cloneNode(true));
            for (const slot of root.querySelectorAll('slot')) {
                const elements = [];
                this.slots.set(slot.name, elements);
                slot.addEventListener('slotchange', event => {
                    const current = slot.assignedElements();
                    const previous = elements.splice(0, elements.length, ...current);
                    const added = current.filter(element => !previous.includes(element));
                    const removed = previous.filter(element => !current.includes(element));
                    this.slotChangedCallback(slot, added, removed, current);
                });
            }
        }
    }

    static define(name, html) {
        if (html) {
            this.template = createTemplate(html);
        }

        for (const observedAttribute of this.observedAttributes) {
            Object.defineProperty(this.prototype, observedAttribute, {
                get() { return getAttribute(this, observedAttribute); },
                set(value) { setAttribute(this, observedAttribute, value); }
            });
        }

        customElements.define(name, this);
    }
}
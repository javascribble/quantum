import { componentOptions, shadowOptions } from '../constants/options.js';

export class Component extends HTMLElement {
    elements = new Map();
    slots = new Map();

    constructor(options) {
        super();

        const { template } = this.constructor;
        const { shadow, mode } = {
            ...componentOptions,
            ...shadowOptions,
            ...options
        };

        if (template) {
            const root = shadow ? this.attachShadow({ mode }) : this;
            root.appendChild(template.content.cloneNode(true));
            for (const slot of root.querySelectorAll('slot')) {
                this.elements.set(slot, []);
                this.slots.set(slot.name, slot);
                slot.addEventListener('slotchange', event => {
                    const previous = this.elements.get(slot);
                    const current = slot.assignedElements();
                    this.elements.set(slot, current);

                    this.slotChangedCallback?.(slot, current.difference(previous), previous.difference(current), current);
                });
            }
        }
    }
}
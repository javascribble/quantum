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

        if (template) {
            const root = shadow ? this.attachShadow({ mode }) : this;
            root.appendChild(template.content.cloneNode(true));

            const slots = new Map();
            for (const slot of root.querySelectorAll('slot')) {
                slots.set(slot, []);
                slot.addEventListener('slotchange', event => {
                    const elements = slots.get(slot);
                    const assignedElements = slot.assignedElements();
                    const addedElements = assignedElements.filter(element => !elements.includes(element));
                    const deletedElements = elements.filter(element => !assignedElements.includes(element));
                    this.slotChangedCallback?.(slot, addedElements, deletedElements);
                    slots.set(slot, assignedElements);
                });
            }
        }
    }
}
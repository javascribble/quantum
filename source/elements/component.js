import { componentOptions, shadowOptions } from '../constants/options.js';

export class Component extends HTMLElement {
    slottedElements = new Map();

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
                this.slottedElements.set(slot, []);
                slot.addEventListener('slotchange', event => {
                    const elements = this.slottedElements.get(slot);
                    const assignedElements = slot.assignedElements();
                    const addedElements = assignedElements.filter(element => !elements.includes(element));
                    const deletedElements = elements.filter(element => !assignedElements.includes(element));
                    this.slotChangedCallback?.(addedElements, deletedElements);
                    this.slottedElements.set(slot, assignedElements);
                });
            }
        }
    }
}
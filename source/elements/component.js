import { componentOptions, shadowOptions } from '../constants/options.js';

export class Component extends HTMLElement {
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
                    const previous = [...elements];
                    const current = slot.assignedElements();
                    elements.splice(0, elements.length, ...current);
                    this.slotChangedCallback(slot, current.difference(previous), previous.difference(current), current);
                });
            }
        }
    }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        this[`${slot.name || 'default'}SlotChanged`]?.(slot, addedElements, deletedElements, currentElements);
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (previousValue !== currentValue) {
            this[`${attribute || 'default'}AttributeChanged`]?.(attribute, previousValue, currentValue);
        }
    }

    connectedCallback() {
        this.connected?.();
    }

    disconnectedCallback() {
        this.disconnected?.();
    }

    adoptedCallback() {
        this.adopted?.();
    }
}
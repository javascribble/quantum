import { componentOptions, shadowOptions } from '../constants/options.js';
import { MulticastDelegate } from '../collections/event.js';

export class Component extends HTMLElement {
    onConnected = new MulticastDelegate();
    onDisconnected = new MulticastDelegate();
    onAdopted = new MulticastDelegate();
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
                this.slots.set(slot, []);
                slot.addEventListener('slotchange', event => {
                    const elements = this.slots.get(slot);
                    const assignedElements = slot.assignedElements();
                    const addedElements = assignedElements.filter(element => !elements.includes(element));
                    const deletedElements = elements.filter(element => !assignedElements.includes(element));
                    this.slotChangedCallback?.(slot, addedElements, deletedElements);
                    this.slots.set(slot, assignedElements);
                });
            }
        }
    }

    connectedCallback() {
        this.onConnected.invoke();
    }

    disconnectedCallback() {
        this.onDisconnected.invoke();
    }

    adoptedCallback() {
        this.onAdopted.invoke();
    }
}
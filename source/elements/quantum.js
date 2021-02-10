import { defaultComponentOptions, defaultShadowOptions } from '../constants/options.js';
import { getAttribute, setAttribute } from '../decorators/element.js';
import { createTemplate } from '../decorators/document.js';

export class Quantum extends HTMLElement {
    slots = new Map();

    constructor(options) {
        super();

        const { shadow, mode } = { ...defaultComponentOptions, ...defaultShadowOptions, ...options };
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
                    this.slotChangedCallback?.(slot, current.subtract(previous), previous.subtract(current), current);
                });
            }
        }
    }

    static types = [];

    static define(name, html) {
        if (html) {
            this.template = createTemplate(html);
        }

        if (Array.isArray(this.observedAttributes)) {
            for (const observedAttribute of this.observedAttributes) {
                Object.defineProperty(Quantum.prototype, observedAttribute, {
                    get() { return getAttribute(this, observedAttribute); },
                    set(value) { setAttribute(this, observedAttribute, value); }
                });
            }
        }

        customElements.define(name, this);
        this.types.push(this);
    };
}
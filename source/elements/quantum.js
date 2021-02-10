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

        const prototype = Quantum.prototype;
        const attributes = this.observedAttributes;
        if (Array.isArray(attributes)) {
            for (const attribute of attributes.filter(attribute => !prototype.hasOwnProperty(attribute))) {
                Object.defineProperty(prototype, attribute, {
                    get() { return getAttribute(this, attribute); },
                    set(value) { setAttribute(this, attribute, value); }
                });
            }
        }

        customElements.define(name, this);
        this.types.push(this);
    };
}
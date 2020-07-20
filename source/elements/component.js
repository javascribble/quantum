import { componentOptions } from '../constants/options.js';
import { getAttribute, setAttribute } from '../decorators/element.js';
import { kebabToCamelCase } from '../utilities/format.js';

const callbacks = new Map();

export class Component extends HTMLElement {
    constructor(options) {
        super();

        const { template } = this.constructor;
        const { shadow } = this.options = {
            ...componentOptions,
            ...options
        };

        const root = shadow ? this.attachShadow({ mode: 'open' }) : this;
        if (template) {
            root.appendChild(template.content.cloneNode(true));
        }
    }

    static get observedAttributes() {
        const observableAttributes = [];
        if (Array.isArray(this.attributes)) {
            for (const attribute of this.attributes) {
                const formattedAttribute = kebabToCamelCase(attribute);
                Object.defineProperty(this.prototype, formattedAttribute, {
                    get() { return getAttribute(this, attribute); },
                    set(value) { setAttribute(this, attribute, value); }
                });

                const formattedCallback = `${formattedAttribute}ChangedCallback`;
                if (this.prototype.hasOwnProperty(formattedCallback)) {
                    observableAttributes.push(attribute);
                    if (!callbacks.has(attribute)) {
                        callbacks.set(attribute, formattedCallback);
                    }
                }
            }
        }

        return observableAttributes;
    }

    attributeChangedCallback(attribute, previous, current) {
        this[callbacks.get(attribute)](current, previous);
    }
}
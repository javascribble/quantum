import { getAttribute, setAttribute } from '../decorators/attribute.js';
import { formatAttribute } from '../primitives/string.js';

export const define = (name, type) => {
    const attributes = type.observedAttributes;
    if (Array.isArray(attributes)) {
        for (const attribute of attributes) {
            Object.defineProperty(type.prototype, formatAttribute(attribute), {
                get() { return getAttribute(this, attribute); },
                set(value) { setAttribute(this, attribute, value); }
            });
        }
    }

    customElements.define(name, type);
};

export const template = html => {
    const element = document.createElement('template');
    element.innerHTML = html;
    return element;
};
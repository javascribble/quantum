import { getAttribute, setAttribute } from '../decorators/element.js';
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
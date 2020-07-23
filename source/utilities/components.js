import { getAttribute, setAttribute } from '../decorators/element.js';
import { formatAttribute } from '../functions/format.js';

export const define = (name, type) => {
    for (const attribute of type.observedAttributes) {
        Object.defineProperty(type.prototype, formatAttribute(attribute), {
            get() { return getAttribute(this, attribute); },
            set(value) { setAttribute(this, attribute, value); }
        });
    }

    customElements.define(name, type);
};
import { getAttribute, setAttribute } from '../decorators/element.js';

export const defineElement = (name, element) => {
    if (Array.isArray(element.observedAttributes)) {
        for (const observedAttribute of element.observedAttributes) {
            Object.defineProperty(element.prototype, observedAttribute, {
                get() { return getAttribute(this, observedAttribute); },
                set(value) { setAttribute(this, observedAttribute, value); }
            });
        }
    }

    customElements.define(name, element);
}
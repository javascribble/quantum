import { getAttribute, setAttribute } from '../decorators/element.js';

export const defineAttributes = (element, attributes) => {
    for (const attribute of attributes) {
        Object.defineProperty(element, attribute, {
            get() {
                return getAttribute(this, attribute);
            },
            set(value) {
                setAttribute(this, attribute, value);
            }
        });
    }

    return attributes;
};
import { set, remove } from '../aliases/elements.js';

export const flag = (element, attribute, value) => {
    if (value === true || value === "true") {
        set(element, attribute, '');
    } else {
        remove(element, attribute);
    }
};
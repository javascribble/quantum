import { get, set, has, remove } from '../aliases/elements.js';

export const getTyped = (element, attribute) => {
    if (has(element, attribute)) {
        let value = get(element, attribute);
        if (value === "true") {
            return true;
        } else if (value === "false") {
            return false;
        } else if (isNaN(value)) {
            return value;
        } else {
            return Number(value);
        }
    }
};

export const setTyped = (element, attribute, value) => {
    if (value === true) {
        set(element, attribute, '');
    } else if (value === false) {
        remove(element, attribute);
    } else {
        set(element, attribute, value);
    }
};
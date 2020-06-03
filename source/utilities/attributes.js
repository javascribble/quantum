import { get, set, has, remove } from '../aliases/elements.js';

export const getTyped = (element, attribute) => {
    if (has(element, attribute)) {
        let value = get(element, attribute);
        switch (value) {
            case '':
            case 'true': return true;
            case 'false': return false;
            case isNaN(value): return value;
            default: return Number(value);
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
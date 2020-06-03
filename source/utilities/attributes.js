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
    } else {
        return null;
    }
};

export const setTyped = (element, attribute, value) => {
    switch (value) {
        case true:
            set(element, attribute, '');
            break;
        case false:
        case null:
        case undefined:
            remove(element, attribute);
            break;
        default:
            set(element, attribute, value);
            break;
    }
};
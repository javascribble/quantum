import { hasAttribute, getAttribute, setAttribute, removeAttribute } from '../abstractions/element.js';
import { isNaN, number } from '../abstractions/number.js';

export const getTypedAttribute = (element, attribute) => {
    if (hasAttribute(element, attribute)) {
        const stringValue = getAttribute(element, attribute);
        switch (stringValue) {
            case '':
            case 'true': return true;
            case 'false': return false;
            default:
                const numberValue = number(stringValue);
                return isNaN(numberValue) ? stringValue : numberValue;
        }
    }

    return null;
};

export const setTypedAttribute = (element, attribute, value) => {
    switch (value) {
        case true: return setAttribute(element, attribute, '');
        case false:
        case null:
        case undefined: return removeAttribute(element, attribute);
        default: return setAttribute(element, attribute, value);
    }
};
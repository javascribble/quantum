import { attributeOptions } from '../constants/options.js';

export const getAttribute = (element, attribute) => {
    const value = element.getAttribute(attribute);

    if (attributeOptions.truthyValues.some(element => element === value)) {
        return true;
    }

    if (attributeOptions.falsyValues.some(element => element === value)) {
        return false;
    }

    return value === attribute ? true : value;
};

export const setAttribute = (element, attribute, value) => {
    switch (value) {
        case false:
        case null:
        case undefined: return element.removeAttribute(attribute);
        case true: return element.setAttribute(attribute, attribute);
        default: return element.setAttribute(attribute, value);
    }
};
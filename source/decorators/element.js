import { attributeOptions } from '../constants/options.js';

const { truthy, falsy } = attributeOptions.values;

export const castAttribute = (attribute, value) => {
    if (truthy.some(element => element === value)) {
        return true;
    }

    if (falsy.some(element => element === value)) {
        return false;
    }

    return value === attribute ? true : value;
};

export const getAttribute = (element, attribute) => castAttribute(attribute, element.getAttribute(attribute));

export const setAttribute = (element, attribute, value) => {
    switch (value) {
        case false:
        case null:
        case undefined: return element.removeAttribute(attribute);
        case true: return element.setAttribute(attribute, attribute);
        default: return element.setAttribute(attribute, value);
    }
};
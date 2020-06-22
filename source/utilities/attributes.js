import { get, set, has, remove } from '../aliases/element.js';
import { defineProperty } from '../aliases/object.js';
import { convert } from './strings.js';

export const defineAttributes = (object, properties) => {
    for (const property of properties) {
        defineProperty(object, property, {
            get() {
                return getTypedAttribute(this, property);
            },
            set(value) {
                setTypedAttribute(this, property, value);
            }
        });
    }

    return properties;
};

export const getTypedAttribute = (element, attribute) => has(element, attribute) ? convert(get(element, attribute)) : null;

export const setTypedAttribute = (element, attribute, value) => {
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
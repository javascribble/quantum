import { get, set, has, remove } from '../aliases/element.js';
import { defineProperty } from '../aliases/object.js';

export const defineAccessors = (object, attributes) => {
    for (const attribute of attributes) {
        defineProperty(object, attribute, {
            get() {
                return getTypedAttribute(this, attribute);
            },
            set(value) {
                setTypedAttribute(this, attribute, value);
            }
        });
    }
};

export const getTypedAttribute = (element, attribute) => {
    if (has(element, attribute)) {
        let value = get(element, attribute);
        switch (value) {
            case '':
            case 'true': return true;
            case 'false': return false;
            default:
                const number = Number(value);
                return isNaN(number) ? value : number;
        }
    } else {
        return null;
    }
};

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
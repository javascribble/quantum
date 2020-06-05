import { entries } from '../aliases/object.js';

export const iterate = (object, delegate) => {
    if (object) {
        entries(object).forEach(entry => delegate(entry[0], entry[1]));
    }
};

export const map = (object, delegate) => {
    object = { ...object };
    for (const [key, value] of entries(object)) {
        object[key] = delegate(value);
    }

    return object;
};
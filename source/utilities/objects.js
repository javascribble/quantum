import { entries } from '../aliases/object.js';

export const map = (object, delegate) => {
    object = { ...object };
    for (const [key, value] of entries(object)) {
        object[key] = delegate(value);
    }

    return object;
};
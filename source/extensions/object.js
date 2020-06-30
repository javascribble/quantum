import { forEach, map, filter } from '../abstractions/array.js';
import { entries, fromEntries } from '../abstractions/object.js';

export const filterEntries = (object, iterator) => fromEntries(filter(entries(object), iterator));

export const mapEntries = (object, iterator) => fromEntries(map(entries(object), iterator));

export const iterateEntries = (object, iterator) => forEach(entries(object), iterator);
import { entries, fromEntries } from '../aliases/object.js';

export const forEach = (object, iterator) => entries(object).forEach(iterator);

export const filter = (object, iterator) => fromEntries(entries(object).filter(iterator));

export const map = (object, iterator) => fromEntries(entries(object).map(iterator));
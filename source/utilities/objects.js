import { entries, fromEntries } from '../aliases/object.js';

export const iterate = (object, delegate) => entries(object).forEach(entry => delegate.apply(null, entry));

export const filter = (object, predicate) => fromEntries(entries(object).filter(predicate));

export const map = (object, predicate) => fromEntries(entries(object).map(predicate));
import { entries, fromEntries } from '../aliases/object.js';

const apply = delegate => entry => delegate.apply(null, entry);

export const iterate = (object, delegate) => entries(object).forEach(apply(delegate));

export const filter = (object, delegate) => fromEntries(entries(object).filter(apply(delegate)));

export const map = (object, delegate) => fromEntries(entries(object).map(apply(delegate)));
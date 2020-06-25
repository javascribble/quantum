import { random } from '../aliases/math.js';

export const define = (type, prefix = 'quantum') => customElements.define(`${prefix}-${type.name.toLowerCase()}`, type);

export const id = (length = 32) => length === 0 ? '' : `${(random() * 16 | 0).toString(16)}${id(length - 1)}`;
import { options } from '../constants/defaults.js';

export const define = (type) => customElements.define(`${options.prefix}-${type.name.toLowerCase()}`, type);
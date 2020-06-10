import { options } from '../constants/options.js';

export const define = (type) => customElements.define(`${options.tagPrefix}-${type.name.toLowerCase()}`, type);

export const shadow = (element, options) => element.attachShadow({ mode: options.shadowMode, ...options });
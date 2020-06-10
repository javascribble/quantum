import { options } from '../constants/options.js';

export const id = (length = options.idLength) => length === 0 ? '' : `${(Math.random() * 16 | 0).toString(16)}${id(length - 1)}`;

export const define = (type) => customElements.define(`${options.tagPrefix}-${type.name.toLowerCase()}`, type);

export const shadow = (element) => element.attachShadow({ mode: options.shadowMode });
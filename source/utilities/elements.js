export const define = (type, prefix = 'quantum') => customElements.define(`${prefix}-${type.name.toLowerCase()}`, type);

export const id = (length = 32) => length === 0 ? '' : `${(Math.random() * 16 | 0).toString(16)}${id(length - 1)}`;

export const shadow = (element, options = { mode: 'open' }) => element.attachShadow(options);
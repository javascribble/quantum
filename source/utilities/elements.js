export const define = (type) => customElements.define(`quantum-${type.name.toLowerCase()}`, type);

export const shadow = (element, options) => element.attachShadow({ mode: 'open', ...options });

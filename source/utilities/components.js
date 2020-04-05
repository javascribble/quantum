export const defineOverride = (name, type, tag) => define(name, type, { extends: tag });

export const define = (name, type, options) => customElements.define(`${name}-component`, type, options);

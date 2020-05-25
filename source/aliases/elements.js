export const define = (name, type) => customElements.define(name, type);

export const query = (element, selector) => element.querySelector(selector);

export const queryAll = (element, selector) => element.querySelectorAll(selector);
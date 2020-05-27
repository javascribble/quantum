export const query = (element, selector) => element.querySelector(selector);

export const queryAll = (element, selector) => element.querySelectorAll(selector);

export const shadow = (element, options = { mode: 'open' }) => element.attachShadow(options);

export const clone = (element, deep = true) => (element.content || element).cloneNode(deep);
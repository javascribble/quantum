export const append = (element, child) => element.appendChild(child);

export const query = (element, selector) => element.querySelector(selector);

export const queryAll = (element, selector) => element.querySelectorAll(selector);

export const dispatch = (element, event) => element.dispatchEvent(event);

export const addListener = (element, event, handler) => element.addEventListener(event, handler);

export const removeListener = (element, event, handler) => element.removeEventListener(event, handler);

export const shadow = (element, options = { mode: 'open' }) => element.attachShadow(options);

export const clone = (element, deep = true) => (element.content || element).cloneNode(deep);
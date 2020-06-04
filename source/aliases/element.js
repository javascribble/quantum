export const append = (element, child) => element.appendChild(child);

export const query = (element, selector) => element.querySelector(selector);

export const queryAll = (element, selector) => element.querySelectorAll(selector);

export const on = (element, event, handler) => element.addEventListener(event, handler);

export const off = (element, event, handler) => element.removeEventListener(event, handler);

export const get = (element, attribute) => element.getAttribute(attribute);

export const set = (element, attribute, value) => element.setAttribute(attribute, value);

export const has = (element, attribute) => element.hasAttribute(attribute);

export const remove = (element, attribute) => element.removeAttribute(attribute);

export const toggle = (element, attribute) => element.toggleAttribute(attribute);
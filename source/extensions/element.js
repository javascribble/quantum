import { assign } from '../abstractions/object.js';

export const setStyle = (element, style) => assign(element.style, style);

export const addClasses = (element, ...names) => element.classList.add(...names);

export const removeClasses = (element, ...names) => element.classList.remove(...names);

export const toggleClass = (element, name, force) => element.classList.toggle(name, force);

export const containsClass = (element, name) => element.classList.contians(name);
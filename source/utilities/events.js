import { dispatchEvent } from '../../references/abstract-dom.js';
import { eventDefault } from '../constants/defaults.js';

export const createEvent = (name, options) => new CustomEvent(name, { ...eventDefault, ...options });

export const createDispatcher = (name, element) => options => dispatchEvent(element, createEvent(name, options));
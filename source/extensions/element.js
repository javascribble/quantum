import { createEvent } from '../functions/event.js';

export const createDispatcher = (element, name) => options => element.dispatchEvent(createEvent(name, options))
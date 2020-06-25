export const createEvent = (name, options) => new CustomEvent(name, { cancelable: true, ...options });

export const createDispatcher = (element, name) => options => element.dispatchEvent(createEvent(name, options));

export const stopPropagation = (event) => event.stopPropagation();

export const preventDefault = (event) => event.preventDefault();
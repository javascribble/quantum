export const createEvent = (name, options) => new CustomEvent(name, { cancelable: true, ...options });

export const createDispatcher = (name, element) => options => element.dispatchEvent(createEvent(name, options));
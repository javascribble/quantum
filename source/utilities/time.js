import { debounceOptions } from '../constants/options.js';

const timeouts = new Map();

const execute = (action, argument) => () => {
    timeouts.delete(action);
    action(argument);
};

export const debounce = (action, options) => argument => {
    const { delay, immediate } = { ...debounceOptions, ...options };

    let timeout = timeouts.get(action);
    if (timeout) {
        clearTimeout(timeout);
    }

    if (timeout || !immediate) {
        timeout = setTimeout(execute(action, argument), delay);
    } else {
        action(argument);
        timeout = setTimeout(() => timeouts.delete(action), delay);
    }

    timeouts.set(action, timeout);
};
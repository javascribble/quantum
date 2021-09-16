import { debounceOptions } from '../constants/options.js';

const timeouts = new Map();

const executeImmediate = (action, argument) => {
    action(argument);
    return () => timeouts.delete(action);
};

const executeDelayed = (action, argument) => () => {
    timeouts.delete(action);
    action(argument);
};

export const debounce = (action, options) => argument => {
    const { delay, immediate } = { ...debounceOptions, ...options };

    const timeout = timeouts.get(action);
    if (timeout) {
        clearTimeout(timeout);
    }

    const method = (timeout || !immediate) ? executeDelayed : executeImmediate;
    timeouts.set(action, setTimeout(method(action, argument), delay));
};
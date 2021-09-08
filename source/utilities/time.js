import { eventOptions } from '../constants/options.js';

const actions = new Map();

const execute = (action, argument) => () => {
    actions.delete(action);
    action(argument);
};

export const debounce = action => argument => {
    if (actions.has(action)) {
        clearTimeout(actions.get(action));
    }

    actions.set(action, setTimeout(execute(action, argument), eventOptions.debounce));
};
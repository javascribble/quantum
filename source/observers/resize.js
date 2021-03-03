import { eventOptions } from '../constants/options.js';

const observed = new Set();

const dispatch = () => {
    const event = new CustomEvent('resize');
    for (const element of observed) {
        element.dispatchEvent(event);
    }

    observed.clear();
};

let timeout = 0;
const observe = (entries, observer) => {
    for (const { target } of entries) {
        if (!observed.has(target)) {
            observed.add(target);
        }
    }

    clearTimeout(timeout);
    timeout = setTimeout(dispatch, eventOptions.debounce);
};

export const resizeObserver = new ResizeObserver(observe);
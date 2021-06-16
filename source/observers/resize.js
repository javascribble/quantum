import { eventOptions } from '../constants/options.js';

const observed = new Set();

const dispatch = () => {
    for (const entry of observed) {
        entry.target.dispatchEvent(new CustomEvent('resize', { detail: entry }));
    }

    observed.clear();
};

let timeout = 0;
const observe = entries => {
    for (const entry of entries) {
        if (!observed.has(entry)) {
            observed.add(entry);
        }
    }

    clearTimeout(timeout);
    timeout = setTimeout(dispatch, eventOptions.debounce);
};

export const resizeObserver = new ResizeObserver(observe);
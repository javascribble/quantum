import { debounce } from '../utilities/time.js';

const dispatch = entries => {
    for (const entry of entries) {
        entry.target.dispatchEvent(new CustomEvent('resize', { detail: entry }));
    }
};

export const resizeObserver = new ResizeObserver(debounce(dispatch));
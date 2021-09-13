import { debounce } from '../utilities/time.js';

const dispatch = entries => {
    for (const entry of entries) {
        const element = entry.target;
        element.resize?.() || element.dispatchEvent(new Event('resize'));
    }
};

export const resizeObserver = new ResizeObserver(debounce(dispatch));
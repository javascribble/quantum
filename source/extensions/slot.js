import { difference } from './array.js';

export const observe = (slot, onAdd, onDelete) => {
    let previousElements = [];
    slot.addEventListener('slotchange', _ => {
        const currentElements = slot.assignedElements();
        difference(currentElements, previousElements).forEach(onAdd);
        difference(previousElements, currentElements).forEach(onDelete);
        previousElements = currentElements;
    });
};
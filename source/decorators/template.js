import { ObservableSet } from '../collections/sets.js';

export const cloneTemplate = template => {
    const clone = template.content.cloneNode(true);
    const slots = clone.slots = new Map();
    for (const slot of clone.querySelectorAll('slot')) {
        const elements = new ObservableSet();
        slots.set(slot.name, elements);
        slot.addEventListener('slotchange', event => {
            const current = slot.assignedElements();
            const previous = Array.from(elements);
            const added = current.filter(element => !previous.includes(element));
            const deleted = previous.filter(element => !current.includes(element));
            added.forEach(element => elements.add(element));
            deleted.forEach(element => elements.delete(element));
            slots.onChange?.(slot, added, deleted, current);
        });
    }

    return clone;
};
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
            current.filter(element => !previous.includes(element)).forEach(element => elements.add(element));
            previous.filter(element => !current.includes(element)).forEach(element => elements.delete(element));
        });
    }

    return clone;
};
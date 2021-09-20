export const cloneTemplate = template => {
    const clone = template.content.cloneNode(true);
    const slots = clone.slots = new Set(clone.querySelectorAll('slot'));
    for (const slot of slots) {
        const elements = [];
        slot.addEventListener('slotchange', event => {
            const current = slot.assignedElements();
            const previous = elements.splice(0, elements.length, ...current);
            const added = current.filter(element => !previous.includes(element));
            const removed = previous.filter(element => !current.includes(element));
            clone.slotChangedCallback?.(slot, added, removed, current);
        });
    }

    return clone;
};
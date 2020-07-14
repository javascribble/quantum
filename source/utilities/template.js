export const template = html => {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
};

export const observeSlot = (slot, onAdd, onDelete) => {
    let previousElements = [];
    slot.onslotchange = event => {
        const currentElements = slot.assignedElements();
        currentElements.filter(element => !previousElements.includes(element)).forEach(onAdd);
        previousElements.filter(element => !currentElements.includes(element)).forEach(onDelete);
        previousElements = currentElements;
    };
};
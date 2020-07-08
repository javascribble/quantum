export const template = html => {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
};

export const onSlotChange = (slot, onAdd, onDelete) => {
    let previousElements = [];
    return event => {
        const currentElements = slot.assignedElements();
        currentElements.difference(previousElements).forEach(onAdd);
        previousElements.difference(currentElements).forEach(onDelete);
        previousElements = currentElements;
    };
};
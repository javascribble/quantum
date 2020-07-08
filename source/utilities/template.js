export const template = html => {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
};

export const onSlotChange = (slot, onAdd, onDelete) => {
    let previousElements = [];
    return event => {
        const currentElements = slot.assignedElements();
        currentElements.filter(element => !previousElements.includes(element)).forEach(onAdd);
        previousElements.filter(element => !currentElements.includes(element)).forEach(onDelete);
        previousElements = currentElements;
    };
};
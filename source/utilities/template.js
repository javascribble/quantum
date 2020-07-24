export const template = html => {
    const element = document.createElement('template');
    element.innerHTML = html;
    return element;
};

export const slotListener = (slot, onAdd, onDelete) => {
    let elements = [];
    return event => {
        const assignedElements = slot.assignedElements();
        assignedElements.filter(element => !elements.includes(element)).forEach(onAdd);
        elements.filter(element => !assignedElements.includes(element)).forEach(onDelete);
        elements = assignedElements;
    };
};
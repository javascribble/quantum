export const template = (html, ...css) => {
    if (css.length > 0) {
        html = `<style>${css.join('')}</style>${html}`;
    }

    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
};

export const observeSlot = (slot, onAdd, onDelete) => {
    let previousElements = [];
    slot.addEventListener('slotchange', event => {
        const currentElements = slot.assignedElements();
        currentElements.subtract(previousElements).forEach(onAdd);
        previousElements.subtract(currentElements).forEach(onDelete);
        previousElements = currentElements;
    });
};
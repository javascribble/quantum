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
    slot.addEventListener('slotchange', _ => {
        const currentElements = slot.assignedElements();
        subtract(currentElements, previousElements).forEach(onAdd);
        subtract(previousElements, currentElements).forEach(onDelete);
        previousElements = currentElements;
    });
};
import { addEventListener } from '../abstractions/element.js';
import { forEach } from '../abstractions/array.js';
import { join } from '../abstractions/string.js';
import { createElement } from '../abstractions/window.js';

export const template = (html, ...css) => {
    if (css.length > 0) {
        html = `<style>${join(css, '')}</style>${html}`;
    }

    const template = createElement('template');
    template.innerHTML = html;
    return template;
};

export const observeSlot = (slot, onAdd, onDelete) => {
    let previousElements = [];
    addEventListener(slot, 'slotchange', _ => {
        const currentElements = slot.assignedElements();
        forEach(subtract(currentElements, previousElements), onAdd);
        forEach(subtract(previousElements, currentElements), onDelete);
        previousElements = currentElements;
    });
};
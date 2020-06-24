import { ObservableSet } from '../extensions/collections.js';
import { difference } from '../utilities/arrays.js';
import { create } from '../aliases/document.js';

export const template = (html, ...css) => {
    if (css.length > 0) {
        html = `<style>${css.join('')}</style>${html}`;
    }

    const template = create('template');
    template.innerHTML = html;
    return template;
};

export const clone = (element, deep = true) => (element.content || element).cloneNode(deep);

export const repeat = (interpolation, models, delimiter) => models.map(interpolation).join(delimiter || '');

export const observeSlot = (slot) => {
    const observableSet = new ObservableSet();
    slot.addEventListener('slotchange', (event) => {
        const a = slot.assignedElements();
        const b = Array.from(observableSet);
        difference(a, b).forEach(value => observableSet.add(value));
        difference(b, a).forEach(value => observableSet.delete(value));
    });

    return observableSet;
}
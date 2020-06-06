import { ObservableSet } from '../extensions/ObservableSet.js';
import { difference } from '../utilities/arrays.js';
import { query } from '../aliases/element.js';

export const template = (html, ...css) => {
    if (css.length > 0) {
        html = `<style>${css.join('')}</style>${html}`;
    }

    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
};

export const clone = (element, deep = true) => (element.content || element).cloneNode(deep);

export const repeat = (interpolation, models, delimiter) => models.map(interpolation).join(delimiter || '');

export const observeSlot = (root, name) => {
    const observableSet = new ObservableSet();
    const slot = query(root, name ? `slot[name=${name}]` : 'slot');
    slot.addEventListener('slotchange', (event) => {
        const a = slot.assignedElements();
        const b = Array.from(observableSet);
        difference(a, b).forEach(observableSet.add.bind(observableSet));
        difference(b, a).forEach(observableSet.delete.bind(observableSet));
    });

    return observableSet;
}
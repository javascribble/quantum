import { getJson, setJson } from '../decorators/storage.js';
import { storageOptions } from '../constants/options.js';
import { debounce } from '../utilities/time.js';

const storage = getJson(storageOptions.id) || {};
const elements = [];

const format = element => {
    const attributes = Object.fromEntries(element.constructor.observedAttributes?.map(attribute => [attribute, element[attribute]]) || []);
    const children = element.slots.values().flat().filter(child => child.id).map((child => child.id));
    return [element.id, { children, attributes }];
};

const update = () => setJson(storageOptions.id, Object.fromEntries(elements.map(format)));

export const persist = element => {
    const storedElement = storage[element.id];
    if (storedElement) {
        Object.assign(element, storedElement.attributes);
        for (const child of storedElement.children) {
            element.appendChild(document.querySelector(`#${child}`));
        }
    }

    elements.push(element);
    element.addEventListener('attributechange', debounce(update));
    element.shadowRoot.addEventListener('slotchange', debounce(update));
};
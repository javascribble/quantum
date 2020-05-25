import { createElement } from '../aliases/document.js';

export const template = (html) => {
    const template = createElement('template');
    template.innerHTML = html;
    return template;
};

export const clone = (template) => template.content.cloneNode(true);
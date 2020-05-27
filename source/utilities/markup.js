import { create } from '../aliases/document.js';

export const template = (html) => {
    const template = create('template');
    template.innerHTML = html;
    return template;
};

export const repeat = (html, models, delimiter) => models.map(html).join(delimiter || '');
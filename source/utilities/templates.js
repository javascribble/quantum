import { create } from '../aliases/document.js';

export const template = (html) => {
    const template = create('template');
    template.innerHTML = html;
    return template;
};

export const repeat = (interpolation, models, delimiter) => models.map(interpolation).join(delimiter || '');
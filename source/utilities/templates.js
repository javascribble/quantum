import { create } from '../aliases/document.js';

export const template = (html, ...css) => {
    if (css.length > 0) {
        html = `<style>${css.join('')}</style>${html}`;
    }

    const template = create('template');
    template.innerHTML = html;
    return template;
};

export const repeat = (interpolation, models, delimiter) => models.map(interpolation).join(delimiter || '');
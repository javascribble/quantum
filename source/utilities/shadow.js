import { clone } from './templates.js';

export const attachShadow = (element, template) => {
    const shadow = element.attachShadow({ mode: 'closed' });
    shadow.appendChild(clone(template));
    return shadow;
};

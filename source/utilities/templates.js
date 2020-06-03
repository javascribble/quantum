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
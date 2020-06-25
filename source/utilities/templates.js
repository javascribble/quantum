export const template = (html, ...css) => {
    if (css.length > 0) {
        html = `<style>${css.join('')}</style>${html}`;
    }

    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
};
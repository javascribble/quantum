export const define = (name, type) => customElements.define(`${name}-component`, type);

export const template = (html) => {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
};
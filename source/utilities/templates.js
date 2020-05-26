export const template = (html) => {
    const template = create('template');
    template.innerHTML = html;
    return template;
};

export const clone = (template) => template.content.cloneNode(true);
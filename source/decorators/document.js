export const createTemplate = html => {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
};
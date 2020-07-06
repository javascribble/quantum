export const html = (strings, ...expressions) => {
    const template = document.createElement('template');
    template.innerHTML = strings[0];
    return template;
};
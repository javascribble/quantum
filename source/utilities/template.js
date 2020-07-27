export const template = html => {
    const element = document.createElement('template');
    element.innerHTML = html;
    return element;
};
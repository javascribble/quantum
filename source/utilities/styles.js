export const computedStyle = getComputedStyle(document.documentElement);

export const addClass = (element, name) => element.classList.add(name);

export const removeClass = (element, name) => element.classList.remove(name);

export const hasClass = (element, name) => element.classList.contains(name);

export const toggleClass = (element, name) => element.classList.toggle(name);
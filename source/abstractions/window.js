export const requestAnimationFrame = window.requestAnimationFrame.bind(window);
export const cancelAnimationFrame = window.cancelAnimationFrame.bind(window);
export const createElement = document.createElement.bind(document);
export const now = performance.now.bind(performance);
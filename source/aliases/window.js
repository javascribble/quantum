export const requestFrame = (delegate) => window.requestAnimationFrame(delegate);
export const cancelFrame = (frame) => window.cancelAnimationFrame(frame);
export const now = () => window.performance.now();
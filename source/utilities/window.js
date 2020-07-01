import { toLowerCase } from '../abstractions/string.js';

export const define = (type, prefix = 'quantum', converter = type => toLowerCase(type.name)) => customElements.define(`${prefix}-${converter(type)}`, type);

export const createElement = (tag) => document.createElement(tag);

export const animate = (delegate) => {
    let frame = 0;
    let previousTime = performance.now();
    const runFrame = (currentTime) => {
        let deltaTime = currentTime - previousTime;
        if (delegate(deltaTime)) {
            previousTime = currentTime;
            frame = requestAnimationFrame(runFrame);
        }
    };

    runFrame(previousTime);
    return () => cancelAnimationFrame(frame);
};
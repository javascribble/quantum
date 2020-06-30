import { toLowerCase } from '../abstractions/string.js';
import { now, requestAnimationFrame, cancelAnimationFrame } from '../abstractions/window.js';

export const define = (type, prefix = 'quantum', converter = type => toLowerCase(type.name)) => customElements.define(`${prefix}-${converter(type)}`, type);

export const animate = (delegate) => {
    let frame = 0;
    let previousTime = now();
    const runFrame = (currentTime) => {
        let deltaTime = currentTime - previousTime;
        if (delegate(deltaTime)) {
            previousTime = currentTime;
            frame = requestAnimationFrame(runFrame);
        }
    };

    frame = requestAnimationFrame(runFrame);
    return () => cancelAnimationFrame(frame);
};
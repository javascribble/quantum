import { now, define } from '../../references/abstract-dom.js';
import { toLowerCase } from '../abstractions/string.js';

export const defineElement = (type, format = type => toLowerCase(type.name)) => define(`quantum-${format(type)}`, type);

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

    runFrame(previousTime);
    return {
        cancel: () => cancelAnimationFrame(frame)
    };
};
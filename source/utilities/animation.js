import { requestFrame, cancelFrame } from '../aliases/window.js';

export const animate = (delegate) => {
    let frame = 0;
    let previousTime = performance.now();
    const runFrame = (currentTime) => {
        let deltaTime = (currentTime - previousTime);
        if (delegate(deltaTime)) {
            previousTime = currentTime;
            frame = requestFrame(runFrame);
        }
    };

    frame = requestFrame(runFrame);
    return () => cancelFrame(frame);
};
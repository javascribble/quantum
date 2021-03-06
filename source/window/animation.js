export const animate = animation => {
    const time = { delta: 0, elapsed: 0 };

    let previous = performance.now();
    const invoke = current => {
        const delta = current - previous;
        time.elapsed += delta;
        time.delta = delta;
        previous = current;
        animation(time);
    };

    let frame;
    const iterate = current => {
        invoke(current);
        if (frame) frame = requestAnimationFrame(iterate);
    };

    const start = () => frame = requestAnimationFrame(iterate);
    const step = () => frame = requestAnimationFrame(invoke);
    const stop = () => frame = cancelAnimationFrame(frame);
    return { start, step, stop };
};
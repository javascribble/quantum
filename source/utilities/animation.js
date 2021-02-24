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

    let frame = 0;
    const iterate = current => {
        invoke(current);
        frame = requestAnimationFrame(iterate);
    };

    const start = () => frame = requestAnimationFrame(iterate);
    const step = () => frame = requestAnimationFrame(invoke);
    const stop = () => cancelAnimationFrame(frame);
    return { start, step, stop };
};
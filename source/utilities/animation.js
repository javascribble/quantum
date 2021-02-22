export const animate = animation => {
    let frame = 0;
    let previous = performance.now();
    const time = { delta: 0, elapsed: 0 };
    const iterate = current => {
        const delta = current - previous;
        time.delta = delta;
        time.elapsed += delta;
        if (animation(time)) {
            previous = current;
            frame = requestAnimationFrame(iterate);
        }
    };

    frame = requestAnimationFrame(iterate);
    return { cancel: () => cancelAnimationFrame(frame) };
};
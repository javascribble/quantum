export const animate = animation => {
    const initial = performance.now();
    const time = { delta: 0, elapsed: 0 };

    let frame = 0;
    let previous = initial;
    const iterate = current => {
        time.delta = current - previous;
        time.elapsed = current - initial;
        if (animation(time)) {
            previous = current;
            frame = requestAnimationFrame(iterate);
        }
    };

    frame = requestAnimationFrame(iterate);
    return { cancel: () => cancelAnimationFrame(frame) };
};
export const animate = animation => {
    const time = {
        start: performance.now()
    };

    let frame;
    time.previous = time.start;
    const iterate = timestamp => {
        time.delta = timestamp - time.previous;
        time.elapsed = timestamp - time.start;
        time.current = timestamp;
        if (animation(time)) {
            time.previous = timestamp;
            frame = requestAnimationFrame(iterate);
        }
    };

    iterate(time.start);
    return { cancel: () => cancelAnimationFrame(frame) };
};
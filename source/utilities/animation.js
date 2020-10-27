export const animate = animation => {
    const startTime = performance.now();
    let frame, previousTime = startTime;
    const iterate = currentTime => {
        if (animation(currentTime - previousTime, currentTime - startTime)) {
            previousTime = currentTime;
            frame = requestAnimationFrame(iterate);
        }
    };

    iterate(startTime);
    return { cancel: () => cancelAnimationFrame(frame) };
};
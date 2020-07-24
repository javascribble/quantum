export const animate = animation => {
    const startTime = performance.now();
    let frame, previousTime = startTime;
    ((currentTime) => {
        if (animation(currentTime - previousTime, currentTime - startTime)) {
            previousTime = currentTime;
            frame = requestAnimationFrame(iterate);
        }
    })(startTime);

    return () => cancelAnimationFrame(frame);
};
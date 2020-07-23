export const animate = frameHandler => {
    let frame = 0;
    const time = {
        startTime: performance.now()
    };

    const handleAnimationFrame = (frameTime) => {
        time.deltaTime = frameTime - time.previousTime;
        time.elapsedTime = frameTime - time.startTime;
        time.currentTime = frameTime;
        if (frameHandler(time)) {
            frame = requestAnimationFrame(handleAnimationFrame);
            time.previousTime = frameTime;
        }
    };

    handleAnimationFrame(time.previousTime = time.startTime);
    return () => cancelAnimationFrame(frame);
};
export const define = (type, format = type => type.name.toLowerCase()) => customElements.define(`quantum-${format(type)}`, type);

export const animate = (delegate) => {
    let frame = 0;
    let previousTime = performance.now();
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
export const define = type => {
    const template = document.createElement('template');
    template.innerHTML = type.template;
    type.prototype.template = template;

    customElements.define(`quantum-${type.name.toLowerCase()}`, type);
};

export const animate = frameHandler => {
    let frame = 0;
    const state = {
        startTime: performance.now()
    };

    state.previousTime = state.startTime;
    const handleAnimationFrame = (time) => {
        state.deltaTime = time - state.previousTime;
        state.elapsedTime = time - state.startTime;
        state.currentTime = time;
        if (frameHandler(state)) {
            frame = requestAnimationFrame(handleAnimationFrame);
            state.previousTime = time;
        }
    };

    handleAnimationFrame(state.startTime);
    return () => cancelAnimationFrame(frame);
};
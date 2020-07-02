export const define = type => customElements.define(`quantum-${type.name.toLowerCase()}`, type);

export const animate = animation => {
    let frame = 0;
    const run = (time) => {
        animation(time);
        frame = requestAnimationFrame(run);
    };

    return {
        start: () => frame = requestAnimationFrame(run),
        stop: () => cancelAnimationFrame(frame)
    };
};
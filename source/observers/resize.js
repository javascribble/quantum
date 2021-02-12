const observe = (entries, observer) => {
    for (const { target } of entries) {
        target.dispatchEvent(new Event('resize'));
    }
};

export const resizeObserver = new ResizeObserver(observe);
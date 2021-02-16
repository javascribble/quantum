const observe = (entries, observer) => {
    for (const { target } of entries) {
        target.dispatchEvent(new CustomEvent('resize'));
    }
};

export const resizeObserver = new ResizeObserver(observe);
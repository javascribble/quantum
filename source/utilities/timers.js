const events = new Map();

export const setDebounce = (event, delegate, timeout = 1000) => {
    if (events.has(event)) {
        clearTimeout(events.get(event));
    }

    const invoke = () => {
        events.delete(event);
        delegate();
    };

    events.set(event, setTimeout(invoke, timeout));
};

export const clearDebounce = event => clearTimeout(events.remove(event));
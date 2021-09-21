export class EventObserver extends Map {
    observe(element) {
        for (const [event, handler] of this) {
            element.addEventListener(event, handler);
        }
    }

    unobserve(element) {
        for (const [event, handler] of this) {
            element.removeEventListener(event, handler);
        }
    }
}
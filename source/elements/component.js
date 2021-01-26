export class Component extends HTMLElement {
    slots = new Map();

    constructor(options) {
        super();

        const { shadow, mode } = { shadow: true, mode: 'open', ...options };
        const { template } = this.constructor;
        if (template) {
            const root = shadow ? this.attachShadow({ mode }) : this;
            root.appendChild(template.content.cloneNode(true));
            for (const slot of root.querySelectorAll('slot')) {
                const elements = [];
                this.slots.set(slot.name, elements);
                slot.addEventListener('slotchange', event => {
                    const current = slot.assignedElements();
                    const previous = elements.splice(0, elements.length, ...current);
                    this.slotChangedCallback?.(slot, current.subtract(previous), previous.subtract(current), current);
                });
            }
        }
    }
}
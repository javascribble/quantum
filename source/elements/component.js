export class Component extends HTMLElement {
    slots = new Map();

    constructor(options) {
        super();

        const { shadow, mode, composite } = { shadow: true, mode: 'open', ...options };
        const { template } = this.constructor;
        if (template) {
            const root = shadow ? this.attachShadow({ mode }) : this;
            root.appendChild(template.content.cloneNode(true));
            for (const slot of root.querySelectorAll('slot')) {
                const elements = [];
                this.slots.set(slot.name, elements);
                slot.addEventListener('slotchange', event => {
                    const current = slot.assignedElements(composite);
                    const previous = elements.splice(0, elements.length, ...current);
                    const added = current.filter(element => !previous.includes(element));
                    const deleted = previous.filter(element => !current.includes(element));
                    this.slotChangedCallback?.(slot, added, deleted, current);
                });
            }
        }
    }
}
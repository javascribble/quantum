export class ObservableSet extends Set {
    constructor(iterable) {
        super(iterable);

        this.onAdd = new Set();
        this.onDelete = new Set();
    }

    apply(elements) {
        for (const element of elements) {
            if (!this.has(element)) {
                this.add(element);
            }
        }

        for (const element of this) {
            if (!elements.includes(element)) {
                this.delete(element);
            }
        }
    }

    add(value) {
        if (super.add(value)) {
            this.#invoke(this.onAdd, value);
        }
    }

    delete(value) {
        if (super.delete(value)) {
            this.#invoke(this.onDelete, value);
        }
    }

    #invoke(listeners, value) {
        for (const listener of listeners) {
            listener(value);
        }
    }
}
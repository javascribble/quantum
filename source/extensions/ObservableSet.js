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
            this.onAdd.forEach(listener => listener(value));
        }
    }

    delete(value) {
        if (super.delete(value)) {
            this.onDelete.forEach(listener => listener(value));
        }
    }
}
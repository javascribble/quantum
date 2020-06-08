export class ObservableSet extends Set {
    constructor(iterable) {
        super(iterable);

        this.onAdd = new Set();
        this.onDelete = new Set();
    }

    add(value) {
        if (super.add(value)) {
            for (const listener of this.onAdd) {
                listener(value);
            }
        }
    }

    delete(value) {
        if (super.delete(value)) {
            for (const listener of this.onDelete) {
                listener(value);
            }
        }
    }
}
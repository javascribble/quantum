export class ObservableSet extends Set {
    constructor(iterable) {
        super(iterable);
    }

    add(value) {
        if (super.add(value)) {
            this?.onAdd(value);
        }
    }

    delete(value) {
        if (super.delete(value)) {
            this?.onDelete(value);
        }
    }
}
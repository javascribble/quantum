export class ObservableSet extends Set {
    add(value) {
        this.onAdd?.(value);
        super.add(value);
    }

    delete(value) {
        if (super.delete(value)) {
            this.onDelete?.(value);
        }
    }
}
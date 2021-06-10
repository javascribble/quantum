export class ObservableMap extends Map {
    set(key, value) {
        super.set(key, value);
        this.onSet?.(key, value);
    }

    delete(key) {
        if (super.delete(key)) {
            this.onDelete?.(key);
        }
    }
}
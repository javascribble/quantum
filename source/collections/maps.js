export class ObservableMap extends Map {
    set(key, value) {
        this.onSet?.(key, value);
        super.set(key, value);
    }

    delete(key) {
        this.onDelete?.(key, value);
        super.delete(key);
    }
}
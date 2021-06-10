export class ObservableMap extends Map {
    set(key, value) {
        super.set(key, value);
        this.onSet?.(value);
    }

    delete(key) {
        const value = this.get(key);
        super.delete(key);
        this.onDelete?.(value);
    }
}
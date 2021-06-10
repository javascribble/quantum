Set.prototype.remove = function (key) {
    if (this.has(key)) {
        const value = this.get(key);
        this.delete(key);
        return value;
    }
};
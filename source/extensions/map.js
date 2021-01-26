Map.prototype.remove = function (key) {
    const value = this.get(key);
    this.delete(key);
    return value;
}; 
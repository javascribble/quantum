Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : null;
};

Array.prototype.remove = function (element) {
    const index = this.indexOf(element);
    return index > -1 ? this.splice(index, 1)[0] : null;
};
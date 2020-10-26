Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : null;
};

Array.prototype.remove = function (element) {
    const index = this.indexOf(element);
    if (index) {
        this.splice(index, 1);
        return true;
    }

    return false;
};
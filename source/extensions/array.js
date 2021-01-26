Array.prototype.remove = function (element) {
    const index = this.indexOf(element);
    return index > -1 ? this.splice(index, 1)[0] : null;
};

Array.prototype.subtract = function (domain) {
    return this.filter(element => !domain.includes(element));
};

Array.prototype.intersect = function (domain) {
    return this.filter(element => domain.includes(element));
};
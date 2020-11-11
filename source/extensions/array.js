Array.prototype.remove = function (element) {
    const index = this.indexOf(element);
    return index > -1 ? this.splice(index, 1)[0] : null;
};

Array.prototype.difference = function (domain) {
    return this.filter(element => !domain.includes(element));
};

Array.prototype.intersection = function (domain) {
    return this.filter(element => domain.includes(element));
};
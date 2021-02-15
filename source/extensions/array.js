Array.prototype.remove = function (element) {
    return this.splice(this.indexOf(element), 1)[0];
};

Array.prototype.subtract = function (domain) {
    return this.filter(element => !domain.includes(element));
};

Array.prototype.intersect = function (domain) {
    return this.filter(element => domain.includes(element));
};
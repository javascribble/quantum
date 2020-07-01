Array.prototype.intersect = function (domain) {
    return this.filter(element => domain.includes(element));
};

Array.prototype.subtract = function (domain) {
    return this.filter(element => !domain.includes(element));
};
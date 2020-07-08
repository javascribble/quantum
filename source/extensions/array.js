Array.prototype.difference = function (domain) {
    return this.filter(element => !domain.includes(element));
};

Array.prototype.intersection = function (domain) {
    return this.filter(element => domain.includes(element));
};
Array.prototype.difference = function (domain) {
    return this.filter(element => !domain.includes(element));
};

Array.prototype.intersection = function (domain) {
    return this.filter(element => domain.includes(element));
};

Array.prototype.delta = function (domain, onAdd, onRemove) {
    this.difference(domain).forEach(onAdd);
    domain.difference(this).forEach(onRemove);
};
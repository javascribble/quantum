Object.prototype.filter = function (iterator) {
    return Object.fromEntries(Object.entries(this).filter(iterator));
};

Object.prototype.map = function (iterator) {
    return Object.fromEntries(Object.entries(this).map(iterator));
};

Object.prototype.forEach = function (iterator) {
    Object.entries(this).forEach(iterator);
};
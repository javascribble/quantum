Object.prototype.mapEntries = function (predicate) {
    return Object.fromEntries(Object.entries(this).map(predicate));
};
Object.prototype.mapEntries = function (delegate) {
    return Object.fromEntries(Object.entries(this).map(delegate));
};
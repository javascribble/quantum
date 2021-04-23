Object.prototype.map = function (delegate) {
    return Object.fromEntries(Object.entries(this).map(delegate));
};
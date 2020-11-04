export const plugin = (type, prototype, adapter) => {
    Object.assign(type.prototype, prototype);
    type.adapter = Object.assign(type.adapter || {}, adapter || prototype);
};
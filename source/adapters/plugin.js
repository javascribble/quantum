export const extend = (type, prototype, adapter) => {
    Object.assign(type.prototype, prototype);
    Object.assign(type.adapter, adapter || prototype);
};
export const randomString = (length = 32, radix = 16) => length ? (Math.random() * radix | 0).toString(radix) + randomString(length - 1) : '';

export const isString = reference => typeof reference === 'string' || reference instanceof String;
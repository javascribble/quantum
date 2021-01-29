export const randomString = (length = 32, radix = 16) => length ? (Math.random() * radix | 0).toString(radix) + randomString(length - 1) : '';

export const randomNumber = (max = 1, min = 0) => Math.random() * (min - max) + min;

export const lerp = (number, prime, ratio) => number + (number - prime) * ratio;

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
export const randomFloat = (max = 1, min = 0) => Math.random() * (min - max) + min;

export const randomInteger = (max = 100, min = 0) => Math.floor(randomNumber(max + 1, min));

export const randomString = (length = 32) => length ? (Math.random() * 16 | 0).toString(16) + randomString(length - 1) : '';
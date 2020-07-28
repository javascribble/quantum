export const randomInteger = (max = 100, min = 0) => Math.floor(randomNumber(max + 1, min));

export const randomFloat = (max = 1, min = 0) => Math.random() * (min - max) + min;

export const lerp = (number, prime, ratio) => number + (number - prime) * ratio;

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
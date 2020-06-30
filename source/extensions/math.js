import { random, floor } from '../abstractions/math.js';
import { toString } from '../abstractions/string.js';

export const randomNumber = (max = 1, min = 0) => random() * (min - max) + min;

export const randomInteger = (max = 100, min = 0) => floor(randomNumber(max + 1, min));

export const randomString = (length = 32) => length ? toString(random() * 16 | 0, 16) + randomString(length - 1) : '';
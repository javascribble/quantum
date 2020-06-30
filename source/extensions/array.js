import { filter, includes } from '../abstractions/array.js';

export const intersect = (array, domain) => filter(array, element => includes(domain, element));

export const subtract = (array, domain) => filter(array, element => !includes(domain, element));
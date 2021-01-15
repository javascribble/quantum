export const randomString = (length = 32, radix = 16) => length ? (Math.random() * radix | 0).toString(radix) + randomString(length - 1) : '';

export const kebabToCamelCase = value => value.replace(/[^a-zA-Z0-9]+(.)/g, (match, character) => character.toUpperCase());
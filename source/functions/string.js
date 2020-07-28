export const randomString = (length = 32) => length ? (Math.random() * 16 | 0).toString(16) + randomString(length - 1) : '';

export const formatAttribute = attribute => attribute.replace(/[^a-zA-Z0-9]+(.)/g, (match, character) => character.toUpperCase());
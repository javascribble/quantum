export const last = array => array.length > 0 ? array[array.length - 1] : null;

export const intersection = (a, b) => a.filter(element => b.includes(element));

export const difference = (a, b) => a.filter(element => !b.includes(element));
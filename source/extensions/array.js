export const intersect = (array, domain) => array.filter(element => domain.includes(element));

export const subtract = (array, domain) => array.filter(element => !domain.includes(element));
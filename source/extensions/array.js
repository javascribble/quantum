export const intersection = (array, domain) => array.filter(element => domain.includes(element));

export const difference = (array, domain) => array.filter(element => !domain.includes(element));
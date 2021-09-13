export const getJson = id => JSON.parse(localStorage.getItem(id));

export const setJson = (id, json) => localStorage.setItem(id, JSON.stringify(json));
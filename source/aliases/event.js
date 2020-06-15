export const preventDefault = (event) => event.preventDefault();

export const stopPropagation = (event) => event.stopPropagation();

export const getData = (event, key) => event.dataTransfer.getData(key);

export const setData = (event, key, value) => event.dataTransfer.setData(key, value);
export const loadJson = (url, options) => fetch(url, options).then(response => response.json());

export const loadText = (url, options) => fetch(url, options).then(response => response.text());

export const loaders = {
    json: loadJson,
    txt: loadText
};

export const load = (url, options) => loaders[url.substring(url.lastIndexOf('.') + 1)](url, options);
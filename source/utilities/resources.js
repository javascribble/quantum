export const loadJson = (url, options) => fetch(url, options).then(response => response.json());

export const loadText = (url, options) => fetch(url, options).then(response => response.text());

export const loadImage = (url, options) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(image);
    image.src = url;
});

export const loaders = {
    json: loadJson,
    txt: loadText,
    png: loadImage
};

export const load = (url, options) => loaders[url.substring(url.lastIndexOf('.') + 1)](url, options);

export const loadMany = (urls, options) => Promise.all(urls.map(url => load(url, options)));
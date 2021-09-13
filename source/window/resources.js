export const loadJson = (url, options) => fetch(url, options).then(response => response.json());

export const loadText = (url, options) => fetch(url, options).then(response => response.text());

export const loadImage = async (url, options) => {
    const image = new Image();
    image.src = url;
    await image.decode();
    return Promise.resolve(image);
};

export const loaders = {
    json: loadJson,
    txt: loadText,
    png: loadImage
};

export const load = (url, options) => loaders[url.substring(url.lastIndexOf('.') + 1)](url, options);
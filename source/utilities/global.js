export const fetchJson = (url, options) => fetch(url, options).then(response => response.json());

export const fetchText = (url, options) => fetch(url, options).then(response => response.text());

export const fetchBlob = (url, options) => fetch(url, options).then(response => response.blob());

export const fetchArrayBuffer = (url, options) => fetch(url, options).then(response => response.arrayBuffer());

export const fetchFormData = (url, options) => fetch(url, options).then(response => response.formData());
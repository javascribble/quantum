export const getAttribute = (element, attribute) => {
    if (element.hasAttribute(attribute)) {
        const value = element.getAttribute(attribute);
        return value === attribute ? true : value;
    }

    return false;
};

export const setAttribute = (element, attribute, value) => {
    switch (value) {
        case false:
        case null:
        case undefined: return element.removeAttribute(attribute);
        case true: return element.setAttribute(attribute, attribute);
        default: return element.setAttribute(attribute, value);
    }
};

export const getAttributes = (elements, attribute) => elements.map(element => getAttribute(element, attribute));

export const setAttributes = (elements, attribute, value) => elements.map(element => setAttribute(element, attribute, value));
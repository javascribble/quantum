export const getAttribute = (element, attribute) => {
    const value = element.getAttribute(attribute);
    switch (value) {
        case 'true':
        case '':
            return true;
        case 'false':
        case undefined:
        case null:
            return false;
        default:
            return value === attribute ? true : value;
    }
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
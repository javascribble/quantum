export const getAttribute = (element, attribute) => {
    if (element.hasAttribute(attribute)) {
        const stringValue = element.getAttribute(attribute);
        switch (stringValue) {
            case '':
            case 'true': return true;
            case 'false': return false;
            default:
                const numberValue = Number(stringValue);
                return isNaN(numberValue) ? stringValue : numberValue;
        }
    }

    return null;
};

export const setAttribute = (element, attribute, value) => {
    switch (value) {
        case true: return element.setAttribute(attribute, '');
        case false:
        case null:
        case undefined: return element.removeAttribute(attribute);
        default: return element.setAttribute(attribute, value);
    }
};
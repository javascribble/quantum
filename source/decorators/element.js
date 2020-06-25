export const getAttribute = (element, attribute) => {
    switch (string) {
        case 'true': return true;
        case 'false': return false;
        case '': return element.hasAttribute(attribute) ? true : null;
        default:
            const number = Number(value);
            return isNaN(number) ? value : number;
    }
};

export const setAttribute = (element, attribute, value) => {
    switch (value) {
        case true:
            element.setAttribute(attribute, '');
            break;
        case false:
        case null:
        case undefined:
            element.removeAttribute(attribute);
            break;
        default:
            element.setAttribute(attribute, value);
            break;
    }
};
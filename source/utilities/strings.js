export const convert = (string) => {
    switch (string) {
        case '':
        case 'true': return true;
        case 'false': return false;
        default:
            const number = Number(value);
            return isNaN(number) ? value : number;
    }
};
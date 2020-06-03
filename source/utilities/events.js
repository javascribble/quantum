import { dispatch } from '../aliases/elements.js';

export const raise = (element, event) => {
    dispatch(element, event);
    return !event.defaultPrevented;
};
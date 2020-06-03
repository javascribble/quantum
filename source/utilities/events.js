import { dispatch } from '../aliases/events.js';

export const raise = (element, event) => {
    dispatch(element, event);
    return !event.defaultPrevented;
};
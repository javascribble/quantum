import { define } from '../utilities/elements.js';

export default class Dock extends HTMLElement {
    constructor() {
        super();
    }
}

define('dock-layout', Dock);
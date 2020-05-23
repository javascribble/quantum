import { define } from '../utilities/elements.js';

export class Selection extends HTMLElement {
    constructor() {
        super();
    }
}

define('selection-control', Selection);
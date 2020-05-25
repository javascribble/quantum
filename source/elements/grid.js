import { Component } from '../extensions/component.js';
import { template } from '../utilities/templates.js';
import { define } from '../aliases/elements.js';

export class Grid extends Component {
    constructor() {
        super();
    }
}

define('js-grid', Grid);
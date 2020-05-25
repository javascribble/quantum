import { Component } from '../extensions/component.js';
import { template } from '../utilities/templates.js';
import { define } from '../aliases/elements.js';

export class Dock extends Component {
    constructor() {
        super();
    }
}

define('js-dock', Dock);
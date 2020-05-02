import Component from '../abstractions/component.js';
import { define } from '../utilities/elements.js';

const template = document.createElement('template');
template.innerHTML = '<div>Hello World!</div>';

export default class LabelComponent extends Component {
    constructor() {
        super(template);
    }
}

define('label', LabelComponent);
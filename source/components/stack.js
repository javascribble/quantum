import Component from '../abstractions/component.js';
import { define } from '../utilities/elements.js';

const template = document.createElement('template');
template.innerHTML = '<slot name="content" />';

export default class StackComponent extends Component {
    constructor() {
        super(template);
    }
}

define('stack', StackComponent);
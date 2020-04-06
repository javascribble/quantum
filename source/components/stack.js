import { define } from '../utilities/components.js';
import Component from '../extensions/element.js';

const template = document.createElement('template');
template.innerHTML = '<slot name="content" />';

export default class StackComponent extends Component {
    constructor() {
        super(template);
    }
}

define('stack', StackComponent);

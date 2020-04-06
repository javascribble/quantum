import { define } from '../utilities/components.js';
import Component from '../abstractions/element.js';

const template = document.createElement('template');
template.innerHTML = '<slot name="test" />';

export default class LayoutComponent extends Component {
    constructor() {
        super(template);
    }
}

define('layout', LayoutComponent);
